<template>
  <div>
    <div >
      <Principal/>
      <Invitation/>
    </div>
  </div>
</template>

<script>
import Invitation from '../components/Invitation.vue';
import Principal from "../components/Principal";
export default {
  name: "Home",
  components: {
    Principal,
    Invitation
  }
};
</script>
<style >
.bg2 {
  background-image: url("../../images/img_bg_2.jpg");
}
</style>
