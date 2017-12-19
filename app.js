'use strict';

allProduct = [];

function Product(name, path) {
  this.name = name;
  this.path = path;
  this.shown = false;
  this.displayed = 0;
  this.clicks = [];
  allProduct.push(this);
}

for (var i = 0; i < allProducts.length; i++) {
  console.log(allProducts[i]);

  if ()
}

new Product('bag', 'assests/bag.jpg');
new Product('banana', 'assests/banana.jpg');
new Product('bathroom', 'assests/bathroom.jpg');
new Product('boots', 'assests/boots.jpg');
new Product('breakfast', 'assests/breakfast.jpg');
new Product('bubblegum', 'assests/bubblegum.jpg');
new Product('chair', 'assests/chair.jpg');
new Product('cthulhu', 'assests/cthulhu.jpg');
new Product('dog-duck', 'assests/dog-duck.jpg');
new Product('dragon', 'assests/dragon.jpg');
new Product('pen', 'assests/pen.jpg');
new Product('pet-sweep', 'assests/pet-sweep.jpg');
new Product('scissors', 'assests/scissors.jpg');
new Product('shark', 'assests/shark.jpg');
new Product('sweep', 'assests/sweep.png');
new Product('tautuan', 'assests/tautuan.jpg');
new Product('unicorn', 'assests/unicorn.jpg');
new Product('usb', 'assests/usb.gif');
new Product('water-can', 'assests/water-can.jpg');
new Product('wine-glass', 'assests/wine-glass.jpg');
console.log(allProduct);

function randomPic() {
  imagePosition = Math.floor(Math.random() * allProduct.length);
  return(allProduct[i]);
};
