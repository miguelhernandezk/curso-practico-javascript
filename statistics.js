function getArithmeticMean(list){

    const listSum = list.reduce(        // We the the sum of all values
        function(accumValue = 0, newElement){
            return accumValue + newElement;
        }
    );

    const listAverage = listSum/list.length;

    return listAverage;
}

function getMode(list){
    const countList = {};
    list.map(function(element){ // We count how many times each number in the list appears
        if(countList[element])
            return countList[element] += 1;
        else
            return countList[element] = 1;
    });
    listMode = Object.entries(countList).sort(function (a,b){ 
        return a[1]-b[1];   // We sort the numbers the repetition of each number. From lowest to highest
    });
    return listMode[listMode.length - 1]; // We return the last number, since it's the one which repeats most times. 
}

function getMedian(list){
    const sortedList = list.sort((a,b) => a-b); // We sort the numbers from lowest to highes
    const lenList = sortedList.length;
    if(lenList % 2 === 0){  // If dataset has an even numer of elements, we get the arithmetic mean of the two middle numbers
        return (sortedList[parseInt(lenList/2)] + sortedList[parseInt(lenList/2)- 1]) / 2;
    }
    else{ // else we return the middle number
        return sortedList[parseInt(lenList/2)];
    }
}

/* ------------------------------------------------------*/

// Following code is executed when user hits the button
function getAnalysis(){
    const listValue = document.getElementById("inputData");
    if(listValue.value.replace(/\s+/g,"")==""){
        alert("Enter valid values"); // If user hits the button when input is empty.
    }
    else{ // We use commas to split the numbers in an array made of strings
        list = listValue.value.split(",").map(
            function(elementInList){
                return Number(elementInList); // we convert the strings into numbers
        });

        const arithmeticMean = getArithmeticMean(list);
        const median = getMedian(list);
        const mode = getMode(list);

        document.getElementById("result1Text").innerText = "The arithmetic mean (average) is: " + arithmeticMean;
        document.getElementById("result2Text").innerText = "The median is: " + median;
        document.getElementById("result3Text").innerText = "The mode is: " + mode[0] + " and was found " + mode[1] + " times";
    }
}

/* ------------------------------------------------------*/
