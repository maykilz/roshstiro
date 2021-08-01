let galleryThumbs,galleryTop;



let footerserviceinfo = document.getElementsByClassName('footer__serviceinfo')[0];
let footerservicelist = document.getElementsByClassName('footer__servicelist')[0];   

var elements = document.getElementsByClassName('phoneinput');
for (var i = 0; i < elements.length; i++) {
  new IMask(elements[i], {
    mask: '+{7}(000)000-00-00',
  });
}


$(".catalogarea").ionRangeSlider({
   type: "double",  type: "double",
  grid: true,
  min: 10,
 max: 200,
 from: 20,
 to: 200, 
});

// galleryThumbs = new Swiper('.gallery-thumbs', {
//   spaceBetween: 10,
//   slidesPerView: 4,
//   loop: true,
//   freeMode: true,
//   loopedSlides: 5, //looped slides should be the same
//   watchSlidesVisibility: true,
//   watchSlidesProgress: true,
// });

// galleryTop = new Swiper('.gallery-top', {
//   spaceBetween: 10,
//   loop: true,
//   loopedSlides: 5, //looped slides should be the same
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   thumbs: {
//     swiper: galleryThumbs,
//   },
// });


// var swiper = new Swiper('.swiper-container2', {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });


$(".catalogarea").ionRangeSlider({
  type: "double",
  keyboard: true, 
   
  grid: false,
  min: 10,
  max: 200,
  from: 10,
  step: 5,
  max_postfix: "+", 
  // postfix: " €/ ₽",
});



$(".floorarea").ionRangeSlider({
  type: "double",
  keyboard: true, 
   
  grid: false,
  min: 1,
  max: 31,
  from: 0,
  step: 1,
  max_postfix: "+",  
});

function my_prettify (n) {
 var num = Math.log2(n);
 return n + "  км"  ;
}

$(".maparea").ionRangeSlider({ 
 skin: "big",
 keyboard: true,  
 grid: false, 
 min: 1, 
 max: 100, 
 from: 0,
 step: 1, 
 max_postfix: "+",  
 prettify: my_prettify
});
 

 

footerserviceinfo.addEventListener('click', function() {
  footerservicelist.classList.toggle('hidden'); 
  return false;
})
 

 