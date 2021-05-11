import {getData} from './fetching.js';
import {renderPeople} from './renderPeople.js';
import {routeHandler} from './routingPeople.js';

async function initPeople() {
    const dataPeople = await getData()
    renderPeople(dataPeople)
    routeHandler(dataPeople)
}
initPeople()