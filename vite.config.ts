import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "localhost",
    open: true,
    port: 3000,
    strictPort: true,
  },
  plugins: [react()],
});
