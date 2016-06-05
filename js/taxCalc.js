// Tax Calculator


//init function
function taxCalc() {
    //Store user answers
    var itemCost = document.getElementById("theCost").value;
    var theState = document.getElementById("stateSelect").value;



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

	if (theState == "Alaska" || "Delaware" || "Montana" || "New Hampshire" || "Oregon"){

		salesTax = 1

	}
	else if (theState == "Arkansas" || "Kansas" || "Washington" ){

		salesTax = .065

	}
	else if (theState == "Florida" || "Idaho" || "Iowa" || "Kentucky" || "Maryland" || "Michigan" || "Pennsylvania" || "Vermont" || "South Carolina" || "West Virginia"){

		salesTax = .06

	}
	else if (theState == "Georgia" || "Hawaii" || "New York" || "Alabama" || "Wyoming"){

		salesTax = .04

	}
	else if (theState == "Indiana" || "Mississippi" || "New Jersey" || "Rhode Island" || "Tennesse" ){

		salesTax = .07

	}
	else if (theState == "Louisiana" || "North Dakota" || "Wisconsin" ){

		salesTax = .05

	}
	else if (theState == "Maine" || "Nebraska" ){

		salesTax = .055

	}
	else if (theState == "Oklahoma" || "South Dakota" ){

		salesTax = .045

	}
	else if (theState == "Illinois" || "Texas" ){

		salesTax = .06250

	}
	else if (theState == "Arizona" ){

		salesTax = .056

	}
	else if (theState == "California" ){

		salesTax = .075

	}
	else if (theState == "Colorado" ){

		salesTax = .029

	}
	else if (theState == "Connecticut" ){

		salesTax = .06350

	}
	else if (theState == "Nevada" ){

		salesTax = .0685

	}
	else if (theState == "Massachusetts" ){

		salesTax = .062

	}
	else if (theState == "Minnesota" ){

		salesTax = .06875

	}
	else if (theState == "Missouri" ){

		salesTax = .04225

	}
	else if (theState == "New Mexico" ){

		salesTax = .05125

	}
	else if (theState == "North Carolina" ){

		salesTax = .04750

	}
	else if (theState == "Ohio" ){

		salesTax = .05750

	}
	else if (theState == "Utah" ){

		salesTax = .047

	}
	else if (theState == "Virginia"){

		salesTax = .043

	}


	//Perform Equation

	taxAmt = itemCost * salesTax;

	subTotal = taxAmt + itemCost;

	alert(subTotal);
}


// //write result in content div
// document.getElementById("demo").innerHTML = taxCalc();


