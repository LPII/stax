// Tax Calculator

//Store user answers
var itemCost = prompt("What is the cost of item?");
var theState = prompt("What state do you live in?");


//Init neccesary variables
var salesTax; 
var taxAmt;
var subTotal;


//Check if number
if (isNaN(itemCost)) 
  {
    alert("Must input numbers");
    itemCost = prompt("What is the cost of item?");

  }


//Check State and adjust tax accordingly
if (theState == "alabama") {

	salesTax = .06
  alert("bama");
}
else{

	salesTax=0
  alert("not bama");
  
}