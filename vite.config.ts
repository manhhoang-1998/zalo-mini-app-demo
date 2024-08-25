import reactRefresh from "@vitejs/plugin-react-refresh";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    root: "./src",
    base: "",
    plugins: [reactRefresh()],
    resolve: {
      alias: {
        "@components": path.resolve(process.cwd(), "src/components"),
        "@components/*": path.resolve(process.cwd(), "src/components/*"),
        "@pages": path.resolve(process.cwd(), "src/pages"),
        "@pages/*": path.resolve(process.cwd(), "src/pages/*"),
        "@types": path.resolve(process.cwd(), "src/types"),
        "@types/*": path.resolve(process.cwd(), "src/types/*"),
        "@routes": path.resolve(process.cwd(), "src/routes"),
        "@routes/*": path.resolve(process.cwd(), "src/routes/*"),
      },
    },
  });
};
