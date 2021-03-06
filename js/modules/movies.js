import {fetchData} from './fetching.js';
import {routeHandler} from './routingMovies.js';
import {renderMovies} from './renderMovies.js';

async function init() {
    const data = await fetchData()
    renderMovies(data)
    routeHandler(data);
}
init();

