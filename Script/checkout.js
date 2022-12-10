
let checkout = JSON.parse(localStorage.getItem('myCheckout'))
console.log(checkout);

let tbody = document.querySelector('#table');

Object.keys(checkout).forEach((item) => {
    tbody.innerHTML +=
        `
    <tr>
        <td>${checkout[item].id}</td>
        <td>${checkout[item].title}</td>
        <td>${checkout[item].text}</td>
        <td>${checkout[item].price}</td>
        <td><a href="#" class="btn btn-edit">Edit</a></td>
        <td><a href="#" class="btn btn-delete">Delete</a></td>

        
    </tr>
    `
})

