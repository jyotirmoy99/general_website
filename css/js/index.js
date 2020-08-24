var product = document.getElementsByClassName('productcard');
var productp = document.querySelectorAll('.productcard p');
var productimg = document.querySelector('#productright img');

product[0].addEventListener('click', function(){
  productp[0].style.display = 'block';
  productp[1].style.display = 'none';
  productp[2].style.display = 'none';
  productimg.src = '../static/product1.jpg';

});
product[1].addEventListener('click', function(){
  productp[1].style.display = 'block';
  productp[0].style.display = 'none';
  productp[2].style.display = 'none';
  productimg.src = '../static/product2.jpg';
});
product[2].addEventListener('click', function(){
  productp[2].style.display = 'block';
  productp[1].style.display = 'none';
  productp[0].style.display = 'none';
  productimg.src = '../static/product3.jpg';
});

// var joinbtn = document.getElementById('joinbtn');
// var joinushidden = document.getElementById('joinushidden');
// joinbtn.addEventListener('click', function(){
//   joinbtn.style.display = 'none';
//   joinushidden.style.display = 'block';
// });
