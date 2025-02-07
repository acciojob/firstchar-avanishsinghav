function firstChar(text) {
  // your code here
	if (!text) {
    return "''";
  }
  return `'${text.trim()[0]}'`;
}

// Do not change the code below
//Uncomment the following line to show e pompt ppup
const text = prompt("Enter text:");
alert(firstChar(text));
