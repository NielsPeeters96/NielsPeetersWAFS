function routeHandler(data) {
    const overview = document.getElementById('container')
    const detailpage = document.getElementById('detailpage')
    
    routie({
      ':id': function (id) {
        let filterpeople= data.filter(people => people.id == id)[0]
        
        const name = document.getElementById('name')
        name.innerHTML = filterpeople.name
        
        const age = document.getElementById('age')
        age.innerHTML = filterpeople.age
        
        const gender = document.getElementById('gender')
        gender.innerHTML = filterpeople.gender
        
        overview.classList.toggle('hidden')
        detailpage.classList.toggle('hidden')
      },
      '': function (){
        overview.classList.remove('hidden')
        detailpage.classList.add('hidden')
      }
    })
  }
  
  export {routeHandler};