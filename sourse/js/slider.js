var range = document.querySelector('.example__range');
var divisor = document.querySelector('.example__divisor');

range.addEventListener('input', sliderChange);
function sliderChange() {
	if(this.value == 1){
    divisor.classList.add('example__divisor-js');
  } else{
    divisor.classList.remove('example__divisor-js');
  }
}