$(document).ready(function () {
	window.addEventListener("scroll", function () {
		let header = this.document.querySelector("header");
		let windowPosition = window.scrollY > 58;
		header.classList.toggle("scrolling-active", windowPosition);
	});

	const menuBtn = document.querySelector(".mobile-btn-bar");
	let menuOpen = false;
	menuBtn.addEventListener("click", function () {
		if (!menuOpen) {
			menuBtn.classList.add("open");
			menuOpen = true;
			console.log(menuOpen);
		} else {
			menuBtn.classList.remove("open");
			menuOpen = false;
			console.log(menuOpen);
		}
	});

	$(".mobile-btn-bar").click(function () {
		$(".nav-header ul").toggleClass("show");
	});
});
