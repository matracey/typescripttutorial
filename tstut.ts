var myName: string = "Martin";
var myAge: number = 24;
var canVote: boolean = true;
var anything: any = "dog";
anything = 2;

document.getElementById("tsStuff").innerHTML = "My Name is " + myName;
document.write("myName is a " + typeof (myName) + "<br />");
document.write("canVote is a " + typeof (canVote) + "<br />");
document.write("anything is a " + typeof (anything) + "<br />");

var stringToNumber: number = parseInt("5");
var numberToString: number = 5;

document.write("stringToNumber is a " + typeof (stringToNumber) + "<br />");
document.write("numberToString is a " + typeof (numberToString.toString()) + "<br />");

const PI = 3.14159;