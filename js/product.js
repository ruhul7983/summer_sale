var totalPrice = 0;
var discountPrice = 0;
var total = 0;
document.getElementById('first-product').addEventListener('click',function () {
    const pN1 = getProductName('product-n-1');
    const pP1 = getProductPrice("product-1");

    setProductName(pN1);
    
    totalPrice = totalPrice + pP1;

    setProductPrice(totalPrice);
    setTotalPrice(totalPrice);
    if(totalPrice>0){
        document.getElementById("make-purchase").removeAttribute("disabled");
    }

})
document.getElementById('second-product').addEventListener('click',function () {
    const pN1 = getProductName('product-n-2');
    const pP1 = getProductPrice("product-2");

    setProductName(pN1);
    
    totalPrice = totalPrice + pP1;

    setProductPrice(totalPrice);
    setTotalPrice(totalPrice);
    if(totalPrice>0){
        document.getElementById("make-purchase").removeAttribute("disabled");
    }

})
document.getElementById('third-product').addEventListener('click',function () {
    const pN1 = getProductName('product-n-3');
    const pP1 = getProductPrice("product-3");

    setProductName(pN1);
    
    totalPrice = totalPrice + pP1;

    setProductPrice(totalPrice);
    setTotalPrice(totalPrice);
    if(totalPrice>0){
        document.getElementById("make-purchase").removeAttribute("disabled");
    }

})
document.getElementById('forth-product').addEventListener('click',function () {
    const pN1 = getProductName('product-n-4');
    const pP1 = getProductPrice("product-4");

    setProductName(pN1);
    
    totalPrice = totalPrice + pP1;

    setProductPrice(totalPrice);
    setTotalPrice(totalPrice);
    if(totalPrice>0){
        document.getElementById("make-purchase").removeAttribute("disabled");
    }

})
document.getElementById('fifth-product').addEventListener('click',function () {
    const pN1 = getProductName('product-n-5');
    const pP1 = getProductPrice("product-5");

    setProductName(pN1);
    
    totalPrice = totalPrice + pP1;

    setProductPrice(totalPrice);
    setTotalPrice(totalPrice);
    if(totalPrice>0){
        document.getElementById("make-purchase").removeAttribute("disabled");
    }

})
document.getElementById('sixth-product').addEventListener('click',function () {
    const pN1 = getProductName('product-n-6');
    const pP1 = getProductPrice("product-6");

    setProductName(pN1);
    
    totalPrice = totalPrice + pP1;

    setProductPrice(totalPrice);
    setTotalPrice(totalPrice);

    if(totalPrice>0){
        document.getElementById("make-purchase").removeAttribute("disabled");
    }
})




/* Discount Button */

document.getElementById("coupon").addEventListener('keyup',function () {
    const getCoupon = getValueById("coupon");
    
    if(getCoupon === "SELL200"){
        document.getElementById('btn-apply').removeAttribute("disabled");
    }
    
})

document.getElementById("btn-apply").addEventListener('click',function () {
    discountPrice = totalPrice*.2;
    total = totalPrice - discountPrice;
    
    setDiscountPrice(discountPrice);
    setTotalPrice(total);

})

document.getElementById("make-purchase").addEventListener('click',function () {
    alert("You purchase Successfully");
})

