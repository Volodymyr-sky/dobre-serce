var searchImg = document.querySelector(".header__search");
var header = document.querySelector("header");
var searchBar = document.querySelector(".search-bar");
var searchInput = document.getElementById("search-input");
var closeSearch = document.getElementById("close-search");
var searchPopup = document.getElementById("search-popup");
var closeTypesHelp = document.getElementById("close-types-help");
var typesHelp = document.getElementById("types-help");
var howToHelp = document.getElementById("how-to-help");


searchImg.onclick = function () {
	searchBar.style.display = "flex";
}
closeSearch.onclick = function () {
	searchBar.style.display = "none";
	searchPopup.style.display = "none";
}
searchInput.oninput = function () {
	searchPopup.style.display = "flex";
}
closeTypesHelp.onclick = function () {
	typesHelp.style.display = "none";
}
howToHelp.onclick = function () {
	typesHelp.style.display = "flex";
}
