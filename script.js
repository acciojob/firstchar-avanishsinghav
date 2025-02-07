function firstChar(text) {
  // your code here
	if(!text){
		return " ";
	}
	let num = text[0];
	return num;
}

// Do not change the code below
//Uncomment the following line to show e prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
