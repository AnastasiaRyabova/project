function toggleMenu() {
	const navLinks = document.querySelector('.nav-links');
	const menuToggle = document.querySelector('.menu-toggle');

	navLinks.classList.toggle('active');
	menuToggle.classList.toggle('active');
}
function closeMenu() {
	const navLinks = document.querySelector('.nav-links');
	const menuToggle = document.querySelector('.menu-toggle');

	navLinks.classList.remove('active');
	menuToggle.classList.remove('active');
}
let img_header_copy = document.getElementById("img_header_copy");
let cloud_1 = document.getElementById("cloud_1");
let cloud_2 = document.getElementById("cloud_2");
let cloud_3 = document.getElementById("cloud_3");
let lis_gor = document.getElementById("lis_gor");
let lis_gor_t = document.getElementById("lis_gor_t");
let lis_gor_parallax = document.getElementById("lis_gor_parallax");
let guide_is_text = document.getElementById("guide_is_text");
let man = document.getElementById("man");
let man_woman = document.getElementById("man-woman");
let transport = document.getElementById("transport");
let tourist = document.getElementById("tourist");

window.addEventListener("scroll",()=>{
let value = window.scrollY;

img_header_copy.style.top = 54 + value * -0.04 + "%";
// img_header_copy.style.transition = 0.8 + "s";

cloud_1.style.top = 120 + value * -0.24 + "%";
// cloud_1.style.transition = 0.8 + "s";

cloud_2.style.top = 130 + value * -0.24 + "%";
// cloud_2.style.transition = 0.8 + "s";

cloud_3.style.top = 130 + value * -0.27 + "%";
// cloud_3.style.transition = 0.8 + "s";

lis_gor.style.top = 100 + value * -0.2 + "%";
// lis_gor.style.transition = 0.8 + "s";

lis_gor_parallax.style.top = 180 + value * -0.106 + "%";

guide_is_text.style.left = -85 + value * 0.1 + "%";
man.style.right = -90 + value * 0.1 + "%";
man_woman.style.left = -85 + value * 0.1 + "%";

transport.style.left = -524 + value * 0.1 + "%";
tourist.style.left = -525 + value * 0.1 + "%";

lis_gor_t.style.top = 4600 + value * -0.3 + "px";
})

const card_h3_s = document.querySelectorAll('.card_h3');
const gradient_s = document.querySelectorAll('.gradient');
const card_p_s = document.querySelectorAll('.card_p');

if (card_p_s.length === gradient_s.length) {
	// Перебираем все элементы
	card_p_s.forEach((card_p, index) => {
			const gradient = gradient_s[index];
			const card_h3 = card_h3_s[index];

			card_p.addEventListener('mouseenter', () => {
					card_h3.style.top = 25 + "px";
					gradient.style.background = "linear-gradient(rgba(255, 0, 0, 0.2), rgba(110, 0, 0))";
					card_p.style.color = "#ffffff";
			});

			card_p.addEventListener('mouseleave', () => {
					card_h3.style.top = 320 + "px";
					gradient.style.background = "rgba(0, 0, 0, 0)";
					card_p.style.color = "rgba(0, 0, 0, 0)";
			});
	});
} 
else {
	console.error('Количество не совпадает.');
}