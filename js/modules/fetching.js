// Fetching data from API and return it as JSON
async function fetchData() {
    const dataResponse = await fetch(`https://ghibliapi.herokuapp.com/films`)
    const jsonData = await dataResponse.json()
    return jsonData;
  } 
  
  // When starting the application making sure that everything is connected and using await fetchData for no errors //
  export {fetchData};