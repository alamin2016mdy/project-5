var MyName = 'Al amin';
console.log(MyName);
console.log(typeof MyName);

var MyPhoneNumber = +8801319639176;
console.log(MyPhoneNumber);
console.log(typeof MyPhoneNumber);

var lorem10 = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, rem!';
console.log(lorem10);
console.log(lorem10.toLowerCase());
console.log(lorem10.toUpperCase());
console.log(lorem10.split(' '));
console.log(lorem10.indexOf("sit"));

var number1 = 12.1;
var number2 = '123.0255';
number2 = parseFloat(number2);
number2 = +number2;
number1 = parseInt(number1);
var total = number1 + number2;
console.log(total);

var number3 = 0.1;
var number4 = 0.2;
var total = number3 + number4;
total = total.toFixed(3);
console.log(total);

var number5 = 2; 
number5 = ''+number5;
console.log(typeof number5);

var number6 = 85;
var number7 = 70;
number7++;
number6--;
var total = number6 - number7;
console.log(total);

var number8 = 85;
var number9 = 70;
var total = number8 * number9;
console.log(total);

var number10 = 85;
var number11 = 70;
var total = number10 / number11;
console.log(total);

var number12 = 85;
var number13 = 70;
var total = number12 % number13;
console.log(total);

var FastName = 'Al Amin';
var LastName = 'Khan';
var total = FastName + ' ' + LastName;
console.log(total);

var number = 5.6564555555;
var result = Math.round(number);
var result1 = Math.ceil(number);
var result2 = Math.floor(number);
console.log(result2);
console.log(result1);
console.log(result);

var number14 = Math.random() * 40;
var result3 = Math.round(number14);
console.log(result3);



