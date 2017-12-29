//Object with state code and tax value pairs
var stateTaxObj = {
    "AL": .04,
    "AK": 0,
    "AZ": .056,
    "AR": .065,
    "CA": .075,
    "CO": .029,
    "CT": .06350,
    "DE": 0,
    "DC": .0575,
    "FL": .06,
    "GA": .04,
    "HI": .04,
    "ID": .06,
    "IL": .06250,
    "IN": .07,
    "IA": .06,
    "KS": .065,
    "KY": .06,
    "LA": .05,
    "ME": .055,
    "MD": .06,
    "MA": .062,
    "MI": .06,
    "MN": .06875,
    "MS": .07,
    "MO": .04225,
    "MT": 0,
    "NE": .055,
    "NV": .0685,
    "NH": 0,
    "NJ": .07,
    "NM": .05125,
    "NY": .04,
    "NC": .04750,
    "ND": .05,
    "OH": .05750,
    "OK": .045,
    "OR": 0,
    "PA": .06,
    "RI": .07,
    "SC": .06,
    "SD": .045,
    "TN": .07,
    "TX": .06250,
    "UT": .047,
    "VT": .06,
    "VA": .043,
    "WA": .065,
    "WV": .06,
    "WI": .05,
    "WY": .04
};

//Method to retrieve text value from select element
function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);

    if (elt.selectedIndex == -1)
        return null;

    return elt.options[elt.selectedIndex].text;
}

//Method that gathers state code from select element, retrieves state tax from stateTaxObj, calculates and displays output
function taxCalc() {

    var itemCost = parseInt(document.getElementById('theCost').value, 10),
        theState = document.getElementById('stateSelect').value, stateTaxValue = stateTaxObj[theState], taxAmt,
        stateText,
        taxPercent, subTotal;

    stateText = getSelectedText("stateSelect");
    taxAmt = itemCost * stateTaxValue;
    subTotal = taxAmt + itemCost;
    taxPercent = stateTaxValue * 100;

    //Display results
    document.getElementById("totalOutPut").innerHTML = "<h1>" + "$" + subTotal.toFixed(2) + "</h1>";
    document.getElementById("mesOutPut").innerHTML = "<p>" + "<span>" + stateText + "</span>" + " has a sales tax of " + "<span>" + taxPercent.toFixed(2) + "</span>" + "%," + " which means you will pay an extra " + "$" + "<span>" + taxAmt.toFixed(2) + "</span>" + "</p>";
}




