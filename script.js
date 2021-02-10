// Je maakt variabele aan & connect je met HTML, vervolgens laat je het zien via appendChild //
const app = document.getElementById('root');

const logo = document.createElement('img')
logo.src = 'https://www.herzogcompany.com/wp-content/uploads/2019/12/HCO_CaseBanner_TheMoviesTitle-2048x640.jpg'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

// Je fetched de data van de API en maakt er vervolgens jsonData van //
async function fetchData() {
  const dataResponse = await fetch(`https://ghibliapi.herokuapp.com/films`)
  const jsonData = await dataResponse.json()
  return jsonData;
} 

// Dit zorgt ervoor dat je applicatie start, in de variable data stop je fetchdata en vervolgens render je de data bij renderMovies //
async function init() {
  const data = await fetchData()
  console.log(data);
  renderMovies(data)
  
}

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

  // Routie naar ID
  routie( {
  ':id': function(id) {
    console.log(id);
    // detailPage(id);
  },
  ':description': function(description){
    console.log(description);
  }
  })

// Map functie
// function detailPage(?)  {
//   let a = data.map(key => ({id: key.id, title: key.title, description: key.description}))
//   console.log(a)
// };
  
}

// Classlist active of display none wanneer je 1 pagina wil laten zien en je de homepagina wil hide


init()