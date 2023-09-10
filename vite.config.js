import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dotenv from "dotenv";
import tsconfigPaths from "vite-tsconfig-paths";

dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      baseUrl: ".",
      paths: {
        "~": "/src",
      },
    },
  },
});
