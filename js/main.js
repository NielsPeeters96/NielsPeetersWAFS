import {fetchData, init} from './modules/fetching.js';

fetchData();

container.classList.remove("container");
container.classList.add("detailpage");

init();