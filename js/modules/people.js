import {getData} from './fetching.js';
import {renderPeople} from './renderPeople';

async function initPeople() {
    const dataPeople = await getData()
    renderPeople(dataPeople)
}
initPeople()