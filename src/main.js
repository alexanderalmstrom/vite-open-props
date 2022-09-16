import(`./css/shared/main.scss`);
import(`./css/${import.meta.env.VITE_BRAND}/main.scss`);

import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");
