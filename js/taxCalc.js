
function taxCalc() {

	//init vars
	var itemCost = parseInt(document.getElementById('theCost').value, 10);
	var theState = document.getElementById('stateSelect').value;
	var taxAmt;
	var subTotal;
	var salesTax;


	if (isNaN(itemCost)) 
	{

		alert("Must input numbers");


	}


	if(theState == "--"){
		alert("Select your State");

	}
	else if (theState == "Alaska" || theState == "Delaware" || theState == "Montana" || theState == "New Hampshire" || theState == "Oregon"){

		salesTax = 0;

	}
	else if (theState == "Arkansas" || theState == "Kansas" || theState == "Washington" ){

		salesTax = .065;

	}
	else if (theState == "Florida" || theState == "Idaho" || theState == "Iowa" || theState == "Kentucky" || theState == "Maryland" || theState == "Michigan" || theState == "Pennsylvania" || theState == "Vermont" || theState == "South Carolina" || theState == "West Virginia"){

		salesTax = .06;

	}
	else if (theState == "Georgia" || theState == "Hawaii" || theState == "New York" || theState == "Alabama" || theState ==  "Wyoming"){

		salesTax = .04;

	}
	else if (theState == "Indiana" || theState ==  "Mississippi" || theState ==  "New Jersey" || theState ==  "Rhode Island" || theState ==  "Tennesse" ){

		salesTax = .07;

	}
	else if (theState == "Louisiana" || theState ==  "North Dakota" || theState ==  "Wisconsin" ){

		salesTax = .05;

	}
	else if (theState == "Maine" || theState == "Nebraska" ){

		salesTax = .055;

	}
	else if (theState == "Oklahoma" || theState == "South Dakota" ){

		salesTax = .045;

	}
	else if (theState == "Illinois" || theState == "Texas" ){

		salesTax = .06250;

	}
	else if (theState == "Arizona" ){

		salesTax = .056;

	}
	else if (theState == "California" ){

		salesTax = .075;

	}
	else if (theState == "Colorado" ){

		salesTax = .029;

	}
	else if (theState == "Connecticut" ){

		salesTax = .06350;

	}
	else if (theState == "Nevada" ){

		salesTax = .0685;

	}
	else if (theState == "Massachusetts" ){

		salesTax = .062;

	}
	else if (theState == "Minnesota" ){

		salesTax = .06875;

	}
	else if (theState == "Missouri" ){

		salesTax = .04225;

	}
	else if (theState == "New Meixco" ){

		salesTax = .05125;

	}
	else if (theState == "North Carolina" ){

		salesTax = .04750;

	}
	else if (theState == "Ohio" ){

		salesTax = .05750;

	}
	else if (theState == "Utah" ){

		salesTax = .047;

	}
	else if (theState == "Virginia"){

		salesTax = .043;

	}

	

	taxAmt = itemCost * salesTax;

	subTotal = taxAmt + itemCost;

	var taxPercent = salesTax * 100;


	document.getElementById("totalOutPut").innerHTML = "$" + subTotal.toFixed(2);
		document.getElementById("taxAmtOutPut").innerHTML = "$" + taxAmt.toFixed(2);
	document.getElementById("taxOutPut").innerHTML = taxPercent + "%"; 
}



