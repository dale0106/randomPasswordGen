// Get the btn handle
var btn = document.getElementById("myBtn");

// create and event handler on click and run generatePasswords()
btn.addEventListener("click", generatePasswords);


function generatePasswords() {

	var passwordHolder = document.getElementById("displayPassword");
	//Create a for loop that runs 1000 times
	for (var i = 0; i < 10; i++) {

		// create a random number, use toString to change to hex and then use subString to     depricate the decimal  
		var rand = Math.random().toString(36).substring(2);

		// Make a p element where youll append your passwords  
		var p = document.createElement("p");

		p.innerHTML = rand;
		passwordHolder.appendChild(p);
		//passwordHolder.innerHTML = "poop";



	}


}