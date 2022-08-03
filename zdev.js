import Markdoc from "@markdoc/markdoc";
import config from "./zmarkdoc.mjs";
import page from "page";

if (import.meta.env.DEV) {
  let mdConfig = config;
  function renderHtml(mdoc, config = mdConfig) {
    const ast = Markdoc.parse(mdoc);
    const content = Markdoc.transform(ast, config);
    const html = Markdoc.renderers.html(content);
    const el = document.querySelector("#content");
    el.innerHTML = html;
  }

  /* For Dev Server */
  const mdocs = import.meta.glob("./pages/*.md", { as: "raw", eager: true });
  const routes = Object.keys(mdocs);
  console.log(routes);

  // Make Main Routes
  const homeDoc = mdocs["./pages/index.md"];
  page("/", () => {
    renderHtml(homeDoc);
  });
  console.log("hello");

  // Make Rest of the Routes
  for (const [mdocUrl, text] of Object.entries(mdocs)) {
    let x = mdocUrl.split("/")[2];
    let route = "/".concat(x.split(".")[0]);
    console.log(route);
    if (route !== "/index")
      page(route, () => {
        renderHtml(text);
      });
  }

  page();
}
