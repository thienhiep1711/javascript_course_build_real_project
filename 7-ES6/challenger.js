class Element {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Element {
  constructor(name, buildYear, area, numTress) {
    super(name, buildYear);
    this.area = area;
    this.numTress = numTress;
  }

  treeDensity() {
    const density = this.numTress /  this.area;
    console.log(`${this.name} has a tree density of ${density} tress per square km`);
  }
}

class Street extends Element {
  constructor(name, buildYear, length, size) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  classifyStreet() {
    const classification = new Map();
    classification.set(1, 'tiny');
    classification.set(2, 'small');
    classification.set(3, 'normal');
    classification.set(4, 'big');
    classification.set(5, 'huge');
    console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street`);
  }
}


const allParks = [
  new Park('Green Park', 1987,0.2,215),
  new Park('National Park', 1991,2.9,2415),
  new Park('Oak Park', 1992,1.2,22215),
]


const allStreets = [
  new Street('Ocean Avenue', 1999, 1.1, 3),
  new Street('Evergreen street', 2008, 2.7, 2),
  new Street('4th Street', 2015, 0.8),
  new Street('Sunset Boulevard', 1982, 2.5, 5),
]


function calc(arr) {
  const sum = arr.reduce((prev, cur, index) => prev + cur ,  0);
  return [sum, sum/arr.length];
}

function reportParks(p) {
  console.log('-----------Park report------------')
  //Density
  p.forEach(el => el.treeDensity())
  //Average age
  const ages = p.map(el => new Date().getFullYear() - el.buildYear);
  const [totalAge, avgAge] = calc(ages)
  console.log(`Our ${p.length} parks have an average of ${avgAge} years`);

  //Which park has more than 1000 trees
  const i  = p.map(el => el.numTress).findIndex(el => el >= 1000);
  console.log(`${p[i].name} has more than 1000 trees`);
}

function reportStreets(s) {
  console.log('-----------Street report------------')

  //Total and average lenth of the town's strees
  const [totalLenght, avgLength] = calc(s.map(el => el.length));
  console.log(`Our ${s.length} streets have a total length of ${totalLenght} km, with an average of ${avgLength}`);

  // Classify size
  s.forEach(el => el.classifyStreet())
}

reportParks(allParks);
reportStreets(allStreets);