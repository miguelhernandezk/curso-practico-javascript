let priceProduct1 = 699; // Define the product price
const promoCodes = ["MIKEISBATMAN", "DONTTELLANYONE"]; // Define the Promo Codes in an array
var usedCodes = []; // We'll store here the Promo Codes that have been used


/* We calculate de price after discount. Discount is different depending on the Promo Code */
function calculatePriceWithDiscount(price, discount){
    const totalPricePercentage = 100 - discount;
    const totalPriceDiscount = (price * totalPricePercentage) / 100;
    return totalPriceDiscount;
}

/* This is the function we call when the user click on the button */
function getPriceDiscount(){
    const inputCode = document.getElementById("inputCode");
    const discountCode = inputCode.value; //We get the value 
    var discount;
    var updateStatus = true;

    switch(discountCode.toUpperCase()){ // To upperCase, just in case the user entered lowercase letters
      case promoCodes[0]:               // We define the discount according to the promoCode. Then we "push" that code into de "used codes"
        if (!usedCodes.includes(promoCodes[0])){
          discount = 50;
          usedCodes.push(promoCodes[0]);
        }
        else{
          alert("Code previously used"); // If the user enters the same code, we tell them that it's been used.
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
      default:                // If used enters nothing or an invalid Promo Code, this happens
        console.log(promoCodes[0]);
        alert("Please enter a valid Code")
        updateStatus = false;
    }

    // Depending on the previous lines, "updateStatus" might be true or false. If true, it means the user entered a valid PRomoCode,
    // so the next lines will run. 
    if (updateStatus==true){
      const priceWithDiscount = calculatePriceWithDiscount(priceProduct1, discount);

      const priceText = document.getElementById("priceText");
      priceText.innerText = "The total price after discount is $" + priceWithDiscount;
    }
}
