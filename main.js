let burger = document.querySelector(".burger__holder");
let body = document.querySelector("body");
let burgerOverlay = document.querySelector(".burger__overlay");
let container = document.querySelector(".container");
let backToTop = document.querySelector(".back_to_top");

function openBurger() {
	burger.classList.toggle("burger-open");
	body.classList.toggle("open-nav");
	burgerOverlay.classList.toggle("overlay-visible");
}

function closeBurgerClickOverlay() {
	if (burgerOverlay.classList.contains("overlay-visible")) {
		burgerOverlay.classList.remove("overlay-visible");
		burger.classList.remove("burger-open");
		body.classList.remove("open-nav");
	}
}

burgerOverlay.addEventListener("click", closeBurgerClickOverlay);

burger.addEventListener("click", openBurger);

window.addEventListener("resize", setPaddingAndPosition); // Обработчик изменения размера окна
window.addEventListener("load", setPaddingAndPosition); // Обработчик загрузки страницы

function setPaddingAndPosition() {
	let divCallToAction = document.querySelector(".block__call_to_action");

	let containerRect = container.getBoundingClientRect();
	let distanceToLeft = containerRect.left;
	let distanceToRight = window.innerWidth - containerRect.right;

	divCallToAction.style.paddingLeft = distanceToLeft + "px";
	divCallToAction.style.right = distanceToRight + "px";
}

window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
		backToTop.classList.add("active");
	} else {
		backToTop.classList.remove("active");
	}
}

function scrollToTop() {
	let position = document.body.scrollTop || document.documentElement.scrollTop;
	if (position) {
		window.requestAnimationFrame(scrollToTop);
		window.scrollTo(0, position - position / 8);
	}
}

backToTop.addEventListener("click", scrollToTop);
