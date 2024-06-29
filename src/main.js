import { createApp } from "vue";
import App from "./App.vue";
import router from "./components/router/Router";

const app = createApp(App).use(router).mount("#app");
