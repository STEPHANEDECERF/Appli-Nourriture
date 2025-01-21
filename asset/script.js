fetch(`https://world.openfoodfacts.org/api/v3/product/5997523313111`)
.then(response => response.json())
.then(data => {
console.log(data)


})