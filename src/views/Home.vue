<template>
  <div>
    <div>
      <Principal />
      <Invitation />
      <Events />
      <Maps />
      <History />
    </div>
  </div>
</template>

<script>
import Invitation from "../components/Invitation.vue";
import Principal from "../components/Principal";
import History from "../components/History";
import Events from "../components/Events";
import Maps from "../components/Maps"
export default {
  name: "Home",
  components: {
    Principal,
    Invitation,
    History,
    Events,
    Maps
  },
};
</script>
<style >
.bg2 {
  background-image: url("../../images/gallery-5.jpg");
  max-width: 100%;
  height: auto;
}
</style>
