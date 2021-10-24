



// document.getElementById("case-increase").addEventListener("click", function(){
//     const caseInput = document.getElementById("case-count");
//    const caseCount = parseInt(caseInput.value);
//    const caseNewCount = caseCount+1;
//    caseInput.value = caseNewCount;
//    console.log(caseNewCount);
//    const caseTotal = caseNewCount*59;
//    console.log(caseTotal);
//    document.getElementById("case-total").innerText = caseTotal;

// })

// document.getElementById("case-decrease").addEventListener("click", function(){
//     const caseInput = document.getElementById("case-count");
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount-1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount*59;
//     document.getElementById("case-total").innerText = "$"+ caseTotal;
// })


// document.getElementById("case-increase").addEventListener("click", function(){
//     handleProductChange(true)
// })

// document.getElementById("case-decrease").addEventListener("click", function(){
//     handleProductChange(false)
// });

// function handleProductChange (isIncrease){
//     const caseInput = document.getElementById("case-count");
//     const caseCount = parseInt(caseInput.value);
//     let caseNewCount = caseCount;
//     if(isIncrease==true){
//         caseNewCount = caseCount+1;
//     } 
//     if(isIncrease==false && caseCount>0){
//         caseNewCount = caseCount-1;
//     }
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount*59;
//     document.getElementById("case-total").innerText =caseTotal;
// };


// document.getElementById("phone-increase").addEventListener("click", function(){
//     handlePhoneChange(true)
// })
// document.getElementById("phone-decrease").addEventListener("click", function(){
//     handlePhoneChange(false)
// })
// function handlePhoneChange(isIncrease){
//     const phoneInput = document.getElementById("phone-count");
//     const phoneCount= parseInt(phoneInput.value);
//     let phoneNewCount = phoneCount;
//     if(isIncrease==true){
//          phoneNewCount = phoneCount + 1;
//     } 
//     if(isIncrease==false && phoneCount>0){
//         phoneNewCount = phoneCount - 1;
//     }
//      phoneInput.value = phoneNewCount;
//      const phoneTotal = phoneNewCount*1219;
//     document.getElementById("phone-total").innerText = phoneTotal;
// }



document.getElementById("case-increase").addEventListener("click", function () {
    handleProductChange("case", true)
    totalCalculate()
})

document.getElementById("case-decrease").addEventListener("click", function () {
    handleProductChange("case", false)
    totalCalculate()
});


document.getElementById("phone-increase").addEventListener("click", function () {
    handleProductChange("phone", true)
    totalCalculate()
})
document.getElementById("phone-decrease").addEventListener("click", function () {
    handleProductChange("phone", false)
    totalCalculate()
})

function handleProductChange(product, isIncrease) {
    // const productInput = document.getElementById(product+"-count");
    // const productCount = parseInt(productInput.value);
    const productCount = getInputValue(product);

    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount = productCount + 1;
    }
    if (isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;
    }
    document.getElementById(product + "-count").value = productNewCount;
    let productTotal = 0;
    if (product == "phone") {
        productTotal = productNewCount * 1219;
    }
    if (product == "case") {
        productTotal = productNewCount * 59;
    }
    document.getElementById(product + "-total").innerText = productTotal;
};

function totalCalculate() {
    // const phoneInput = document.getElementById("phone-count");
    // const phoneCount = parseInt(phoneInput.value);
    const phoneCount = getInputValue("phone");
    const caseCount = getInputValue("case");



    const total = phoneCount * 1219 + caseCount * 59;
    document.getElementById("subtotal").innerText = total;

    // if (total == 0) {
    //     document.getElementById("tax").innerText = 0;
    // } 
    // else{
    //     const tax = total * 0.1;
    //     const taxNumber = tax.toFixed(2);
    //     document.getElementById("tax").innerText = taxNumber;
    // }

    const tax = total * 0.1;
    const taxNumber = tax.toFixed(2)
    document.getElementById("tax").innerText = taxNumber;


    const grandTotal = total + tax;
    document.getElementById("grandTotal").innerText = grandTotal;
};

//number of product input value parse function 
function getInputValue(product) {
    const productInput = document.getElementById(product + "-count");
    const productCount = parseInt(productInput.value);
    return productCount;
}


