const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/*
const carousel__arrow = document.querySelectorAll(".carousel__arrow");
let i = 0;

function arrowClick(direction) {
  if (i == 0 && direction < 0) {
    i = slides.length;
  } else if (i == slides.length && direction > 0) {
    i = 0;
  } else {    
    i += direction;
  }
  console.log(slides[i]);
}

carousel__arrow[0].addEventListener("click", function() {arrowClick(-1)}, false);
carousel__arrow[1].addEventListener("click", function() {arrowClick(1)}, false);
*/

const carouselArrow = document.querySelectorAll(".carousel__arrow");

function arrowClick(direction) {
    if (direction) {
        console.log("right");
        return 1;
    } 
    console.log("left");
    return -1;
}

for (let index = 0; index < carouselArrow.length; index++) {
    carouselArrow[index].addEventListener("click", function() {arrowClick(index)}, false);
}
