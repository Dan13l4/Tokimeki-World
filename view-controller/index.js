import { components } from "../views/index.js";

const changeView = (route) => {
    const container = document.getElementById('root');
    container.innerHTML = '';

    switch (route) {
        case '':
        { return container.appendChild(components.home()); }
        case '#/':
        { return container.appendChild(components.home()); }
        default:
      }
    };
    export { changeView };