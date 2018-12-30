var range = document.querySelector('.example__range');
var first = document.querySelector('.example__item--first');

range.addEventListener('input', sliderChange);
function sliderChange() {
	if(this.value == 1){
    first.classList.add('example__item--js');
  } else{
    first.classList.remove('example__item--js');
  }
}