import { createApp } from "vue";

import "./main.scss";
await import(`./css/${import.meta.env.VITE_BRAND}/main.scss`);

import App from "./App.vue";

createApp(App).mount("#app");
