var company = document.getElementById('company');
var modes = document.getElementById('modes');
var navhid = document.getElementsByClassName('navhid');
company.addEventListener('mouseover',function(){
  navhid[0].style.display = 'block';
});
company.addEventListener('mouseout',function(){
  navhid[0].style.display = 'none';
});
navhid[0].addEventListener('mouseover',function(){
  navhid[0].style.display = 'block';
});
navhid[0].addEventListener('mouseout',function(){
  navhid[0].style.display = 'none';
});
modes.addEventListener('mouseover',function(){
  navhid[1].style.display = 'block';
});
modes.addEventListener('mouseout',function(){
  navhid[1].style.display = 'none';
});
navhid[1].addEventListener('mouseover',function(){
  navhid[1].style.display = 'block';
});
navhid[1].addEventListener('mouseout',function(){
  navhid[1].style.display = 'none';
});


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


// var dark = document.getElementById('darkmode');
// var navbar = document.getElementById('navbar');
// var navtiles = document.querySelectorAll('#navtiles a');
// var navhid = document.getElementsByClassName('navhid');
// var navhida = document.querySelectorAll('.navhid a');
// var prodsection = document.getElementById('product');
// var blogsection = document.getElementById('blogsection');
// var blogs = document.getElementById('blogs');
// var blogcard = document.getElementsByClassName('blogcard');
// var abcontent = document.getElementById('abcontent');
// var slider = document.getElementById('slider');
// var slideritem = document.querySelectorAll('#slider .slideritem');
// var diamondgrid = document.getElementById('diamond-grid');
// dark.addEventListener('click', function(){
//   navbar.style.backgroundColor = 'black';
//   navbar.style.color = 'white';
//   navtiles[0].style.color = 'white';
//   navtiles[1].style.color = 'white';
//   navhid[0].style.backgroundColor = 'black';
//   navhid[0].style.color = 'white';
//   navhid[1].style.backgroundColor = 'black';
//   navhid[1].style.color = 'white';
//   navhida[0].style.color = 'white';
//   navhida[1].style.color = 'white';
//
//   prodsection.style.backgroundColor = 'black';
//   prodsection.style.color = 'yellow';
//   product[0].style.backgroundColor = 'black';
//   product[1].style.backgroundColor = 'black';
//   product[2].style.backgroundColor = 'black';
//
//   abcontent.style.backgroundColor = 'black';
//   abcontent.style.color = 'white';
//   slider.style.color = 'black';
//   // slideritem[0].style.backgroundColor = 'black';
//   // slideritem[0].style.color = 'black';
//   // slideritem[1].style.backgroundColor = 'black';
//   // slideritem[1].style.color = 'black';
//   // slideritem[2].style.backgroundColor = 'black';
//   // slideritem[2].style.color = 'black';
//   // slideritem[3].style.backgroundColor = 'black';
//   // slideritem[3].style.color = 'black';
//
//   blogsection.style.backgroundColor = 'black';
//   blogsection.style.color = 'white'
//   blogs.style.backgroundColor = 'black';
//   blogcard[0].style.backgroundColor = 'black';
//   blogcard[0].style.border = '2px solid white';
//   blogcard[1].style.backgroundColor = 'black';
//   blogcard[1].style.border = '2px solid white';
//   blogcard[2].style.backgroundColor = 'black';
//   blogcard[2].style.border = '2px solid white';
//   blogcard[3].style.backgroundColor = 'black';
//   blogcard[3].style.border = '2px solid white';
//   blogcard[4].style.backgroundColor = 'black';
//   blogcard[4].style.border = '2px solid white';
//   blogcard[5].style.backgroundColor = 'black';
//   blogcard[5].style.border = '2px solid white';
//
//   diamondgrid.style.backgroundColor = 'black';
//   diamondgrid.style.color = 'white';
// });



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
