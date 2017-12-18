'use strict';

Products.allProducts = [];

function Products (name, path) {
  this.name = name;
  this.path = path;
  Products.allProducts.push(this);
}

new Products('bag', 'assests/bag.jpg');
new Products('banana', 'assests/banana.jpg');
new Products('bathroom', 'assests/bathroom.jpg');
new Products('boots', 'assests/boots.jpg');
new Products('breakfast', 'assests/breakfast.jpg');
new Products('bubblegum', 'assests/bubblegum.jpg');
new Products('chair', 'assests/chair.jpg');
new Products('cthulhu', 'assests/cthulhu.jpg');
new Products('dog-duck', 'assests/dog-duck.jpg');
new Products('dragon', 'assests/dragon.jpg');
new Products('pen', 'assests/pen.jpg');
new Products('pet-sweep', 'assests/pet-sweep.jpg');
new Products('scissors', 'assests/scissors.jpg');
new Products('shark', 'assests/shark.jpg');
new Products('sweep', 'assests/sweep.png');
new Products('tautuan', 'assests/tautuan.jpg');
new Products('unicorn', 'assests/unicorn.jpg');
new Products('usb', 'assests/usb.gif');
new Products('water-can', 'assests/water-can.jpg');
new Products('wine-glass', 'assests/wine-glass.jpg');
console.log(Products.allProducts);
