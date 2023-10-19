import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
// eslint-disable-next-line import/no-extraneous-dependencies
import less from "less";

export default defineConfig({
  plugins: [
    handlebars(),
    {
      name: "less",
      // eslint-disable-next-line consistent-return
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
  server: {
    port: 3000,
  },
});
