let checkout = JSON.parse(localStorage.getItem('myCheckout'))
let products = JSON.parse(localStorage.getItem('products ')) ?
  JSON.parse(localStorage.getItem('products ')) :

  [
    {
      "id": 1,
      "img": "https://i.postimg.cc/Tw35sDjh/short-b.png",
      "title": "Short-surfboard",
      "text": "5'10 white sharp nose Mayham Lost surfboard",
      "price": "R7879.99",
      "custom": "board"
    },

    {
      "id": 2,
      "img": "https://i.postimg.cc/Pqr1g9Tt/soft-top.jpg",
      "title": "Soft-top surfboard",
      "text": "5'2 soft-top round nose Wisdom surfboard",
      "price": "R5979.99",
      "custom": "board"

    },

    {
      "id": 2,
      "img": "https://i.postimg.cc/B6PPsGyG/torq-surfboards-torq-long-surfboard-white-pinline.jpg",
      "title": "Long-surfboard",
      "text": "7'2 Torq-white-pineline long-surfboard",
      "price": "R10979.99",
      "custom": "board"

    },

    {
      "id": 3,
      "img": "https://i.postimg.cc/T1nKNczn/pink-b.webp",
      "title": "Hard-top-surfboard",
      "text": "6'8 Roxy-pink hard-top-long-surfboard",
      "price": "R13300.99",
      "custom": "board"
    },

    {
      "id": 4,
      "img": "https://i.postimg.cc/tJGT6xsJ/softboard-roxy-fish.webp",
      "title": "Hardtop-surfboard",
      "text": "5'4 short-surfboard",
      "price": "R9079.99",
      "custom": "board"
    },

    {
      "id": 5,
      "img": "https://i.postimg.cc/nhShk5X6/beige.webp",
      "title": "Long-surfboard",
      "text": "5'8 Woodline surfboard",
      "price": "R10559.99",
      "custom": "board"
    },

    {
      "id": 6,
      "img": "https://i.postimg.cc/Kzy04mPb/bblue.webp",
      "title": "Hard-top-surfboard",
      "text": "6'8 Roxy-pink long-surfboard",
      "price": "R13300.99",
      "custom": "board"
    },

    {
      "id": 7,
      "img": "https://i.postimg.cc/J7kt8JxS/Longboard9-0-Greencopy.webp",
      "title": "Hardtop-surfboard",
      "text": "5'4 short-surfboard",
      "price": "R9079.99",
      "custom": "board"
    },

    {
      "id": 8,
      "img": "https://i.postimg.cc/GmhDJKw6/tropical.jpg",
      "title": "Long-surfboard",
      "text": "5'8 Woodline surfboard",
      "price": "R10559.99",
      "custom": "board"
    },

    {
      "id": 9,
      "img": "https://i.postimg.cc/Fst5LCcs/Surfboard-snake-flower-walldecoration-wolfbadger-Catchii-muurdecoratie.jpg",
      "title": "Hard-top-surfboard",
      "text": "6'8 Roxy-pink long-surfboard",
      "price": "R13300.99",
      "custom": "board"
    },

    {
      "id": 10,
      "img": "https://i.postimg.cc/G36xpLd5/neon-pink.png",
      "title": "Hardtop-surfboard",
      "text": "5'4 short-surfboard",
      "price": "R9079.99",
      "custom": "board"
    },

    {
      "id": 11,
      "img": "https://i.postimg.cc/HWbHBCT7/floral.jpg  ",
      "title": "Long-surfboard",
      "text": "5'8 Woodline surfboard",
      "price": "R10559.99",
      "custom": "board"
    },
    {
      "id": 12,
      "img": "https://i.postimg.cc/HWbHBCT7/floral.jpg  ",
      "title": "Short-surfboard",
      "text": "5'8 Woodline surfboard",
      "price": "R10559.99",
      "custom": "board"
    }
  ]



products.forEach((item) => {
  document.querySelector('#cards').innerHTML +=
    `
          <div class="col p-3-4 mt-5">
            <div class="card" style="width: 18rem;">
              <img src=${item.img} id="img" alt="short-surfboard">
              <div class="card-body">
                <h5 class="title">${item.title}</h5>
                <p class="text">${item.text}</p>
                <p class="price">${item.price}</p>
                <a href="#" class="btn btn-primary">Add to checkout </a>
              </div>
            </div>`

})

let addCheckout = document.querySelectorAll('.btn');

Object.keys(addCheckout).forEach((item) => {
  addCheckout[item].addEventListener('click', (e) => {
    console.log('clicked, addCheckout[item')
    console.log(products[item])
    checkout.push(products[item]);
    console.log(checkout);
    localStorage.setItem('myCheckout', JSON.stringify(checkout))
  })
})


