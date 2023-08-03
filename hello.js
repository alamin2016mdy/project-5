// ARRAY
var numbers = [12, 22, 33, 55, 54, 45, 23, 41, 62, 32];
numbers.push(66, 66);
console.log(numbers);
numbers.pop();
console.log(numbers);
numbers.shift();
console.log(numbers);
numbers.unshift(65, 55);
console.log(numbers);
var part = numbers.slice(5, 8);
console.log(part);

// CONCAT
var product = 'mobile phone';
var price = '10000';
var price = parseInt(price);
var x = `I have a ${product}, The price of the phone is ${price} BDT`;
console.log(x);


// PARSEINT & SPLIT
var sceenheight = 1024;
var height = (1024 / 3 * 2) + 'px';
var numb2 = parseInt(height.split('px')[0]);
console.log(numb2);

var fullName = "Muhammad Alim";
splittedName = fullName.split(' ');
var firstName = splittedName[0];
var lastName = splittedName[1];
console.log(firstName);
console.log(lastName);


// ARRAY JOIN
var foodList1 = ["tomato", "spaghetti", "pizza"];
var foodList2 = ["pinto", "black", "garbanzo"];
var foodList3 = ["peanut", "almond"];
console.log(foodList1.concat(foodList2, foodList3));


// OBJECT
let person = {
    firstName1 : 'muhammad',
    lastName1 : 'Al Amin',
    age : 23,
    hobbies : ['basketball', 'golf', 'running', 'soccer', 'volleyball', 'badminton'],
    living : {
        'city' : 'dhaka',
        'country' : 'Bangladesh'
    },
    
    salary : function(){
        return 20000000;
    }
};

person.lastName1 = 'khan',
console.log(person.lastName1);

delete person.age;

person.middleName = 'Al Amin',
person.mail = 'abcd@gmail.com',
console.log(person);

for(let key in person){
    console.log(key + ': '+ person[key]);
};

console.log(person.living.city);
console.log(person.salary());
