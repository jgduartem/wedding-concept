<template>
  <div>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary launch-btn" @click="showModal = true">
      Confirmar
    </button>

    <!-- Modal -->
    <div class="modal-mask" v-if="showModal == true">
      <div class="confirmation-modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Hola! {{ guest ? guest.nick_name : "" }}</h5>
            </div>
            <div class="modal-body">
              <div>
                <label style="margin-right: 1rem">{{ guest.full_name }} (Tú)</label>
                <input type="checkbox" :id="guest.full_name" :value="{ name: guest.full_name }" v-model="checkedNames">
                <div class="menu-items" v-if="checkedNames.some(e => e.name == guest.full_name)">
                  <div v-for="(item, idx) in menu" :key="idx">
                    <div class="card"
                      :class="{ 'dishes': !isItemSelected(0, item.name, guest.full_name), 'selected-dish': isItemSelected(0, item.name, guest.full_name) }"
                      @click="uppsertMenu({ dish: item.name, selected_by: guest.full_name, index: 0 })">
                      <img class="card-img-top" :src="item.photo_url" alt="Card image cap">
                      <div class="card-body">
                        <span class="card-title">{{ item.name }}</span>
                        <p class="card-text">{{ item.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-for="(dependent, index) in guest.dependents" :key="index">
                <div v-if="dependent.name !== guest.full_name">
                  <label :for="dependent.name" style="margin-right: 1rem">{{ dependent.name }}</label>
                  <input type="checkbox" :id="index" :value="{ name: dependent.name }" v-model="checkedNames">
                  <div class="menu-items" v-if="checkedNames.some(e => e.name == dependent.name)">
                    <div v-for="(item, idx) in menu" :key="idx">
                      <div class="card"
                        :class="{ 'dishes': !isItemSelected(index + 1, item.name, dependent.name), 'selected-dish': isItemSelected(index + 1, item.name, dependent.name) }"
                        @click="uppsertMenu({ dish: item.name, selected_by: dependent.name, index: index + 1 })">
                        <img class="card-img-top" :src="item.photo_url" alt="Card image cap">
                        <div class="card-body">
                          <span class="card-title">{{ item.name }}</span>
                          <p class="card-text">{{ item.description }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="() => {
                this.getUserConfirmations(guest.dependents)
                showModal = false

              }">Cerrar</button>
              <button type="button" class="btn btn-primary" @click="confirmForm">Confirmar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { setDoc, doc, deleteDoc } from 'firebase/firestore';
import { db, getConfirmations } from '../firebase/index'
import swal from 'sweetalert';
export default {
  name: "ConfirmationModal",
  props: {
    guest: null
  },
  data() {
    return {
      showModal: false,
      checkedNames: [],
      menu: [
        { name: "El Roque", description: "Churrasco de pescado blanco con puré aliñado a la crema de mariscos gratén.", photo_url: "el-roque-vivo.jpeg" },
        { name: "Tartufo Filete y Papas", description: "Filete de pechuga grillada y trufada sobre papas a la crema y chicharrón de tocino.", photo_url: "tartufo-vivo.jpeg" },
        { name: "Tepuy De Lomito", description: "Lomito En Reducción De Vinagre Balsámico Sobre Puré De Tomates Secos, Queso De Cabra Y Pesto De Rúcula.", photo_url: "tepuy-vivo.jpeg" },
        { name: "Nuggets Con Papas Fritas (Menú Infantil)", description: "", photo_url: "vivo-nuggets.png" },
        { name: "Hamburguesa Con Queso (Menú Infantil)", description: "", photo_url: "vivo-burger.png" },
      ],
      selectedMenu: [],
      isEditing: false,
      confirmationList: [],
      initialList: []
    }
  },
  beforeMount() {
    this.getUserConfirmations(this.guest.dependents)
  },
  methods: {
    uppsertMenu(value) {
      const { index, ...otherProps } = value
      if (this.isItemSelected(index, otherProps.dish, otherProps.selected_by)) {
        Vue.delete(this.selectedMenu, index)
      } else {
        Vue.set(this.selectedMenu, index, { ...otherProps });
      }
    },
    isItemSelected(index, dish, selected_by) {
      return (this.selectedMenu[index]?.dish == dish && this.selectedMenu[index]?.selected_by == selected_by) || this.selectedMenu.some(item => item.dish == dish && item.selected_by == selected_by)
    },
    confirmForm() {
      let formattedData = []
      try {
        this.checkedNames.map((confirmation) => {
          formattedData.push({
            name: confirmation.name,
            confirmed_by: this.guest.full_name,
            dish: (this.selectedMenu.find((item) => item && item.selected_by == confirmation.name)).dish
          })
        })
      } catch (error) {
        swal({title: `${this.guest.nick_name}!`, text: "Debes seleccionar un plato por cada persona confirmada!", buttons: {confirm: {text: "Ok", className: "ok-button"}}, icon: "error"});
        console.log(error)
        return
      }
      const toDelete = this.initialList.filter((e) => !formattedData.some(i => i.name == e.name))
      if (toDelete.length > 0) {
        toDelete.map(async (item) => {
        await deleteDoc(doc(db, "confirmations", item.name))
      })
      }
      formattedData.map(async (confirmation) => {
        await setDoc(doc(db, "confirmations", confirmation.name), confirmation);
      })
      this.getUserConfirmations(this.guest.dependents)
      swal({title: `Gracias ${this.guest.nick_name}!`, text: "Hemos registrado tu confirmación!", buttons: {confirm: {text: "Ok", className: "ok-button"}}, icon: "success"});
      this.showModal = false
      
    },
    async getUserConfirmations(dependents) {
      dependents.push({ name: this.guest.full_name })
      const response = await getConfirmations(dependents)
      if (response.length > 0) {
        this.isEditing = true
      }
      response.forEach((confirmation, index) => {
        this.checkedNames.push({ name: confirmation.name })
        this.initialList.push({ name: confirmation.name })
        this.confirmationList.push({ [confirmation.name]: confirmation.confirmed_by })
        this.selectedMenu.push({ index, dish: confirmation.dish, selected_by: confirmation.name })
        // if (index == 0) {
        //   this.uppsertMenu({index: 0, dish: confirmation.dish, selected_by: confirmation.name})
        // } else {
        //   this.uppsertMenu({index: this.guest.dependents.findIndex(dependent => dependent.name == confirmation.name), dish: confirmation.dish, selected_by: confirmation.name})
        // }
      })

    }
  },
}
</script>
<style>
.dishes {
  width: 18rem;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid lightgray;
}

.selected-dish {
  width: 18rem;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid #D68910;
}

.modal-mask {
  display: flex !important;
  justify-content: center;
  ;
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .4s ease;
  overflow: scroll;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  min-height: 35px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .2s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(0.95);
  transform: scale(0.95);
}

.confirmation-modal {
  min-width: 320px;
}

.modal-header {
  display: flex;
  font-size: 2rem;
}

.modal-body {
  display: flex;
  flex-direction: column;
}

.menu-items {
  display: flex;
  overflow: scroll;
}

.card-img-top {
  width: -webkit-fill-available;
  max-height: 132px;
}

.card-title {
  display: flex;
  text-align: start;
  padding: 0.5rem;
  font-weight: bold;
}

.card {
  height: 290px;
  max-height: 290px;
  margin-right: 1rem;
}

.card-text {
  font-size: 14px;
}

.ok-button {
  background-color:#D68910;
}

.ok-button:not([disabled]):hover {
  background-color: #D68910;
}
</style>