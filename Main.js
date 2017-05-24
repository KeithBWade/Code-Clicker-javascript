var totalLPS = 0
var points = 0
var pointstext = document.getElementById("points");
var davidPrice = 10
var davidTotal = 0
var davidLPS = 0.1
var izzyPrice = 100
var izzyTotal = 0
var izzyLPS = 1

function loadSave() {
	if(localStorage.linesofcode) {
		savedPoints = localStorage.linesofcode;
		//console.log(savedPoints);
		points = parseInt(savedPoints);
		//console.log(points / 1)
	}
	if(localStorage.davids) {
		savedDavids = localStorage.davids;
		//console.log(savedDavids);
		davidTotal = parseInt(savedDavids);
		//console.log(davidTotal /1);
		updateDavids();
	}
	if(localStorage.izzys) {
		savedIzzys = localStorage.izzys;
		console.log(savedIzzys);
		izzyTotal = parseInt(savedIzzys);
		console.log(izzyTotal);
		updateIzzys();
	}
	else {

	}
}

function updateDavids() {
	davidPrice = Math.ceil(10 * 1.15**davidTotal);
	document.getElementById("david").innerHTML = 'Buy a David for ' + davidPrice + ' Lines of code'
	document.getElementById("davidAmmount").innerHTML = 'you have ' + davidTotal + ' Davids'
	document.getElementById("davidProduce").innerHTML = 'Writing ' + (davidLPS * davidTotal).toFixed(1) + ' lines of code per second'
}

function updateIzzys() {
	izzyPrice = Math.ceil(100 * 1.15**izzyTotal);
	document.getElementById("izzy").innerHTML = 'Buy an izzy for ' + izzyPrice + ' Lines of code'
	document.getElementById("izzyAmmount").innerHTML = 'you have ' + izzyTotal + ' Izzys'
	document.getElementById("izzyProduce").innerHTML = 'Writing ' + (izzyLPS * izzyTotal).toFixed(1) + ' lines of code per second'
}

function addPoints() {
	points = points + 1;
	//console.log(getCookie("points"))l;
	document.getElementById("points").innerHTML = points.toFixed(1) + ' Lines of code';
}

function buyDavid() {
	if(points >= davidPrice) {
		points = points - davidPrice;
		davidTotal = davidTotal + 1;
		davidPrice = Math.ceil(10 * 1.15**davidTotal);
		document.getElementById("david").innerHTML = 'Buy a David for ' + davidPrice + ' Lines of code'
		document.getElementById("davidAmmount").innerHTML = 'you have ' + davidTotal + ' Davids'
		document.getElementById("davidProduce").innerHTML = 'Writing ' + (davidLPS * davidTotal).toFixed(1) + ' lines of code per second'
	}
}

function buyIzzy() {
	if(points >= izzyPrice) {
		points = points - izzyPrice;
		izzyTotal = izzyTotal + 1;
		izzyPrice = Math.ceil(100 * 1.15**izzyTotal);
		document.getElementById("izzy").innerHTML = 'Buy an izzy for ' + izzyPrice + ' Lines of code'
		document.getElementById("izzyAmmount").innerHTML = 'you have ' + izzyTotal + ' Izzys'
		document.getElementById("izzyProduce").innerHTML = 'Writing ' + (izzyLPS * izzyTotal).toFixed(1) + ' lines of code per second'
	}
}

window.setInterval(function() {
	  points = (points + (davidTotal * davidLPS) + (izzyTotal * izzyLPS));
		totalLPS = ((davidTotal * davidLPS) + (izzyTotal * izzyLPS));
		document.getElementById("codepersec").innerHTML = totalLPS.toFixed(1) + ' Lines per second'
		document.getElementById("points").innerHTML = points.toFixed(1) + ' Lines of code';
		document.cookie = "points=" + points.toFixed(1);
}, 1000);

window.setInterval(function() {
	localStorage.setItem("linesofcode", points);
	localStorage.setItem("davids", davidTotal);
	localStorage.setItem("izzys", izzyTotal);
	console.log("it works")
}, 15000);
