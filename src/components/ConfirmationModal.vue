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
                <input type="checkbox" :id="guest.full_name" :value="guest.full_name" v-model="checkedNames">
                <div class="menu-items" v-if="checkedNames.some(e => e == guest.full_name)">
                  <div v-for="(item, idx) in menu" :key="idx">
                    <div class="card" :style="`width: 18rem; border: 1px solid lightgrey; border-radius: 4px; cursor: pointer;`" @click="uppsertMenu({dish: item.name, selected_by: guest.full_name, index: 0})">
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
                <label :for="dependent.name" style="margin-right: 1rem">{{ dependent.name }}</label>
                <input type="checkbox" :id="index" :value="dependent.name" v-model="checkedNames">
                <div class="menu-items" v-if="checkedNames.some(e => e == dependent.name)">
                  <div v-for="(item, idx) in menu" :key="idx">
                    <div class="card" style="width: 18rem; border: 1px solid lightgrey; border-radius: 4px; cursor: pointer;" @click="uppsertMenu({dish: item.name, selected_by: dependent.name, index: index + 1})">
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
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="showModal = false">Cerrar</button>
              <button type="button" class="btn btn-primary">Confirmar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ConfirmationModal",
  props: {
    guest: Object
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
      selectedMenu: []
    }
  },
  computed: {
    isItemSelected(index, dish, selected_by) {
      return this.selectedMenu[index]?.dish == dish && this.selectedMenu[index]?.selected_by == selected_by
    }
  },
  methods: {
    uppsertMenu(value) {
      const {index, ...otherProps} = value
      this.selectedMenu[index] = {...otherProps}
      console.log("this.selectedMenu", this.selectedMenu)
    }
  },
}
</script>
<style>
.modal-mask {
  display: flex !important;
  justify-content: center;;
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
</style>