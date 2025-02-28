import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
    rollupOptions: {
      onLog(level, log, handler) {
        // Ellenőrizzük, hogy log.cause objektum-e és van-e message tulajdonsága
        if (
          log.cause &&
          typeof log.cause === "object" &&
          log.cause !== null &&
          "message" in log.cause &&
          (log.cause as { message: unknown }).message ===
            `Can't resolve original location of error.`
        ) {
          return;
        }
        handler(level, log);
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  server: {
    proxy: {
      "/wp-json": {
        target: "https://palace-poker.hu/ujadmin",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/wp-json/, "/wp-json"),
      },
    },
  },
});
