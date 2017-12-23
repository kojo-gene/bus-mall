'use strict';

//**create new products**
var allProducts = []; //all products generated function

var counter = 0; //count number of total clicks for selectionv(25)

var picTwo = document.getElementById('twoPic');
var picThree = document.getElementById('threePic');

var newProducts = [['bag', 'assests/bag.jpg'],
  ['banana', 'assests/banana.jpg'],
  ['bathroom', 'assests/bathroom.jpg'],
  ['boots', 'assests/boots.jpg'],
  ['breakfast', 'assests/breakfast.jpg'],
  ['bubblegum', 'assests/bubblegum.jpg'],
  ['chair', 'assests/chair.jpg'],
  ['cthulhu', 'assests/cthulhu.jpg'],
  ['dog-duck', 'assests/dog-duck.jpg'],
  ['dragon', 'assests/dragon.jpg'],
  ['pet-sweep', 'assests/pet-sweep.jpg'],
  ['scissors', 'assests/scissors.jpg'],
  ['shark', 'assests/shark.jpg'],
  ['sweep', 'assests/sweep.png'],
  ['pen', 'assests/pen.jpg'],
  ['tautuan', 'assests/tautuan.jpg'],
  ['unicorn', 'assests/unicorn.jpg'],
  ['usb', 'assests/usb.gif'],
  ['water-can', 'assests/water-can.jpg'],
  ['wine-glass', 'assests/wine-glass.jpg']];


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
  console.log(path);
}


createNewProducts();
console.log(allProducts);

// // put products on screen in html
// var productOneIndex = 0;
// var productTwoIndex = 0;
// var productThreeIndex = 0;
var index = Math.floor(Math.random() * allProducts.length);

function filepath() {
  for (var i = 0; i < allProducts.length; i++) {
    return allProducts[i][1];
  }
}
function threeRandomPic() {
  while (counter < 1) {
    var picOne = document.getElementById('onePic');
    var newPic = path[index];
    console.log(newPic);
    console.log(index);
    // var newPicArr = [];
    document.getElementById('onePic').innerHTML = newPic;
  };
}

threeRandomPic();
// function renderProducts() {
//
//   productOneIndex = randomPic();
//   picOne.src = Product.allProducts[productOneIndex].filepath;
//   Product.allProducts[productOneIndex].displayed;
// };
// renderProducts();
// console.log(picOne.src);
//
// function render() {
//   picOne = Product.allProducts[1].path;
// }
// render();
//
// for (var i = 0; i < Product.allProducts.length; i++) {
//   console.log(Product.allProducts[i]);
//
//   if (this.display == Product.allProducts[i]) {
//     this.flag = true;
//     this.clicks++;
//   }
//
// }
//
//**randomize pictures
// function randomPic() {
//   return Math.floor(allProducts.length * Math.random());
//   console.log(Math.floor(allProducts.length * Math.random()));
// };
// randomPick();



// //**track amount of times clicked
