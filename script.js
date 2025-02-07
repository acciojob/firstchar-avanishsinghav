function firstChar(text) {
  // your code here
	let temp = text.trim();

  return temp.charAt(0);
}

// Do not change the code belo
//Uncomment the following line to show e pompt ppup
const text = prompt("Enter text:");
alert(firstChar(text));
