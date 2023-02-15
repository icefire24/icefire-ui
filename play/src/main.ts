import { createApp } from "vue";
import App from "./App.vue";
import { IceIcon } from "@icefireui/components";
import "@icefireui/theme-chalk/index.scss";
import "./assets/main.css";
//BUG
createApp(App).use(IceIcon).mount("#app");
