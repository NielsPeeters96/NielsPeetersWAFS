// Naming variables and connecting them with HTML
const app = document.getElementById('root');

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

// Fetching data from API and return it as JSON
async function fetchData() {
  const dataResponse = await fetch(`https://ghibliapi.herokuapp.com/films`)
  const jsonData = await dataResponse.json()
  return jsonData;
} 

// When starting the application making sure that everything is connected and using await fetchData for no errors //
async function init() {
  const data = await fetchData()
  console.log(data);
  renderMovies(data)
}

// Using renderMovies function to add variables for each parameter in the database
function renderMovies(data) {
  data.forEach((movie) => {
  const card = document.createElement('div')
  card.setAttribute('class', 'card',)
  const link =document.createElement('a')
  link.href=`#${movie.id}`

  const h1 = document.createElement('h1')
  h1.textContent = movie.title
        
  const p = document.createElement('p')
  movie.description = movie.description.substring(0, 300)
  p.textContent = `${movie.description}...`
  link.href=`#${movie.description}`
    
  const int = document.createElement('int')
  int.textContent = movie.release_date
  // link.href=`#${movie.release_date}`
    
  container.appendChild(link)
  card.appendChild(h1)
  link.appendChild(card)
})

  // Routie to ID
  routie( {
  ':id': function(id) {
    console.log(id);
    // detailPage(id);
  },
  ':description': function(description){
    console.log(description);
  }
})

// Map function
// function detailPage(?)  {
//   let a = data.map(key => ({id: key.id, title: key.title, description: key.description}))
//   console.log(a)
// };
}

// Classlist active of display none so you only show 1 page
init()