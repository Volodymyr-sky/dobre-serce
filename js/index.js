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
var pathHand = document.getElementById("path-hand");
var pathMoney = document.getElementById("path-money");
var pathClothes = document.getElementsByClassName("path-clothes");
var pathHeart = document.getElementsByClassName("path-heart");
console.log(pathClothes)

imgHand.onclick = function () {
	arrowHand.style.display = "block";
	arrowMoney.style.display = "none";
	arrowClothes.style.display = "none";
	arrowHeart.style.display = "none";

	imgHand.classList.add("icon-bg-active");
	pathHand.classList.add("icon-color");
	imgMoney.classList.remove("icon-bg-active");
	imgClothes.classList.remove("icon-bg-active");
	imgHeart.classList.remove("icon-bg-active");
	pathMoney.classList.remove("icon-color");
	pathClothes[0].classList.remove("icon-color");
	pathClothes[1].classList.remove("icon-color");
	pathHeart[0].classList.remove("icon-color");
	pathHeart[1].classList.remove("icon-color");
}
imgMoney.onclick = function () {
	arrowHand.style.display = "none";
	arrowMoney.style.display = "block";
	arrowClothes.style.display = "none";
	arrowHeart.style.display = "none";

	imgHand.classList.remove("icon-bg-active");
	pathHand.classList.remove("icon-color");
	imgMoney.classList.add("icon-bg-active");
	imgClothes.classList.remove("icon-bg-active");
	imgHeart.classList.remove("icon-bg-active");
	pathMoney.classList.add("icon-color");
	pathClothes[0].classList.remove("icon-color");
	pathClothes[1].classList.remove("icon-color");
	pathHeart[0].classList.remove("icon-color");
	pathHeart[1].classList.remove("icon-color");
}
imgClothes.onclick = function () {
	arrowHand.style.display = "none";
	arrowMoney.style.display = "none";
	arrowClothes.style.display = "block";
	arrowHeart.style.display = "none";

	imgHand.classList.remove("icon-bg-active");
	pathHand.classList.remove("icon-color");
	imgMoney.classList.remove("icon-bg-active");
	imgClothes.classList.add("icon-bg-active");
	imgHeart.classList.remove("icon-bg-active");
	pathMoney.classList.remove("icon-color");
	pathClothes[0].classList.add("icon-color");
	pathClothes[1].classList.add("icon-color");
	pathHeart[0].classList.remove("icon-color");
	pathHeart[1].classList.remove("icon-color");
}
imgHeart.onclick = function () {
	arrowHand.style.display = "none";
	arrowMoney.style.display = "none";
	arrowClothes.style.display = "none";
	arrowHeart.style.display = "block";

	imgHand.classList.remove("icon-bg-active");
	pathHand.classList.remove("icon-color");
	imgMoney.classList.remove("icon-bg-active");
	imgClothes.classList.remove("icon-bg-active");
	imgHeart.classList.add("icon-bg-active");
	pathMoney.classList.remove("icon-color");
	pathClothes[0].classList.remove("icon-color");
	pathClothes[1].classList.remove("icon-color");
	pathHeart[0].classList.add("icon-color");
	pathHeart[1].classList.add("icon-color");
}

// open autorize
function openAutorize() {
	document.getElementsByClassName("autorize-popup-wrapper")[0].style.display = "flex";
	document.getElementsByClassName("create-acc-popup-wrapper")[0].style.display = "none"
}
// close autorize
function closeAutorize() {
	document.getElementsByClassName("autorize-popup-wrapper")[0].style.display = "none";
}
// open createAcc
function openCreateAcc() {
	document.getElementsByClassName("autorize-popup-wrapper")[0].style.display = "none";
	document.getElementsByClassName("create-acc-popup-wrapper")[0].style.display = "flex"
}
// close createAcc
function closeCreateAcc() {
	document.getElementsByClassName("create-acc-popup-wrapper")[0].style.display = "none"
}


$(".content__title__text").click(function () {
	$(this).replaceWith("<img src=\"https://media1.giphy.com/media/xUPGcgvoipFxRtpMl2/giphy.gif\" alt=\"heart\">")
});

// тільки цифри для інпутів
$('input[name="number"]').keyup(function () {
	if (/\D/g.test(this.value)) {
		// Filter non-digits from input value.
		this.value = this.value.replace(/\D/g, '');
	}
});
// red border if < 3 digits
$(".max-4").focusout(function () {
	if (this.value.length < 4) {
		$(this).css("border", "2px solid rgba(246, 71, 71, .5)");
	} else {
		$(this).css("border", "none");
	}
});
// autotab
function moveFocus(currentInput, nextInput) {
	let length = currentInput.value.length;
	let maxLength = currentInput.getAttribute("maxlength");
	if (length == maxLength) {
		document.getElementById(nextInput).focus();
	}
}
// card-date mask
$(document).ready(function () {
	$("#date").mask("99 / 99", {
		placeholder: " "
	});
})

$(".to-help").click(function () {
	$(this).replaceWith("<img src=\"https://media.giphy.com/media/1yLCdM5iIJEV7QYsvg/giphy.gif\" alt=\"troll\">")
});

$(".btn-create-acc").click(function () {
	$(".create-acc").replaceWith("<img src=\"https://media.giphy.com/media/1yLCdM5iIJEV7QYsvg/giphy.gif\" alt=\"troll\">")
});

// https://media0.giphy.com/media/f7GUn44TvaIRitrTX0/giphy.gif?cid=790b7611268c0bf0706fc655bb915b06b835e7f49acdca77&rid=giphy.gif




// зміна фону іконок
// var imgHand = document.getElementById("img-hand"),
//     pathHand = document.getElementById("path-hand");

// imgHand.onclick = function () {
//     imgHand.classList.add("hand-bg-active");
//     pathHand.classList.add("hand-color");
// }