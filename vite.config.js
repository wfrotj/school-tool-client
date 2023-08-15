import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/school-tool-client",
  plugins: [react()],
  server: {
    proxy: "localhost: 3001",
  },
});
