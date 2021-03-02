// Fetching data from API and return it as JSON
async function fetchData() {
  const dataResponse = await fetch(`https://ghibliapi.herokuapp.com/films`)
  const jsonData = await dataResponse.json()
  return jsonData;
} 

async function getData() {
  const getPeople = await fetch(`https://ghibliapi.herokuapp.com/people`)
  const people = await getPeople.json()
  return people;
} 

export {fetchData, getData};