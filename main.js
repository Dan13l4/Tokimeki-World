import { changeView } from "./view-controller/index.js";

window.addEventListener('load', () => {
    changeView(window.location.hash);
  });

window.addEventListener('hashchange', () => {
    changeView(window.location.hash);
  });