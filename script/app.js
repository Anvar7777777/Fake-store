const deleteIcon = document.querySelector("delete-icon");

fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then((data) => {
    console.log(data)
    let data1 = "";
    data.map((values) => {
        data1+= `
        <div class="card">
            <div class="img">
                <img src=${values.image} id="poster">
            </div>
            <h2 class="title" id="title">Price: ${values.price}</h2>
            <div class="price">
                <h5 id="price">Discount: $${values.rating.count}</h5>
                <h5 id="rating">Desc: ${values.title}</h5>
                <h5 id="rating">Name: ${values.category}</h5>
            </div>
            <i id="delete-icon" class="fa-solid fa-trash"></i>
        </div>
        `
        document.querySelector('.container').innerHTML=data1;
    })
    
})

.catch(err => {
	console.error(err);
});




// deleteIcon.addEventListener("click", () => {

// })

// deleteIcon.addEventListener('click', (e) => {
//     if(e.target.classList.contains("fa-solid")){
//       if(e.target.dataset.userId){
//         fetch(`https://fakestoreapi.com/products/${e.target.dataset.userId}`, 
//           {method: "DELETE"}
//         )
//           .then(response => {
//             if(response.status == 204){
//               alert("Muvaffaqiyatli o'chirdingiz!")
//             }
//           })
//       }
//     }
//   })