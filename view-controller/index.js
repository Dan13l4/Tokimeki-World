import { components } from "../views/index.js";

const changeView = (route) => {
    const container = document.getElementById('root');
    container.innerHTML = '';

    switch (route) {
        case '':
        { return container.appendChild(components.home()); }
        case '#/':
        { return container.appendChild(components.home()); }
        case '#/tokimekiUno':
        { return container.appendChild(components.guiaUno()); }
        case '#/citas':
        { return container.appendChild(components.citas()); }
        case '#/chicos':
        { return container.appendChild(components.chicos()); }
        case '#/HazukiKei':
        { return container.appendChild(components.KeiHazuki()); }
        default:
      }
    };
export { changeView };