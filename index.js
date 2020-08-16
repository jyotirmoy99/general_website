var product = document.getElementsByClassName('productcard');
var productp = document.querySelectorAll('.productcard p');
var productimg = document.querySelector('#productright img');

product[0].addEventListener('click', function(){
  productp[0].style.display = 'block';
  productp[1].style.display = 'none';
  productp[2].style.display = 'none';
  productimg.src = 'product1.jpg';

});
product[1].addEventListener('click', function(){
  productp[1].style.display = 'block';
  productp[0].style.display = 'none';
  productp[2].style.display = 'none';
  productimg.src = 'product2.jpg';
});
product[2].addEventListener('click', function(){
  productp[2].style.display = 'block';
  productp[1].style.display = 'none';
  productp[0].style.display = 'none';
  productimg.src = 'product3.jpg';
});

// var abus = document.getElementById('abus');
// var team = document.getElementById('team');
// var slider = document.getElementById('slider');
// var sliderteam = document.getElementById('sliderteam');
// var slitem = document.querySelectorAll('.slideritem');
// var slitem1 = document.querySelectorAll('.slideritem1');
// abus.addEventListener('click', function(){
//   slider.style.display = 'block';
//   sliderteam.style.display = 'none';
// });
// team.addEventListener('click', function(){
//   sliderteam.style.display = 'block';
//   slider.style.display = 'none';
// });
