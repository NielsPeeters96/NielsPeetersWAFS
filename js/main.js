import {fetchData, init} from './modules/fetching.js';
import {routeHandler} from './modules/routing.js';

fetchData();

routeHandler();

init();