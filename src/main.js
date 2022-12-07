import { createApp } from "vue";
import { createPinia } from "pinia";
import { createHead } from "@vueuse/head";
import App from "./App.vue";
import router from "./router";
import layouts from "~/layouts/index";
import "~/assets/styles/index.css";

import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const pinia = createPinia();
const head = createHead();

const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(head);
app.use(layouts);
app.use(PrimeVue);

app.mount("#app");
