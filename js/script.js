function calcInsurance() {
	var name = document.getElementById('name').value;
	var horsepower = document.getElementById("horsepower").value;
	var age = document.getElementById("age").value;
	var country = document.getElementById("country").value;
	
	console.log(name);
	console.log(horsepower);
	console.log(age);
	console.log(country);

	if (country = "austria") {
		var insurance = Number(horsepower) * 100 / Number(age) + 50;
			console.log(insurance);
		} else if (country = "hungary") {
		var insurance = Number(horsepower) * 120 / Number(age) + 100;
			console.log(insurance);
		} else {
		var insurance = Number(horsepower) * 150 / (Number(age)+3) + 50;
			console.log(insurance);
		}

	document.getElementById("print").innerHTML = name + ", your insurance costs " + insurance.toFixed(1) + " €";
}


function showBox() {
	document.getElementById('print').style.display="block";
  }


document.getElementById("button").addEventListener("click", calcInsurance, false);
document.getElementById("button").addEventListener("click", showBox, false);