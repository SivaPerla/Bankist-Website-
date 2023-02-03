'use strict'

const body=document.querySelector('body');

const modal=document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.btn--close-modal');
const btnOpen = document.querySelectorAll('.btn--show-modal');

const openmodal= function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closemodal= function(){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');

};


btnOpen.forEach(btn => {
    btn.addEventListener('click',openmodal);
});

btnClose.addEventListener('click',closemodal);
overlay.addEventListener('click',closemodal);


document.addEventListener('keydown',function(e){
 if(e.key==='Escape' && !modal.classList.contains('hidden')) {
    closemodal();
 }
});


const hdr=document.querySelector('.header');

const buts=document.querySelectorAll('.btn');
//console.log(buts);
const greet = function(){
   window.alert("Thanks for openning account in our bank");
}

const message=document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML='We are used the cookies here. Please accept before moving forward to next. <button class="btn btn--close-cookies" > got it! </button>'

hdr.prepend(message);

document.querySelector('.btn--close-cookies').addEventListener('click', function(){
    message.remove();
    window.alert("Thanks For Accepting Cookies ")
});

message.style.backgroundColor="Black";
message.style.width='120%'

const section1=document.querySelector('#section--1')

const btnscrollTo=document.querySelector('.btn--scroll-to');
btnscrollTo.addEventListener('click', function(){
    const coords=section1.getBoundingClientRect();
    //console.log(coords);
    window.scrollTo(
        {
            left : coords.left + window.pageYOffset , 
            top: coords.top + window.pageYOffset,
            behavior : "smooth",
        });
    //scrollTo.scrollIntoView({behavior : 'smooth'})
});


const tabs = document.querySelectorAll('.operations__tab');
const tabcon = document.querySelector('.operations__tab-container');
const tabcontent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');


const Handler = function (e) {
    if (e.target.classList.contains('nav__link')) {
      const link = e.target;
      const siblings = link.closest('.nav').querySelectorAll('.nav__link');
  
  
      siblings.forEach(el => {
        if (el !== link) el.style.opacity = this;
      });
   
    }
  };

nav.addEventListener('mouseover',Handler.bind(0.3));
nav.addEventListener('mouseout',Handler.bind(1));





window.addEventListener('scroll',function(){
    const cords=section1.getBoundingClientRect();
    //console.log(window.top);
    if(window.scrollY > cords.top) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
  });


tabcon.addEventListener('click', function(e){
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabcontent.forEach(c => c.classList.remove('operations__content--active'));

  clicked.classList.add('operations__tab--active')
  
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
  
})

const loadImg = function(entries,observer){
    const [entry] = entries;

    if(! entry.isIntersecting ) return;

    entry.target.src=entry.target.dataset.src;

    entry.target.addEventListener('load', function(){
        entry.target.classList.remove('lazy_load');
    });
  
    observer.unobserve(entry.target);
};

const tarImg=document.querySelectorAll('img[data-src');

const imgObs=new IntersectionObserver(loadImg,{
    root : null,
    threshold : 0,
    rootMargin: '200px',
});

tarImg.forEach(img=>imgObs.observe(img));


const slides = document.querySelectorAll('.slide');
const btnLeft=document.querySelector('.slider__btn--left');
const btnRight=document.querySelector('.slider__btn--right');


let CurSlide=0;
const maxLeng=slides.length;

const GoTo = function(slide){
    slides.forEach((s,i) => s.style.transform = `translateX(${100*(i-slide)}%)`);
}
GoTo(0);

btnRight.addEventListener('click', function(){
  if(CurSlide == maxLeng-1) CurSlide=0;
  else CurSlide++;

  GoTo(CurSlide);
});

btnLeft.addEventListener('click', function(){
    if(CurSlide == 0) CurSlide=maxLeng-1;
    else CurSlide--;

    GoTo(CurSlide);
});


