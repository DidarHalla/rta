import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import {copy} from 'vite-plugin-copy';

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    build: {
      assetsDir: "assets",
    },
    base: process.env.BASE_URL || "/",
    plugins: [react(), copy([
      { src: './assets/', dest: 'dist/' },
  ])],
  });
};
