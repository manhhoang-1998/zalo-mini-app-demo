import reactRefresh from "@vitejs/plugin-react-refresh";
import path from "path";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
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
        "@utils": path.resolve(process.cwd(), "src/utils"),
        "@utils/*": path.resolve(process.cwd(), "src/utils/*"),
        "@apis": path.resolve(process.cwd(), "src/apis"),
        "@apis/*": path.resolve(process.cwd(), "src/apis/*"),
      },
    },
    define: {
      "process.env": JSON.stringify(env),
    },
  });
};
