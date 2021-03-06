// Lecture: Arrow function 1

const years = [1990, 1993, 1994, 1998];

//ES5

var ages5 = years.map(function(el) {
  return 2018 - el;
})

console.log(ages5);

// ES6
let ages6 = years.map(el => 2018 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2018 - el}`);
console.log(ages6);

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1} : ${age}`
});
console.log(ages6)

// Lecture: Arrow function 2

// ES5
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    var self = this;
    document.querySelector('.green').addEventListener('click', function () {
      var str = `This is box number ${self.position} and it is ${self.color}`;
      alert(str);
    })
  }
  
}

box5.clickMe();


// ES6
const box6 = {
  color: 'green',
  position: 1,
  clickMe: () => {
    document.querySelector('.green').addEventListener('click',() => {
      var str = `TThis is box number ${this.position} and it is ${this.color}`;
      alert(str);
    })
  }
  
}

box6.clickMe();


function Person(name) {
  this.name = name;

}

// ES5
Person.prototype.myFriend5 = function (friends) {
  var arr = friends.map(function(el) {
    return this.name + ' is friend with ' + el;
  }.bind(this));
  console.log(arr);
}

var friends = ['Dong', 'Nam', 'Duy', 'Phuong'];
new Person('Hiep').myFriend5(friends);

//ES6

Person.prototype.myFriend6 = function (friends) {
  var arr = friends.map(el => `${this.name} + ' is friend with ' + ${el}`
  );
  console.log(arr);
}

new Person('Mike').myFriend6(friends);


//Lecture: Destrucuring

//ES5
var john = ['John', 26];
// var name = john[0];
// var age = john[1];


//ES6
const [name, age] = ['Hiep', 27];;
console.log(name);
console.log(age)


const obj = {
  firstName: 'Hiep',
  lastName: 'Nguyen'
}

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const { firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

function calcAgeRetiment(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetiment(1990);
console.log(age2);
console.log(retirement);


//Lecture: Array



const boxer = document.querySelectorAll('.box');

//Es5

var boxerArr5 = Array.prototype.slice.call(boxer);
boxerArr5.forEach(function(current){
  current.style.backgroundColor = 'yellow';
});

//ES6
const boxerArr6 =  Array.from(boxer);
boxerArr6.forEach(current => current.style.backgroundColor= 'green');


// for (var i = 0; i < boxer.length; i++) {
//   if (boxerArr5[i].className === 'box blue') {
//     continue;

//   }
//   boxerArr5[i].textContent = 'I changed to blue';
// }

for(const cur of boxerArr6) {
  if(cur.className === 'box blue') {
    continue;
  }
  cur.textContent = 'I  Changed to blue!';
}

//Es5

var ages = [33,45,22,43,83,23];

var full = ages.map(function(cur){
  return cur >=40;
});

console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


//ES6

console.log(ages.findIndex(cur => cur >= 40));
console.log(ages.find(cur => cur >= 40));


function addFourAges(a,b,c,d) {
  return a+b+c+d;
}

sum1 = addFourAges(43,23,53,54);
console.log(sum1);


//ES5
var ages = [10,43,23,53,54,33];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6

const sum3 = addFourAges(...ages);
console.log(sum3)


const familySmith = ['John', 'Jean', 'Mark'];
const familyMiler = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familyMiler, 'Lily',...familySmith];

console.log(bigFamily);

const h = document.querySelector('h1');
const boxers = document.querySelectorAll('.box');
const all = [h,...boxers];
console.log(all);

Array.from(all).forEach(cur => cur.style.color = 'purple');


//Lecture Rest parameter


//Es5
function isFullAge5() {
  // console.log(arguments);
  var argsArr = Array.prototype.slice.call(arguments);

  argsArr.forEach(function(cur){
    console.log((2016 - cur) >= 18);
  })
}

// isFullAge5(1990,1883,1999);


//es6
function isFullAge6(...years) {
  years.forEach(cur => console.log( (2016 - cur) >= 18));
}

// isFullAge6(18,1990,1883,1999);


function isFullAge6(limit,...years) {
  years.forEach(cur => console.log( (2018 - cur) >= limit));
}

isFullAge6(18,1990,1883,1999);


// Lecture Default parameters

//ES5

// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
//   lastName === undefined ? lastName = 'Smith' : lastName = lastName;
//   nationality === undefined ? nationality = 'american' : nationality = nationality;

//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.yearOfBirth = yearOfBirth;
//   this.nationality = nationality;
// }

// var john = new SmithPerson('John', 1944);
// var emily = new SmithPerson('Emily', 1988, 'Kate', 'korea');
//Es6

function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'usa') {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var Kate = new SmithPerson('John', 1944);
var Dave = new SmithPerson('Emily', 1988, 'Kate', 'korea');

const question = new Map();
question.set('question', 'What is the official name of the lastest major Javascript version?');
question.set(1,'ES5')
question.set(2,'ES6')
question.set(3,'ES2015')
question.set(4,'ES7')
question.set('correct',3)
question.set(true,'Correct answer :D');
question.set(false,'Wrong, please try again!');

console.log(question.get('question'));
console.log(question.size);

// if(question.has(4)) {
//   console.log('Anwser 4 is here');
// }

// question.forEach((value, key) => console.log(`This is ${key} and it's set to ${value}`));

for (let [key, value] of question.entries()) {
  if (typeof(key) === 'number') {
    console.log(`Anwser ${key}: ${value}`)
  }
}

// const ans = parseInt(prompt('Write the correct answer'));
// console.log(question.get(ans === question.get('correct')));


//Lecture Classes

//ES5
var Person5 = function (name, yearOfBirth, job) { 
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;

}

Person5.prototype.calcAge = function () {
  var age = new Date().getFullYear - this.yearOfBirth;
  console.log(age);
}

var john5 = new Person5('John',1990, 'dev');

// john5.calcAge();


//Es6

// class Person6 {
//   constructor (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   }
//   calcAge() {
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
//   }
//   static greeting() {
//     console.log('Hey there!')
//   }
// }


// const john6 = new Person6('John',1990, 'design')
// Person6.greeting();


var Person5 = function (name, yearOfBirth, job) { 
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;

}

Person5.prototype.calcAge = function () {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
}

// var john5 = new Person5('John',1990, 'dev');

var Athlete5 = function (name, yearOfBirth, job, olympicGame, medals) {
  Person5.call(this, name, yearOfBirth, job);
  this.olympicGame = olympicGame;
  this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function () {
  this.medals++;
  console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990,'dev', 4, 10);

johnAthlete5.calcAge();
johnAthlete5.wonMedal();


//ES6

class Person6 {
  constructor (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }
  calcAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }
}

class Athlete6 extends Person6 {
  constructor(name, yearOfBirth, job, olympicGame, medals) {
    super(name, yearOfBirth, job);
    this.olympicGame = olympicGame;
    this.medals = medals;
  }
  wonMedal() {
    this.medals++;
    console.log(this.medals);
  }
}

const johnAthlete6 = new Athlete6('John', 1992,'dev', 4, 8);
johnAthlete6.wonMedal();
johnAthlete6.calcAge();