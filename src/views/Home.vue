<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div v-if="this.$store.state.userData">
      {{ this.$store.state.userData }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
