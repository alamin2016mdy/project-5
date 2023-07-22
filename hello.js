var lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit";
console.log(lorem);
console.log(typeof lorem);
console.log(lorem.toUpperCase());
console.log(lorem.toLowerCase());
console.log(lorem.split( ));
console.log(lorem.indexOf("amet"));


var number = 5;
console.log(number);
console.log(typeof number);
console.log(number > 2);
console.log(number < 2);
console.log(number + number);
console.log(number - number);
console.log(number * number);
console.log(number / number);
console.log(number % number);


var number1 = 55.5;
var number2 = 22.6;
var number3 = "22.4";
var number4 = "54.6";
var number5 = 0.1;
var number6 = 0.2;

number1++;
number1 = '' + number1;
console.log(number1);
var number1 = Math.abs(number1);
console.log(typeof number1);

number4 = +number4;
var number4 = Math.round(number4);
console.log(typeof number4);
console.log(number4);

number3 = parseFloat(number3);
number3 =  Math.ceil(number3);
console.log(number3);
console.log(typeof number3);

number2--;
number2 = parseInt(number2);
number2 = Math.floor(number2);
console.log(number2);

total = number5 + number6;
console.log(total);
total1 = total.toFixed(3)
console.log(total1);

var random = Math.random()*100;
var result = Math.round(random);
console.log(result);


var bananaPrice = 15
if(bananaPrice < 10){
    console.log('কমলা খাওয়া যাবে')
}
else{
    console.log('কমলা খাওয়া যাবে না')
}

var bananaPrice = 15
if(bananaPrice > 10){
    console.log('কমলা খাওয়া যাবে না')
}
else{
    console.log('কমলা খাওয়া যাবে')
}

var bananaPrice = 15
if(bananaPrice == 10){
    console.log('কমলা খাওয়া যাবে')
}
else{
    console.log('কমলা খাওয়া যাবে না')
}

var bananaPrice = 15
if(bananaPrice != 10){
    console.log('কমলা খাওয়া যাবে')
}
else{
    console.log('কমলা খাওয়া যাবে না')
}


var চাকরি_পাইছো = true;
var জমানো_টাকা = 500;
if (চাকরি_পাইছো  == true && জমানো_টাকা > 50000){console.log("চলো তোমার বিয়ের বাবস্থা করি");}
else if (চাকরি_পাইছো == true){console.log("কিছু দিন পর থেকে খুঁজবো");}
else {console.log("তোমার কপালে বিয়ে নাই")};




