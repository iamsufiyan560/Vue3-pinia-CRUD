import "./assets/index.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createNotivue, Notivue } from "notivue";
import App from "./App.vue";
import router from "./router";
import { globalLoader } from "vue-global-loader";
import "notivue/notifications.css"; // Only needed if using built-in notifications
import "notivue/animations.css"; // Only needed if using built-in animations
const notivue = createNotivue(/* Options */);
const app = createApp(App);
app.use(globalLoader);
app.use(notivue);
app.use(createPinia());
app.use(router);

app.mount("#app");
