import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This is so I don't have to import the functions in every file
  test: {
    globals: true,
  },
});
