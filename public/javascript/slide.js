var appSlide = angular.module('appSlide',[]);

//seta o valor do primeiro slide a aparecer
var indexImage = 0;

//chama função de amosta do slide
window.onload = function (){
    showSlide();
};



setInterval(nextSlides, 4000);
//setTimeout(showSlide,3000);

function showSlide()
{

    var cont;
    var vectorImage = document.getElementsByClassName("slide"); 

    if(indexImage >= vectorImage.length){indexImage=0;}
    if(indexImage < 0){indexImage= vectorImage.length-1;}
    //oculta todos slides
    for (cont = 0; cont < vectorImage.length; cont++) {
        vectorImage[cont].style.display="none"; 
    } 

    vectorImage[indexImage].style.display="block";
}

function nextSlides()
{
    indexImage += 1;
    showSlide();
}

function prevSlides()
{
    indexImage -= 1;
    showSlide();
}


