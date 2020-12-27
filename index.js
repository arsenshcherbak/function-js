function isAdult(value){
  if (isNaN(value)){
    return undefined;
  } else if (value >= 18 && value <= 122){
    return true;
  } else {
    return false;
  } 
};

function checkMultiplicity(num1, num2){
  if(num1 % num2 === 0){
    return true;
  } else if(num1 % num2 !== 0){
    return false;
  }else{
    return false;
  }
};


function calcTriangle(a, b, c){
  if(isNaN(a) || isNaN(b) || isNaN(c)){
    return false;
  }else if( c > (a + b) ||  b > (a + c)  || a > (b + c)){
    return false;
  }else{
    return true;
  }
};

function getAreaTriangle(a,b,c){
  let semiPer = (a + b + c) / 2;
  let square = semiPer*(semiPer - a)*(semiPer - b)*(semiPer - c);
  return Math.sqrt(square);
};


function getAreaRectangle(a,b){
  return a * b;
};

function getAreaRhombus(a,b){
  let area = a * b / 2;
  return area;
};

function getAreaCylinder(height, radius){
  const pi = 3.14;
  let square = (2 * pi * (radius * radius)) + (2 * pi * radius * height);
  return square;
};