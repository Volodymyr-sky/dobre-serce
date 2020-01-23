var searchImg = document.querySelector(".header__search");
var header = document.querySelector("header");
var searchBar = document.querySelector(".search-bar");
var searchInput = document.getElementById("search-input");
var closeSearch = document.getElementById("close-search");
var searchPopup = document.getElementById("search-popup");
var closeTypesHelp = document.getElementById("close-types-help");
var typesHelp = document.getElementById("types-help");
var howToHelp = document.getElementById("how-to-help");
var btnHelpNow = document.getElementById("btn-help-now");
var helpNow = document.getElementById("help-now");
var closeHelpNow = document.getElementById("close-help-now");
var tabRight = document.getElementById("tab-right");
var tabLeft = document.getElementById("tab-left");
var companyForm = document.getElementById("company-form-wrapper");

console.log(tabRight);

searchImg.onclick = function () {
	searchBar.style.display = "flex";
}
closeSearch.onclick = function () {
	searchBar.style.display = "none";
	searchPopup.style.display = "none";
}
function addForm() {
	document.getElementById("search-popup").style.display = "flex";
}

function removeForm() {
	if (searchInput.value === "") {
		searchPopup.style.display = "none";
	}
}
closeTypesHelp.onclick = function () {
	typesHelp.style.display = "none";
}
howToHelp.onclick = function () {
	typesHelp.style.display = "flex";
}
btnHelpNow.onclick = function () {
	helpNow.style.display = "flex";
}
closeHelpNow.onclick = function () {
	helpNow.style.display = "none";
}
tabRight.onclick = function () {
	companyForm.style.display = "flex";
	tabRight.classList.add("tab-active");
	tabLeft.classList.remove("tab-active");
}
tabLeft.onclick = function () {
	companyForm.style.display = "none";
	tabLeft.classList.add("tab-active");
	tabRight.classList.remove("tab-active");
}
var arrowMoney = document.getElementById("arrow-money");
var arrowHand = document.getElementById("arrow-hand");
var arrowClothes = document.getElementById("arrow-clothes");
var arrowHeart = document.getElementById("arrow-heart");

var imgHand = document.getElementById("img-hand");
var imgMoney = document.getElementById("img-money");
var imgClothes = document.getElementById("img-clothes");
var imgHeart = document.getElementById("img-heart");

imgHand.onclick = function () {
	arrowHand.style.display = "block";
	arrowMoney.style.display = "none";
	arrowClothes.style.display = "none";
	arrowHeart.style.display = "none";
}
imgMoney.onclick = function () {
	arrowHand.style.display = "none";
	arrowMoney.style.display = "block";
	arrowClothes.style.display = "none";
	arrowHeart.style.display = "none";
}
imgClothes.onclick = function () {
	arrowHand.style.display = "none";
	arrowMoney.style.display = "none";
	arrowClothes.style.display = "block";
	arrowHeart.style.display = "none";
}
imgHeart.onclick = function () {
	arrowHand.style.display = "none";
	arrowMoney.style.display = "none";
	arrowClothes.style.display = "none";
	arrowHeart.style.display = "block";
}