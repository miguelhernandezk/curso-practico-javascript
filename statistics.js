function getArithmeticMean(list){
    // let listSum = 0;

    // for (let i = 0; i < list.length; i++){
    //     listSum += list[i];
    // }

    const listSum = list.reduce(
        function(accumValue = 0, newElement){
            return accumValue + newElement;
        }
    );

    const listAverage = listSum/list.length;

    return listAverage;
}

function getMode(list){
    const countList = {};
    list.map(function(element){
        if(countList[element])
            return countList[element] += 1;
        else
            return countList[element] = 1;
    });
    listMode = Object.entries(countList).sort(function (a,b){
        return a[1]-b[1];
    });
    console.log(listMode);
    return listMode[listMode.length - 1];
}

function getMedian(list){
    const sortedList = list.sort((a,b) => a-b);
    const lenList = sortedList.length;
    if(lenList % 2 === 0){
        return (sortedList[parseInt(lenList/2)] + sortedList[parseInt(lenList/2)- 1]) / 2;
    }
    else{
        return sortedList[parseInt(lenList/2)];
    }
}

/* ------------------------------------------------------*/

function getAnalysis(){
    const listValue = document.getElementById("inputData");
    if(listValue.value.replace(/\s+/g,"")==""){
        alert("Enter valid values");
    }
    else{
        list = listValue.value.split(",").map(
            function(elementInList){
                return Number(elementInList);
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
