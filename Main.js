//Initialize all global variables that are relevent to the game
var totalLPS = 0;
var points = 0;
var pointstext = document.getElementById("points");
var davidPrice = 10;
var davidTotal = 0;
var davidLPS = 0.1;
var izzyPrice = 100;
var izzyTotal = 0;
var izzyLPS = 1;
var nicolePrice = 1100;
var nicoleTotal = 0;
var nicoleLPS = 8;

function loadSave() { //loads the saved values from local storage
	if(localStorage.linesofcode) { //checks for a local save
		savedPoints = localStorage.linesofcode;
		points = parseInt(savedPoints);
		savedDavids = localStorage.davids;
		davidTotal = parseInt(savedDavids);
		updateDavids();
		savedIzzys = localStorage.izzys;
		izzyTotal = parseInt(savedIzzys);
		updateIzzys();
		savedNicoles = localStorage.nicoles;
		nicoleTotal = parseInt(savedNicoles);
		updateNicoles()
	}
	else {

	}
}

function updateDavids() { //updates the HTML elements related to David affter loading
	davidPrice = Math.ceil(10 * 1.15**davidTotal);
	document.getElementById("david").innerHTML = 'Buy a David for ' + davidPrice + ' Lines of code'
	document.getElementById("davidAmmount").innerHTML = 'you have ' + davidTotal + ' Davids'
	document.getElementById("davidProduce").innerHTML = 'Writing ' + (davidLPS * davidTotal).toFixed(1) + ' lines of code per second'
}

function updateIzzys() { //updates the HTML elements related to izzy affter loading
	izzyPrice = Math.ceil(100 * 1.15**izzyTotal);
	document.getElementById("izzy").innerHTML = 'Buy an izzy for ' + izzyPrice + ' Lines of code'
	document.getElementById("izzyAmmount").innerHTML = 'you have ' + izzyTotal + ' Izzys'
	document.getElementById("izzyProduce").innerHTML = 'Writing ' + (izzyLPS * izzyTotal).toFixed(1) + ' lines of code per second'
}

function updateNicoles() {
	nicolePrice = Math.ceil(1100 * 1.15**nicoleTotal);
	document.getElementById("nicole").innerHTML = 'Buy a Nicole for ' + nicolePrice + ' Lines of code';
	document.getElementById("nicoleAmmount").innerHTML = 'you have ' + nicoleTotal + ' Nicoles';
	document.getElementById("nicoleProduce").innerHTML = 'Writing ' + (nicoleLPS * nicoleTotal).toFixed(1) + ' Lines of code per second';
}

function addPoints() { //function for clicking
	points = points + 1;
	//console.log(getCookie("points"))l;
	document.getElementById("points").innerHTML = points.toFixed(1) + ' Lines of code';
}

function buyDavid() { //function for buying more davids
	if(points >= davidPrice) {
		points = points - davidPrice;
		davidTotal = davidTotal + 1;
		davidPrice = Math.ceil(10 * 1.15**davidTotal);
		document.getElementById("david").innerHTML = 'Buy a David for ' + davidPrice + ' Lines of code';
		document.getElementById("davidAmmount").innerHTML = 'you have ' + davidTotal + ' Davids';
		document.getElementById("davidProduce").innerHTML = 'Writing ' + (davidLPS * davidTotal).toFixed(1) + ' lines of code per second';
	}
}

function buyIzzy() { //Function for buying more izzys
	if(points >= izzyPrice) {
		points = points - izzyPrice;
		izzyTotal = izzyTotal + 1;
		izzyPrice = Math.ceil(100 * 1.15**izzyTotal);
		document.getElementById("izzy").innerHTML = 'Buy an izzy for ' + izzyPrice + ' Lines of code';
		document.getElementById("izzyAmmount").innerHTML = 'you have ' + izzyTotal + ' Izzys';
		document.getElementById("izzyProduce").innerHTML = 'Writing ' + (izzyLPS * izzyTotal).toFixed(1) + ' lines of code per second';
	}
}

function buyNicole() {
	if(points >=nicolePrice) {
		points = points - nicolePrice;
		nicoleTotal = nicoleTotal + 1;
		nicolePrice = Math.ceil(1100 * 1.15**nicoleTotal);
		document.getElementById("nicole").innerHTML = 'Buy a Nicole for ' + nicolePrice + ' Lines of code';
		document.getElementById("nicoleAmmount").innerHTML = 'you have ' + nicoleTotal + ' Nicoles';
		document.getElementById("nicoleProduce").innerHTML = 'Writing ' + (nicoleLPS * nicoleTotal).toFixed(1) + ' Lines of code per second';
	}
}

window.setInterval(function() { //Adds together all the Lines of Code and then updates the elements in the HTML
	  points = (points + (davidTotal * davidLPS) + (izzyTotal * izzyLPS) + (nicoleTotal * nicoleLPS);
		totalLPS = ((davidTotal * davidLPS) + (izzyTotal * izzyLPS) + (nicoleLPS * nicoleTotal));
		document.getElementById("codepersec").innerHTML = totalLPS.toFixed(1) + ' Lines per second'
		document.getElementById("points").innerHTML = points.toFixed(1) + ' Lines of code';
		document.cookie = "points=" + points.toFixed(1);
}, 1000);

window.setInterval(function() { //Saves game data every 15 seconds
	localStorage.setItem("linesofcode", points);
	localStorage.setItem("davids", davidTotal);
	localStorage.setItem("izzys", izzyTotal);
	localStorage.setItem("nicoles", nicoleTotal);
	console.log("Game Saved")
}, 15000);
