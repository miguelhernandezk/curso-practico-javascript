let priceProduct1 = 699;
const promoCodes = ["MIKEISBATMAN", "DONTTELLANYONE"];
var usedCodes = [];

function calculatePriceWithDiscount(price, discount){
    const totalPricePercentage = 100 - discount;
    const totalPriceDiscount = (price * totalPricePercentage) / 100;
    return totalPriceDiscount;
}

function getPriceDiscount(){
    const inputCode = document.getElementById("inputCode");
    const discountCode = inputCode.value;
    var discount;
    var updateStatus = true;

    switch(discountCode.toUpperCase()){
      case promoCodes[0]:
        if (!usedCodes.includes(promoCodes[0])){
          discount = 50;
          usedCodes.push(promoCodes[0]);
        }
        else{
          alert("Code previously used");
          updateStatus = false;
        }
        break;
      case promoCodes[1]:
        if (!usedCodes.includes(promoCodes[1])){
          discount = 30;
          usedCodes.push(promoCodes[1]);
        }
        else{
          alert("Code previously used");
          updateStatus = false;
        }
        break;
      default: 
        console.log(promoCodes[0]);
        alert("Please enter a valid Code")
        updateStatus = false;
    }
    if (updateStatus==true){
      const priceWithDiscount = calculatePriceWithDiscount(priceProduct1, discount);

      const priceText = document.getElementById("priceText");
      priceText.innerText = "The total price after discount is $" + priceWithDiscount;
    }
}
// console.log({
//     originalPrice,
//     discount,
//     totalPricePercentage,
//     totalPrice
// });
