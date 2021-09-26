import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { initializeApp } from "firebase/app";
import config from "./firebase.config";

initializeApp(config);

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
