import "./assets/index.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { globalLoader } from "vue-global-loader";

const app = createApp(App);
app.use(globalLoader);

app.use(createPinia());
app.use(router);

app.mount("#app");
