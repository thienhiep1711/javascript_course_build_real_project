//Function contructor

var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'dev'
};

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function() {
  console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';
var john = new Person('Jobh', 1993, 'dev');
var mike = new Person('Mike', 1985, 'design');
var dave = new Person('Dave', 1992, 'teacher');

john.calculateAge();
mike.calculateAge();
dave.calculateAge();

console.log(dave.lastName);
console.log(mike);

//Object.create

var persionProto = {
  calculateAge: function() {
    console.log(2018 - this.yearOfBirth);
  }
};

var mick = Object.create(persionProto);
mick.name = 'Mick';
mick.yearOfBirth = 1993;
mick.job = 'drive';

var jane = Object.create(persionProto, {
  name: {
    value: 'Jane'
  },
  yearOfBirth: {
    value: 1988
  },
  job: {
    value: 'actor'
  }
});

//Primitives vs object
var a = 22;
var b = a;
a = 43;
console.log(a);
console.log(b);

var obj1 = {
  name: 'John',
  age: 24
};

var obj2 = obj1;
obj1.age = 32;
console.log(obj1.age);
console.log(obj2.age);

//Functions

var age = 28;
var obj = {
  name: 'Jonas',
  city: 'Lisbon'
};

function change(a, b) {
  a = 30;
  b.city = 'Wasington';
}

change(age, obj);

console.log(age);
console.log(obj.city);

var years = [1993, 1949, 1965, 2002];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calcAge(el) {
  return 2018 - el;
}


function isFullAge(limit,el) {
  return el >= limit;
}


function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1; 
  }
}


var  ages = arrayCalc(years,  calcAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log("Kaka",ages);
console.log(fullJapan);




var ages = arrayCalc(years, calcAge);
var fullAge = arrayCalc(ages, isFullAge);
var maxRate = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAge);
console.log(maxRate);

// function interviewQuestion(job) {
//   if (job === 'dev') {
//     return function(name) {
//       console.log(
//         name + 'can you please explain what Progaraming language is?'
//       );
//     };
//   } else if (job === 'design') {
//     return function(name) {
//       console.log(name + 'can you please explain what UX is?');
//     };
//   } else {
//     return function(name) {
//       console.log(name + 'can you please explain what do you do?');
//     };
//   }
// }

var devQuestion = interviewQuestion('dev');
var designQuestion = interviewQuestion('design');
var driveQuestion = interviewQuestion('drive');

// devQuestion('John');
interviewQuestion('dev')('Mike');



function retirement(retirementAge) {
  var a = ' years left until retirement';
  return function (yearOfBirth) {
    var age = 2018 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

var retirementUS = retirement(66);
retirementUS(1999);
var retirementEuro = retirement(65);
retirementEuro(1993);

retirement(66)(1990);


function interviewQuestion(job) {
  return function(name) {
    if (job === 'dev') {
      console.log(
        name + 'can you please explain what Progaraming language is?'
      );
    } else if (job === 'design') {
      console.log(name + 'can you please explain what UX is?');
    } else {
      console.log(name + 'can you please explain what do you do?');
    }
  }
}

var nick = {
  name: 'Nick',
  age: 26,
  job: 'dev',
  presentation: function(style, timeOfDay) {
    if (style === 'dev') {
      console.log(`Good ${timeOfDay} Ladies and gentlemen! I'm a ${this.name} and I'm ${this.job} and I'm ${this.age} years old.`)
    } else if (style === 'design') {
      console.log(`Design ${timeOfDay} Ladies and gentlemen! I'm a ${this.name} and I'm ${this.job} and I'm ${this.age} years old.`)
    } else {
      console.log(`Hey what's up? ${timeOfDay} Ladies and gentlemen! I'm a ${this.name} and I'm ${this.job} and I'm ${this.age} years old.`)
    }
  }
}

var emily = {
  name: 'Emily',
  age: 31,
  jpb: 'design'
};

var kaku = {
  name: 'Kaku',
  age: 55,
  job: 'drive'
}


nick.presentation('dev', 'morning');
nick.presentation.call(emily, 'design', 'everning');
nickFriendly =  nick.presentation.bind(nick, 'dev');
nickFriendly('everning');




(function() {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  };
  
  Question.prototype.displayQuestion = 
  function () {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ':' + this.answers[i]);
    }
  };
  
  Question.prototype.checkAnswer =  function (ans, callback) {
    var sc = 0;
    if (ans === this.correct) {
      console.log('Correct answer!');
      sc =  callback(true);
    } else {
      console.log("Wrong answer!")
      sc =  callback(false);
    }
    this.displayScore(sc);
  }

  Question.prototype.displayScore = function (score) {
    console.log("Your current score is:" + score)
    console.log("-------------------------------");
  }
  
  var q1 = new Question("Is Javascript the coolest programing language in the world?", ['Yes', 'No'], 0);
  var q2 = new Question("What is the name of this course teacher?", ['John', 'Michel', 'Fun', 'Rick'], 2);
  var  q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Tediuos'], 2);
  

  
  var questions = [q1, q2, q3];

  function score() {
    var sc = 0;
    return function (correct) {
      if(correct) {
        sc++;
      } return sc;
    }
  }
  var keepScore = score();


  function nextQuestion() {

    var n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();
    var answer = prompt("Please select the correct answer");
    
    if (answer !== 'exit') {
      questions[n].checkAnswer(parseInt(answer), keepScore);
      nextQuestion();
    }
  }
  nextQuestion();
})();