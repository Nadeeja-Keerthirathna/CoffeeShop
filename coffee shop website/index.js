const menuopenbutton =document.querySelector("#menu-open-button");
const menuclosebutton =document.querySelector("#menu-close-button");


menuopenbutton.addEventListener("click", ()=>{
    
    document.body.classList.toggle("show-mobile-menu");
});
menuclosebutton.addEventListener("click",()=>{
    document.body.classList.remove("show-mobile-menu");
})

const swiper = new Swiper('.slider-wrapper', {
  grabCursor:true,
  loop: true,
  spaceBetween:25, 

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
    0:{
        slidesPerView:1
    },
     768:{
        slidesPerView:2
    },
     1024:{
        slidesPerView:3
    }
  }

});