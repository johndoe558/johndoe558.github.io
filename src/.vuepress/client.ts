import { defineClientConfig } from "vuepress/client";
import ToggleSidebar from "./components/ToggleSidebar.vue";

export default defineClientConfig({
  enhance({ app }) {
    // Daftarkan komponen secara global
    app.component("ToggleSidebar", ToggleSidebar);
  },
});