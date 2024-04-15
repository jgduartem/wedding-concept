<template>
  <div>
    <div>
      <Principal />
      <Invitation />
      <Events title="Ceremonia eclesiástica" startTime="6:00 PM" day="Jueves 09" month="Mayo, 2024"
        :message="eventOneMessage" />
      <Maps ubicationTitle="Ubicación" ubication="Parroquia Nuestra Señora de la Chiquinquirá"
        url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15707.123907795607!2d-64.681255!3d10.198434!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2d749cd05272b1%3A0x76cb50c806b6500f!2sIglesia%20Nuestra%20Se%C3%B1ora%20de%20La%20Chiquinquira!5e0!3m2!1ses!2sve!4v1712535442872!5m2!1ses!2sve"
        width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade" />
      <div v-if="isInvited">
        <Events title="Recepción y fiesta" startTime="7:00 PM" day="Jueves 09" month="Mayo, 2024"
          :message="eventTwoMessage" :postData="postData" />
        <Maps ubicationTitle="Ubicación" ubication="Vivo Rest"
          url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15707.439272633927!2d-64.6892969!3d10.1920375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2d7382b3f91c17%3A0xc706d7fc41f07f56!2sVIVO%20Rest!5e0!3m2!1ses!2sve!4v1712281745440!5m2!1ses!2sve"
          width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade" />
        <ConfirmationModal :guest="guest"/>
      </div>
      <!-- <History /> -->
    </div>
  </div>
</template>

<script>
import Invitation from "../components/Invitation.vue";
import Principal from "../components/Principal";
//import History from "../components/History";
import Events from "../components/Events";
import Maps from "../components/Maps"
import { getGuestByPhone } from "../firebase"
import ConfirmationModal from "../components/ConfirmationModal.vue";
export default {
  name: "Home",
  components: {
    Principal,
    Invitation,
    //History,
    Events,
    Maps,
    ConfirmationModal
  },
  data() {
    return {
      phoneNumber: "",
      guest: null
    }
  },
  mounted() {
    this.phoneNumber = this.$route.query.id
    this.getGuest(this.$route.query.id)
  },
  methods: {
    async getGuest() {
      if (this.phoneNumber) {
        this.guest = await getGuestByPhone(this.phoneNumber)
      }
    }
  },
  computed: {
    eventOneMessage() {
      return `Con gran felicidad, les invitamos a compartir con nosotros un momento especial el día 09 de mayo de 2024. 
                    Nos uniremos en matrimonio en una emotiva ceremonia eclesiástica en la parroquia Nuestra Señora de la Chiquinquirá,
                     a las 6:00 PM. Su presencia será un honor para nosotros en este día de amor y compromiso. 
                     Esperamos con cariño que nos acompañen.`
    },
    eventTwoMessage() {
      return `¡La celebración continúa! Después de la ceremonia, les invitamos a unirse a nosotros en la fiesta y recepción en honor a nuestro matrimonio. 
                    La velada será en el restaurante Vivo, a partir de las 07:00 PM. 
                    Únanse a nosotros para disfrutar de buena comida, música y momentos inolvidables. 
                    ¡Esperamos verles allí!`
    },
    postData() {
      return `Preferimos recibir nuestro regalo de boda en $ y €`
    },
    isInvited() {
      return this.guest ? true : false
    }
  },
};
</script>
<style>
.bg2 {
  background-image: url("../../images/gallery-5.jpg");
  max-width: 100%;
  height: auto;
}
</style>
