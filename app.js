'use strict';

//**create new products**
var allProducts = []; //all products generated function
var list = [];

var counter = 0; //count number of total clicks for selectionv(25)

var picOne = document.getElementById('onePic');
var picTwo = document.getElementById('twoPic');
var picThree = document.getElementById('threePic');

var newProducts = [['bag', 'assets/bag.jpg'],
  ['banana', 'assets/banana.jpg'],
  ['bathroom', 'assets/bathroom.jpg'],
  ['boots', 'assets/boots.jpg'],
  ['breakfast', 'assets/breakfast.jpg'],
  ['bubblegum', 'assets/bubblegum.jpg'],
  ['chair', 'assets/chair.jpg'],
  ['cthulhu', 'assets/cthulhu.jpg'],
  ['dog-duck', 'assets/dog-duck.jpg'],
  ['dragon', 'assets/dragon.jpg'],
  ['pet-sweep', 'assets/pet-sweep.jpg'],
  ['scissors', 'assets/scissors.jpg'],
  ['shark', 'assets/shark.jpg'],
  ['sweep', 'assets/sweep.png'],
  ['pen', 'assets/pen.jpg'],
  ['tautuan', 'assets/tauntaun.jpg'],
  ['unicorn', 'assets/unicorn.jpg'],
  ['usb', 'assets/usb.gif'],
  ['water-can', 'assets/water-can.jpg'],
  ['wine-glass', 'assets/wine-glass.jpg']];

// if (localStorage.list) {
//   var list = JSON.parse(localStorage.list);
// } else {
//   var list = [];
// }

function Product(name, path) { //object constructor
  this.name = name; //split path down to just name
  this.path = path;
  this.usedPicture = false; //flag to counter if displayed once true
  this.displayed = 0; //number of times pic was shown
  this.clicksTotal = 0; //amount of clicks per image
  allProducts.push(this); //pushed back up into Product.allProducts
}

var path = [];
// --need product maker
function createNewProducts() {
  for (var i = 0; i < newProducts.length; i++) {
    new Product(newProducts[i][0], newProducts[i][1]);
    path.push(newProducts[i][1]);
  };
  console.log('path', path);
}


createNewProducts();
console.log('allProducts', allProducts);

function threeRandomPic() {
  var indexOne = randomPic();
  var indexTwo = randomPic();
  var indexThree = randomPic();

  while (indexOne === indexTwo) {
    indexTwo = randomPic();
  }
  while (indexTwo === indexThree || indexOne === indexThree) {
    indexThree = randomPic();
  }
  picOne.src = path[indexOne];
  picTwo.src = path[indexTwo];
  picThree.src = path[indexThree];

  allProducts[indexOne].displayed++;
  allProducts[indexTwo].displayed++;
  allProducts[indexThree].displayed++;
}

threeRandomPic();

function handleClick(){
  if (counter <= 25){
    threeRandomPic();
    console.log(counter);
    counter++;
  } //if (counter === 25) {
  //   resultButtom.removeAttribute('hidden');
  // }
}

picOne.addEventListener('click', handleClick);
picTwo.addEventListener('click', handleClick);
picThree.addEventListener('click', handleClick);
console.log();

function randomPic() {
  return Math.floor(allProducts.length * Math.random());
  console.log(Math.floor(allProducts.length * Math.random()));
};
randomPic();

var labels = [];
var chartData = [];

for (var i = 0; i < allProducts.length; i++) {
  labels.push(allProducts[i][0]);
}

new Chart(ctx, {
  data: data,
  type: 'polarArea',
  options: {
    responsive: true,
    posiiton: 'right',
    title: {
      display: true,
      text: 'Amount Of Clicks Per Picture'
    },
    animation: {
      animateRotate: false,
      animateScale: true,
    }
  }
});

data = {
  datasets: [{
    data: [10, 20, 30]
  }],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
    'Red',
    'Yellow',
    'Blue',
    'Green',
    'Orange',
    '#f7c331',
    '#006302',
    '#9d9d9d',
    '#68d295',
    '#ffc771',
    '#f0dde0',
    '#690085',
    '#7a6448',
    '#fff47b',
    '#e1caff',
    '#bd3900',
    '#5e576e',
    '#aff65c',
    '#d4ad79',
    '#57ff01'
  ]
};


// function save () {
//   list.push(input.value);
//   localStorage.list = list;
//   console.log('list arr,' list);
//   console.log('localStorage list:', localStorage.list);
// }
//
// function create() {
//   var val = input.value;
//   var item = document.createElement('li');
//   item.appenchild(document.createTextNode(val));
//   tasks.appenchild(item);
//   input.value = '';
// }
//
// function load() {
//   if (localStorage.list) {
//     var item;
//     for (var x = 0; x < list.length; x++) {
//       item = document.createElement('li');
//       item.appenchild(document.createTextNode(list[x]));
//       tasks.appenchild(item);
//     }
//   }
// }
//
// function render() {
//   save();
//   load();
// }
