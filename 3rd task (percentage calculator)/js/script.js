let form_content = document.querySelector("#form_content");
let percent_content = document.querySelector("#percent_content");
let value_content = document.querySelector("#value_content");
let total_content = document.querySelector("#total_content");
let button = document.querySelector("button");

form_content.addEventListener("submit", function(reload){
	reload.preventDefault();
});


function calculate(){
	let percent = Number(percent_content.value);
	let value = Number(value_content.value);
	let total = (percent /100)*value;
	total_content.value = total;
}