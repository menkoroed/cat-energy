var range = document.querySelector('.example__range-table');
var divisor = document.querySelector('.example__divisor');
function moveDivisor() { 
	divisor.style.width = range.value+"%";
}