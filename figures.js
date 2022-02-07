// Code -> Square

console.group("Squares");

function squarePerimeter(side) {
    return side * 4;
}

function squareArea(side) {
    return side * side;
}
console.groupEnd();

// code -> Triangle

console.group("Triangles");

function trianglePerimeter(side1, side2, base) {
    return side1 + side2 + base;
}

function triangleArea(base, height){
    return (base * height) / 2;
}

console.groupEnd();


// Code -> Circle

console.group("Circles");

function circleDiameter(radius){
    return radius * 2;
}

const PI = Math.PI;

function circlePerimeter(radius){
    return PI * circleDiameter(radius);
}

function circleArea(radius){
    return PI * (radius**2);
}
console.groupEnd();


// Aquí vamos a interactuar con el HTML
function getSquarePerimeter(){
    const input = document.getElementById("squareSide");
    const value = Number(input.value);

    const perimeter = squarePerimeter(value);
    const squareResult = document.getElementById("squareResult");
    squareResult.innerText = "The square perimeter is: " + perimeter + ".";
}

function getSquareArea(){
    const input = document.getElementById("squareSide");
    const value = Number(input.value);

    const area = squareArea(value);
    const squareResult = document.getElementById("squareResult");
    squareResult.innerText = "The square area is: " + area + ".";
}

function getTrianglePerimeter(){
    const input1 = document.getElementById("triangleSide1");
    const input2 = document.getElementById("triangleSide2");
    const input3 = document.getElementById("triangleBase");

    const side1 = Number(input1.value);
    const side2 = Number(input2.value);
    const base = Number(input3.value);
    
    const perimeter = trianglePerimeter(side1, side2, base);
    const triangleResult = document.getElementById("triangleResult");
    triangleResult.innerText = "The triangle perimeter is: " + perimeter + ".";
}

function getTriangleArea(){
    const input1 = document.getElementById("triangleBase");
    const input2 = document.getElementById("triangleHeight");

    const base = Number(input1.value);
    const height = Number(input2.value);

    const area = triangleArea(base, height);
    const triangleResult = document.getElementById("triangleResult");
    triangleResult.innerText = "The triangle area is: " + area + ".";
}

function getCirclePerimeter(){
    const input = document.getElementById("circleRadius");
    const radius = Number(input.value);

    const perimeter =  circlePerimeter(radius);
    const circleResult = document.getElementById("circleResult");
    circleResult.innerText = "The circle perimeter is: " + perimeter + ".";
}

function getCircleArea(){
    const input = document.getElementById("circleRadius");
    const radius = Number(input.value);

    const area =  circleArea(radius);
    const circleResult = document.getElementById("circleResult");
    circleResult.innerText = "The circle area is: " + area + ".";
}

