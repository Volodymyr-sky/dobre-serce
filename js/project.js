var searchImg = document.querySelector(".header__search");
var searchBar = document.querySelector(".search-bar");
var searchInput = document.getElementById("search-input");
var closeSearch = document.getElementById("close-search");
var searchPopup = document.getElementById("search-popup");


searchImg.onclick = function () {
	searchBar.style.display = "flex";
};
closeSearch.onclick = function () {
	searchBar.style.display = "none";
	searchPopup.style.display = "none";
};
searchInput.oninput = function () {
	searchPopup.style.display = "flex";
};

var projArticle = document.getElementById("projArticle");
var artNon = document.getElementById("art-non");
console.log(projArticle);

projArticle.onclick = function () {
	projArticle.style.height = "200px";
};

function myFunction() {
	document.getElementById("dropdown").classList.toggle("show");
}

