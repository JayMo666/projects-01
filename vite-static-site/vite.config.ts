import { defineConfig } from 'vite'
import { resolve } from "path";
import fs from "fs-extra";
import vue from '@vitejs/plugin-vue'
import VitePages from "vite-plugin-pages"
import ViteMarkdown from "vite-plugin-md";
import matter from "gray-matter";
import ViteComponents from 'vite-plugin-components'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    VitePages({
      extensions: ["vue", 'md'],
      pagesDir: "pages",
      extendRoute(route) {
        console.log('route', route)
        const path = resolve(__dirname, route.component.slice(1));
        const md = fs.readFileSync(path, "utf-8");
        const { data } = matter(md);
        route.meta = Object.assign(route.meta || {}, { frontmatter: data })
      }
    }),
    ViteMarkdown(),
    ViteComponents({
      extensions: ["vue", "md"],
      customLoaderMatcher: (path) => path.endsWith(".md"),
    })
  ]
})
