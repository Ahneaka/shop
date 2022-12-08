let products = JSON.parse(localStorage.getItem('products ')) ?
JSON.parse(localStorage.getItem('products ')) : 

[
  {
      "img":"https://i.postimg.cc/Tw35sDjh/short-b.png",
      "title": "Short-surfboard",
      "text": "5'10 white sharp nose Mayham Lost surfboard",
      "price":"R7879.99",
      "custom": "board"
  },

  {
      "img":"https://i.postimg.cc/Pqr1g9Tt/soft-top.jpg",
      "title": "Soft-top surfboard",
      "text": "5'2 soft-top round nose Wisdom surfboard",
      "price":"R5979.99",
      "custom": "board"

  },

  {
      "img":"https://i.postimg.cc/B6PPsGyG/torq-surfboards-torq-long-surfboard-white-pinline.jpg",
      "title": "Long-surfboard",
      "text": "7'2 Torq-white-pineline long-surfboard",
      "price":"R10979.99",
      "custom": "board"

  }
]




products.forEach((item) => {
document.querySelector('#table').innerHTML+=
        ` <tr>
        <th scope="row">1</th>
        <td>${item.title}</td>
        <td>${item.text}</td>
        <td>${item.price}</td>
       
      </tr>
      
     `
    
})

fetch('delete ', {
  method: 'DELETE',
})
.then(res => res.json())
.then(console.log);
            


