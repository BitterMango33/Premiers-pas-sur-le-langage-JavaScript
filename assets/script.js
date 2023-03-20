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

const carouselArrow = document.querySelectorAll(".carousel__arrow");
const carouselDot = document.querySelectorAll(".dot");
const slidesLength = slides.length - 1;
let i = 0;
carouselDot[0].classList.add("dot_selected");

function arrowClick(direction) {
    if (carouselDot[i].classList.contains("dot_selected")) {
        carouselDot[i].classList.remove("dot_selected");
    }
    if (i == 0 && direction < 0) {
        i = slidesLength;
        } else if (i == slidesLength && direction > 0) {
            i = 0;
        } else {
            i += direction;
        }
    carouselDot[i].classList.add("dot_selected");
}

carouselArrow[0].addEventListener("click", function() {arrowClick(-1)}, false);
carouselArrow[1].addEventListener("click", function() {arrowClick(1)}, false);
