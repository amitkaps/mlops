console.log("Running JS Code");

/* For Dev Server */
const routesList = import.meta.glob("./pages/*.md", { as: "raw" });
const routes = Object.keys(routesList);
console.log(routes);

const page = import.meta.glob(`./pages/*.md"`);

console.log(pages);

let content = JSON.parse(pages["./pages/index.md"]);

console.log(content);

const el = document.querySelector("#content");
el.innerHTML = content;
