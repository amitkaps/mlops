import fs from "node:fs";
import path from "node:path";
import Markdoc from "@markdoc/markdoc";
import config from "./zmarkdoc.mjs";

// Configuration
// Folders & Main Files Link
const docs = "docs";
const pages = "pages";
const output = "dist";

// Create directory links
const __dirname = path.resolve();
const pagesDir = path.join(__dirname, docs, pages);
const outputDir = path.join(__dirname, docs, output);
const template = fs.readFileSync(path.join(outputDir, "index.html"), "utf-8");

function renderMarkdocToHtml(mdoc, config) {
  const ast = Markdoc.parse(mdoc);
  const content = Markdoc.transform(ast, config);
  const html = Markdoc.renderers.html(content);
  return html;
}

// Make the Routes in the Content Directory
const routes = fs.readdirSync(`${pagesDir}`).map((file) => {
  const name = file.replace(/\.md$/, "").toLowerCase();
  const fileName = file;
  return { name, fileName };
});

(async () => {
  console.log(`Creating Pages in ${output}`);
  // pre-render each route...
  for (const { name, fileName } of routes) {
    const pageDoc = fs.readFileSync(path.join(pagesDir, fileName), "utf8");
    const pageHtml = renderMarkdocToHtml(pageDoc, config);
    const page = template.replace(`<!--CONTENT NODE-->`, pageHtml);
    const filePath = `${name}.html`;
    fs.writeFileSync(path.join(outputDir, filePath), page);
    console.log(filePath);
  }
})();
