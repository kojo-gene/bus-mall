'use strict';

Product.allProducts = []; //all products generated function

var totalCounter = 0; //count number of total clicks (25)

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
  Product.allProducts.push(this); //pushed back up into Product.allProducts
}

//need product maker
function createNewProducts() {
  for (var i = 0; i < newProducts.length; i++) {
    new Product(newProducts[i][0], newProducts[i][1]);
  }
}

createNewProducts();

// function render() {
//   for (var i = 0; i < Product.allProducts.length; i++) {
//     // picOne = allProducts[i];
//     // picTwo = allProducts[i];
//     // picThree = allProducts[i];
//   }
// }
for (var i = 0; i < Product.allProducts.length; i++) {
  console.log(Product.allProducts[i]);

  if (this.display == Product.allProducts[i]) {
    this.flag = true;
    this.clicks++;
  }

}

function randomPic() {
  imagePosition = Math.floor(Math.random() * Product.allProducts.length);
  return(Product.allProducts[i]);
};

var picOne = document.getElementById('one-pic');
var picTwo = document.getElementById('two-pic');
var picThree = document.getElementById('three-pic');
