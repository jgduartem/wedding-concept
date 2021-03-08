<template>
  <div>
    <div>
      <Principal />
      <Invitation />
      <Events />
      <History />
    </div>
  </div>
</template>

<script>
import Invitation from "../components/Invitation.vue";
import Principal from "../components/Principal";
import History from "../components/History";
import Events from "../components/Events";
export default {
  name: "Home",
  components: {
    Principal,
    Invitation,
    History,
    Events,
  },
};
</script>
<style >
.bg2 {
  background-image: url("../../images/img_bg_2.jpg");
}
</style>
