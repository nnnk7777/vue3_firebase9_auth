import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDhotp5SeO1mcFElFNR9KTzkX9fovjKk1E",
  authDomain: "auth-test-e0a1b.firebaseapp.com",
  projectId: "auth-test-e0a1b",
  storageBucket: "auth-test-e0a1b.appspot.com",
  messagingSenderId: "803000262516",
  appId: "1:803000262516:web:660df2ff6208442c91d621",
};

initializeApp(firebaseConfig);

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
