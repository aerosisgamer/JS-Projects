let prev = document.getElementById("prev-btn");
let next = document.getElementById("next-btn");
let slider = document.querySelectorAll("#slider img");

let nextSlider = 0;

next.addEventListener("click", function(){
    nextSlider = nextSlider +1;
    resetSlider();
    slider[nextSlider].classList.add('show')
});

prev.addEventListener("click", function(){
    nextSlider = nextSlider -1;
    resetSlider();
    slider[nextSlider].classList.add('show')
});

function resetSlider(){
    slider.forEach(element => {
        element.classList.remove('show');
        element.classList.add('hide');
    });
    // console.log(nextSlider == slider.length,slider.length,nextSlider);
    if(nextSlider == slider.length){
        nextSlider =  0;
    }
    if(nextSlider < 0)
    {
        nextSlider = slider.length -1;
    }
    
}