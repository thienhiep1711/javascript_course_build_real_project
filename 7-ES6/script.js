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