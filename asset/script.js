
const urlParams = new URLSearchParams(window.location.search);
id = urlParams.get(`id`)


fetch(`https://world.openfoodfacts.org/api/v3/product/${id}`)
.then(response => response.json())
.then(data => {
console.log(data)
console.log(data.product.id)
console.log(data.product.categories)
console.log(data.product.ingredients_text_fr)
console.log(data.product.product_name_fr)
console.log(data.product.quantity)
console.log(data.product.ecoscore_grade)
console.log(data.product.ecoscore_score)
console.log(data.product.nutriscore_grade)
console.log(data.product.nova_groups)
console.log(data.product.brands)
console.log(data.product)

document.getElementById("interface").innerHTML = `
   <div class="text-white">
            <p class="fs-3 mt-2 text-center fw-bold">${data.product.product_name_fr}</p>
            <div class="text-center">
                <img src="${data.product.selected_images.front.display.fr}" alt="${data.product.product_name_fr}">
            </div>
              <p class="text-center mt-4">Code barre : ${data.product.id}</p>
              <p class="text-center">${data.product.categories}</p>
              <p class="text-center"> ${data.product.brands} - Poids : ${data.product.quantity}</p>
              <p class="text-center"></p>
            <div class="d-flex justify-content-center gap-4"> 
            <img src="./asset/img/Novascore/Nova${data.product.nova_groups}.svg" alt="" class=''>
            <img src="./asset/img/Nutriscore/${data.product.nutriscore_grade}.svg" alt="" class=''>
            </div>
              <p class="text-center mt-4">ingredients : ${data.product.ingredients_text_fr}</p>
            


        </div>`


})