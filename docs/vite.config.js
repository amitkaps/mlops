// import Markdoc from "@markdoc/markdoc";
import { defineConfig } from "vite";
import config from "./zmarkdoc.mjs";

function renderMarkdocToHtml(mdoc, config) {
  const ast = Markdoc.parse(mdoc);
  const content = Markdoc.transform(ast, config);
  const html = Markdoc.renderers.html(content);
  return html;
}

// Transpile Markdoc document to html
function markdoc(config) {
  const fileRegex = /\.md$/;

  return {
    name: "markdoc",
    enforce: "pre",

    async transform(mdoc, file) {
      if (!fileRegex.test(file)) return null;
      const html = renderMarkdocToHtml(mdoc, config);
      const esm = JSON.stringify(html);

      return {
        code: `export default ${esm}`,
        map: null, // provide source map if available
      };
    },
  };
}

export default defineConfig({
  plugins: [markdoc(config)],
  build: { manifest: true },
});
