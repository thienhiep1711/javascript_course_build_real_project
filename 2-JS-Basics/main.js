var now = 2018;
var yearJohn = 1989;
var fullAge = 25;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var avarge = (ageJohn + ageMark) / 2;
console.log(avarge);

var x, y;
x = y = (4 *5) *4 - 6;
console.log(x, y);

x += 4;
console.log(x)


//Coding challenge 1
var massMark = 65;
var hightMark = 1.71;
var massJohn = 71;
var hightJohn = 1.75;

var BMIMark = massMark / (hightMark * hightMark);
var BMIJohn = massJohn / (hightJohn * hightJohn);
console.log(BMIJohn, BMIMark);

var markHigherBMI = BMIMark < BMIJohn;
console.log("is Mark's BMI higher then Jonh's" + markHigherBMI);


var firstName = "John";
var civilStatus = "single";

if (civilStatus === 'single') {
  console.log(firstName  + 'is single');

} else {
  console.log(firstName + 'is merried');
}


// falsy values: undefined, null, 0, '', NaN
// Trutly values: Not falsy values;


function calculateAge(birthYear) {
  return 2019 - birthYear;


}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1992);

console.log(ageJohn, ageMike);

function yearUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  if(retirement > 0) {
    console.log(firstName + ' returies in ' + retirement + ' year.')
  } else {
    console.log(firstName + ' is already retired');
  }
}


yearUntilRetirement(1990, "Hiep");
yearUntilRetirement(1950, "Tuan");


var whatDoYouDo = function(job, name) {
  switch(job) {
    case 'dev':
      return name + ' im developer';
    case 'design':
      return name + ' im design';
    case 'pilot':
      return name + ' im pilot';
    case 'boss':
      return name + ' im boss';
    default:
      return name + 'does something else';
  }
  
}

console.log(whatDoYouDo('dev', 'Hiep Nguyen'))
console.log(whatDoYouDo('pilot', 'Tai Nguyen'))
console.log(whatDoYouDo('boss', 'Van Thanh'))
console.log(whatDoYouDo('design', 'Quoc Tien'))

// Initialize new array
var names = ['Hiep', 'Thanh', 1991, 'Ha', 'Name', 1993, false];
var year = new Array(1990, 1992, 1991, 1995);


console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Huy';
names[names.length] = 'Dong';
console.log(names);

//Diffirent data types
var hiepnguyen = ['Nguyen Thien', 'Hiep', 1993, 'dev', false];

console.log(hiepnguyen);
hiepnguyen.push('blue');
hiepnguyen.unshift('Mr.');
console.log(hiepnguyen);

hiepnguyen.pop();
hiepnguyen.shift();
console.log(hiepnguyen)


console.log(hiepnguyen.indexOf(32));
var isDev = hiepnguyen.indexOf('dev') === -1 ? 'Hiep is NOT developer' : ' Hiep is a developer';

console.log(isDev);

function tipCalculator(bill) {
  var percentage;
  if(bill < 50) {
    percentage = .2;

  } else if (bill >= 50 && bill < 200) {
    percentage = .15;
  } else {
    percentage = .1;
  }
  return percentage * bill;
}

var bills = [142, 543, 43];
var tips = [ tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];

var finalValues = [ bills[0] + tips[0],
                    bills[1] + tips[1],
                    bills[2] + tips[2],];
                    
console.log(tips, finalValues);


var micheal = {
  firstName: 'Micheal',
  lastName: 'Jacson',
  birthYear: 1993,
  mass: 78,
  hight: 1.76,
  family: ['Kent', 'Dave', 'Mick', 'Violet'],
  job: 'dev',
  isMarried: false,
  calcAge: function () {
    this.age =  2019 - this.birthYear;
  },
  calcBMI: function() {
    this.bmi = this.mass / (this.hight * this.hight);
    return this.bmi;
  }
}


var vettel = {
  firstName: 'Vettel',
  lastName: 'Sbatian',
  birthYear: 1992,
  mass: 82,
  height: 1.8,
  family: ['Kent', 'Dave', 'Mick', 'Violet'],
  job: 'dev',
  isMarried: false,
  calcAge: function () {
    this.age =  2019 - this.birthYear;
  },
  calcBMI: function() {
    this.bmi = this.mass / (this.hight * this.hight);
    return this.bmi;
  }
}


micheal.calcBMI();
vettel.calcBMI();
console.log(micheal , vettel);

// //For
// for(var i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// //While
// var i = 0;
// while (i < names.length) {
//   console.log(names[i]);
//   i++
// }

//continuce and break this.state.
for (var i = 0; i < names.length; i++) {
  if(typeof names[i] !== 'string') continue;
  console.log(names[i]);
}

for (var i = 0; i < names.length; i++) {
  if(typeof names[i] !== 'string') break;
  console.log(name[i]);
}


//looping backwards

for (var i = names.length - 1; i >= 0; i--) {
  console.log(names[i]);
}

var mike = {
  fullName: 'Sam Mike',
  bills:[838,233,13,53,63,644],
  calcTips: function () {
    this.tips = [];
    this.finalValues = [];
    console.log(this.bills)
    for (var i = 0; i < this.bills.length; i++) {
      var persentage;
      var bill = this.bills[i];
      if (bill < 50) {
        persentage = .2;
      } else if ( bill  >= 50 && bill < 200) {
        persentage = .15;
      } else {
        persentage = .1;
      }
      this.tips[i] = bill * persentage;
      this.finalValues[i] = bill + bill * persentage;
    }   
  }
}

var jeff = {
  fullName: 'Jeff Saw',
  bills:[77,475,110,45],
  calcTips: function () {
    this.tips = [];
    this.finalValues = [];
    console.log(this.bills)
    for (var i = 0; i < this.bills.length; i++) {
      var persentage;
      var bill = this.bills[i];
      if (bill < 50) {
        persentage = .2;
      } else if ( bill  >= 50 && bill < 200) {
        persentage = .1;
      } else {
        persentage = .25;
      }
      this.tips[i] = bill * persentage;
      this.finalValues[i] = bill + bill * persentage;
    }   
  }
}


function calcAverge(tips) {
  var sum  = 0;
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}

mike.calcTips();
jeff.calcTips();



mike.avarge = calcAverge(mike.tips);
jeff.avarge = calcAverge(jeff.tips);


console.log(mike ,jeff);

if(mike.avarge > jeff.avarge) {
  console.log(mike.fullName + '\'s family pays higher tips with average of $' + mike.avarge);
} else if (mike.avarge < jeff.avarge) {
  console.log(jeff.fullName + '\'s family pays higher tips with average of $' + jeff.avarge);
}