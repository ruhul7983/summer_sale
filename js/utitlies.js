function getProductPrice(productId) {
    const price = document.getElementById(productId).innerText;
    const productPrice = parseFloat(price);
    return productPrice;

}

function getProductName(productName) {
    const name = document.getElementById(productName).innerText;
    return name;
}

function setProductName(productName) {
    const viewProduct = document.getElementById("view-product");
    const newLi = document.createElement("li");
    newLi.textContent =  productName;
    viewProduct.appendChild(newLi);
}

function setProductPrice(productPrice){
    const productTotalPrice = document.getElementById("total-price");
    productTotalPrice.innerText = productPrice + " Tk";

}

function setDiscountPrice(productPrice){
    const productTotalPrice = document.getElementById("discount");
    productTotalPrice.innerText = productPrice + " Tk";

}
function setTotalPrice(productPrice){
    const productTotalPrice = document.getElementById("total");
    productTotalPrice.innerText = productPrice + " Tk";

}


function getValueById(inputId) {
    const getField = document.getElementById(inputId);
    const getFieldValue = getField.value;
    
    
    return getFieldValue;
}