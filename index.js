fetch("/data/data.json")
.then((products) => {
    return products.json()
})

.then((data) => {
let cards =  document.querySelector('cards');
Object.keys(data).forEach(item) => {
    console.log(data[item].img);
    if(data[item] && data[item].custom == "board"){
        cards.innerHTML +=
        `
        <div class="row">
          <div class="col">
            <div class="card" style="width: 18rem;">
              <img src=${data[item].img} id="img" alt="short-surfboard">
              <div class="card-body">
                <h5 class="title">${data[item].name}</h5>
                <p class="text">${data[item].text}</p>
                <p class="price">${data[item].price}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>`
    }
}
})