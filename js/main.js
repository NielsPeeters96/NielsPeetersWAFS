import {fetchData} from './modules/fetching.js';
import {routeHandler} from './modules/routing.js';
import {renderMovies} from './modules/render.js';

async function init() {
    const data = await fetchData()
    renderMovies(data)
    routeHandler(data);
}

init();