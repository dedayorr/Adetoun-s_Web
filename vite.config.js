import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.PNG"],
  server: {
    proxy: {
      "/shopify-api": {
        target: "https://xs5imu-cy.myshopify.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/shopify-api/, ""),
      },
    },
  },
});
