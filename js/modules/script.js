import {fetchData, init} from './fetching';
import {renderMovies} from './render';

// Naming variables and connecting them with HTML
const app = document.getElementById('root');

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

fetchData();
renderMovies();

// // Map function
// function detailPage(id)  {
//   let a = data.map(key => ({id: key.id, title: key.title, description: key.description}))
//   console.log(a)
// };

// Classlist active of display none so you only show 1 page
init();