// Routie to ID
function routeHandler(data) {
  const overview = document.getElementById('container')
  const detailpage = document.getElementById('detailpage')
  routie({
    ':id': function (id) {
      let filtermovie = data.filter(movie => movie.id == id)[0]
      const description = document.getElementById('description')
      description.innerHTML = filtermovie.description
      overview.classList.toggle('hidden')
      detailpage.classList.toggle('hidden')
    },
    '': function (){
      overview.classList.remove('hidden')
      detailpage.classList.add('hidden')
    } // detailpage hide overview page showen
  })
}

export {routeHandler};