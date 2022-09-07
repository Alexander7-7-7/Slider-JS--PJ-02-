
    let  Images = [];

function getImages(){
  for(let  i = 1; i <= 3; i++ ){
    Images.push(`./IMG/${i}.png`);
  };
  return Images;
}

getImages();

function initSlider() {
if ( !Images || !Images.length) {return;}
let sliderImages = document.querySelector('.output__images');
let sliderArrows = document.querySelectorAll('.slider__arrows');
let sliderDots = document.querySelector('.dots-wrapper');
let sliderLinks = document.querySelector('.ul1');
let citySlider = document.querySelector('.box-1');
let areaSlider = document.querySelector('.box-2');
let durationSlider = document.querySelector('.box-3');

const cityName = ['Rostov-on-Don <br> LCD admiral', 'Sochi<br>Thieves', 'Rostov-on-Don<BR>Patriotic' ];
const area = ['81 m2', '105 m2', '93 m2' ];
const duration = ['3.5 months', '4 months', '3 months' ];


initImages();
initArrows();
initDots();
initLinks();

function initImages () {

    Images.forEach((value, index) => {
      
      let imageDiv = `<div class="output n${index} ${index === 0 ? "active" : ""}" 
      style="background-image:url(${value});"data-index="${index}"></div>`;

      sliderImages.innerHTML += imageDiv;
       
    });
  }




function initArrows() {
  sliderArrows.forEach(arrow => {
    arrow.addEventListener("click", function() {
      let curNumber = +sliderImages.querySelector(".active").dataset.index;
      console.log(curNumber);
      let nextNumber;
      if (arrow.classList.contains("left")) {
        nextNumber = curNumber === 0? Images.length - 1 : curNumber - 1;
      } else {
        nextNumber = curNumber === Images.length - 1? 0 : curNumber + 1;
      }
      moveSlider(nextNumber);    
    });
  });
  }


  function initDots() {
    Images.forEach((value, index) => {
      let dot = `<div class="dots n${index} ${index === 0? "dots-active" : ""}" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });

    sliderDots.querySelectorAll(".dots").forEach(dot => {
      dot.addEventListener("click", function() {        
        moveSlider(this.dataset.index);
        sliderDots.querySelector('.dots-active').classList.remove('dots-active');
        this.classList.add('dots-active');        
      });
    });
}

function initLinks() {
  sliderLinks.querySelectorAll(".nav-links").forEach(link => {
    link.addEventListener("click", function() {        
      moveSlider(this.dataset.index);
      sliderLinks.querySelector('.link__active').classList.remove('link__active');
      this.classList.add('link__active');      
    });
  });
}

function moveSlider (num){
    sliderImages.querySelector('.active').classList.remove('active');
    sliderImages.querySelector(".n" + num).classList.add('active');
    sliderDots.querySelector('.dots-active').classList.remove('dots-active');
    sliderDots.querySelector(".n" + num).classList.add('dots-active');
    sliderLinks.querySelector('.link__active').classList.remove('link__active');
    sliderLinks.querySelector(".n" + num).classList.add('link__active');
    citySlider.querySelector('.gridtext').innerHTML = `<p class="gridtext">${cityName[num]}</p>`;
    areaSlider.querySelector('.gridtext').innerHTML = `<p class="gridtext">${area[num]}</p>`;
    durationSlider.querySelector('.gridtext').innerHTML = `<p class="gridtext">${duration[num]}</p>`;
  }


}


document.addEventListener("DOMContentLoaded", initSlider);