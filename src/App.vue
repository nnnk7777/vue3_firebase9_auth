<template>
  <div id="nav">
    <div v-if="!this.$store.state.userData">
      <button @click="login()" type="button" name="button" style="button">
        ログインする
      </button>
    </div>
    <div v-else>
      <button @click="logout()" type="button" name="button" style="button">
        ログアウトする
      </button>
    </div>
  </div>
  <router-view />
</template>

<script>
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

export default {
  methods: {
    login() {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();

      signInWithPopup(auth, provider);
    },
    logout() {
      const auth = getAuth();
      auth.signOut();
    },
  },
  created() {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.$store.commit("setUser", {
          name: user.displayName,
          mail: user.email,
          image: user.photoURL,
        });
        console.log("ログインしました");
      } else {
        this.$store.commit("setUser", null);
        console.log("ログアウトしました");
      }
      console.log(this.$store.state.userData);
    });
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
