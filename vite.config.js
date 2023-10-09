import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import less from "less";

export default defineConfig({
  plugins: [
    handlebars(),
    {
      name: "less",
      async transform(code, id) {
        if (id.endsWith(".less")) {
          const { css } = await less.render(code);
          return {
            code: css,
            map: null,
          };
        }
      },
    },
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
