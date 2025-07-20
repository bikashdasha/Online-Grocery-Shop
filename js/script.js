/* to click the search button and the search bar is comming  start*/
let searchForm=document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
/* to click the search button and the search bar is comming  end*/

/* to click the cart button and the cart box is comming  start*/
let shoppingCart=document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
/* to click the cart button and the cart box is comming  end*/

/* to click the login button and the login box is comming  start*/
let loginForm=document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}
/* to click the login button and the login box  is comming  end*/
/* when i decrease the scren size the line is comming in right side when i click the nav item is come start*/
let navbar=document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}
/* when i decrease the scren size the line is comming in right side when i click the nav item is come end*/

window.onscroll = ()=>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

/* swiper slider start*/
    var swiper = new Swiper(".product-slider", {
      loop: true,
      spaceBetween: 20,
      autoplay:{
          delay:5000,
          disableOnInteraction: false,
      },
      centeredSlides:true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1020: {
          slidesPerView: 3,
        },
      },
    });
/* swiper slider end*/
/* review swiper slider start*/
    var swiper = new Swiper(".review-slider", {
      loop: true,
      spaceBetween: 20,
      autoplay:{
          delay:5000,
          disableOnInteraction: false,
      },
      centeredSlides:true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1020: {
          slidesPerView: 3,
        },
      },
    });
/* review swiper slider end*/