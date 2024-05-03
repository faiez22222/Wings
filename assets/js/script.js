// modal variables
// const modal = document.querySelector("[data-modal]");
// const modalCloseBtn = document.querySelector("[data-modal-close]");
// const modalCloseOverlay = document.querySelector("[data-modal-overlay]");

// modal function
const modalCloseFunc = function () {
	// modal.classList.add("closed");
	console.log("Modal Closed Function called !!!");
};

// modal eventListener
// modalCloseOverlay.addEventListener("click", modalCloseFunc);
// modalCloseBtn.addEventListener("click", modalCloseFunc);

// notification toast variables
const notificationToast = document.querySelector("[data-toast]");
const toastCloseBtn = document.querySelector("[data-toast-close]");

// notification toast eventListener
// toastCloseBtn.addEventListener("click", function () {
// 	notificationToast.classList.add("closed");
// });

// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll(
	"[data-mobile-menu-open-btn]"
);

const mobileMenu = document.querySelectorAll("[data-mobile-menu]");
const mobileMenuCloseBtn = document.querySelectorAll(
	"[data-mobile-menu-close-btn]"
);
const overlay = document.querySelector("[data-overlay]");

// mobile menu function
for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
	// console.log("Button Clicked !!");
	const mobileMenuCloseFunc = function () {
		mobileMenu[i].classList.remove("active");
		overlay.classList.remove("active");
	};

	mobileMenuOpenBtn[i].addEventListener("click", function () {
		mobileMenu[i].classList.add("active");
		overlay.classList.add("active");
	});

	mobileMenuCloseBtn[i].addEventListener("click", mobileMenuCloseFunc);
	overlay.addEventListener("click", mobileMenuCloseFunc);
}

// accordion variables
const accordionBtn = document.querySelectorAll("[data-accordion-btn]");
const accordion = document.querySelectorAll("[data-accordion]");

for (let i = 0; i < accordionBtn.length; i++) {
	accordionBtn[i].addEventListener("click", function () {
		const clickedBtn = this.nextElementSibling.classList.contains("active");

		for (let i = 0; i < accordion.length; i++) {
			if (clickedBtn) break;

			if (accordion[i].classList.contains("active")) {
				accordion[i].classList.remove("active");
				accordionBtn[i].classList.remove("active");
			}
		}

		this.nextElementSibling.classList.toggle("active");
		this.classList.toggle("active");
	});
}

// Search Functionality

const search_var = document.querySelector("[data-search-variable]");
const search_btn = document.querySelector("[data-search-btn]");

search_btn.addEventListener("click", function () {
	// console.log("Search Input By User: ", search_var.value);
	alert("This data searched by user, " + "\n" + "Data: " + search_var.value);
});

// Whatsapp Functionality

const whatsapp_btn = document.querySelector("[data-whatsapp-btn]");
const small_whatsapp_btn = document.querySelector("[data-small-whatsapp-btn]");

whatsapp_btn.addEventListener("click", function () {
	console.log("Whatsapp Button Clicked!!!");
	window.open("https://web.whatsapp.com/", "_blank");
});

small_whatsapp_btn.addEventListener("click", function () {
	console.log("Whatsapp Button Clicked!!!");
	window.open("https://web.whatsapp.com/", "_blank");
});

// Favorite Functionality

const fav_btn = document.querySelector("[data-favorite-btn]");
const small_fav_btn = document.querySelector("[data-small-favorite-btn]");

var fav_selected = false;

fav_btn.addEventListener("click", function () {
	if (!fav_selected) {
		console.log("Added Into Favorite!!!!");
		alert("Added Into Favorite!!!!");
		fav_btn.classList.add("active-heart-icon");
		fav_selected = true;
		// console.log("Fav Added Tag: ", fav_selected);
	} else {
		console.log("Removed From Favorite!!!!");
		alert("Removed From Favorite!!!!");
		fav_btn.classList.remove("active-heart-icon");
		fav_selected = false;
		// console.log("Fav Removed Tag: ", fav_selected);
	}
});

small_fav_btn.addEventListener("click", function () {
	if (!fav_selected) {
		console.log("Added Into Favorite!!!!");
		alert("Added Into Favorite!!!!");
		small_fav_btn.style.color = "red";
		console.log(small_fav_btn);
		fav_selected = true;
		// console.log("Fav Added Tag: ", fav_selected);
	} else {
		console.log("Removed From Favorite!!!!");
		alert("Removed From Favorite!!!!");
		small_fav_btn.style.color = "var(--eerie-black)";
		console.log(small_fav_btn);

		fav_selected = false;
		// console.log("Fav Removed Tag: ", fav_selected);
	}
});

// Infinite Slider For Category

var copy = document.querySelector(".category-infinte-slider").cloneNode(true);
document.querySelector(".category-item-container").appendChild(copy);

// Infinite Slider For Banners

// var copy = document.querySelector(".banner-infinte-slider").cloneNode(true);
// document.querySelector(".slider-container").appendChild(copy);

// Dynamic Modal Properties

const modal = document.querySelector("[data-product-modal]");
const modal_close_btn = document.querySelector(
	"[data-product-modal-close-btn]"
);

function updateModalData(btn) {
	const modal_info_text_1 = document.getElementById("modal-info-text_1");
	const modal_info_text_2 = document.getElementById("modal-info-text_2");
	const modal_title_text = document.getElementById("modal-title-text");
	const modal_price_text = document.getElementById("modal-price-text");
	const modal_price_del_text = document.getElementById("modal-price-del-text");
	const product_img_1 = document.getElementById("modal-product-img-1");
	const product_img_2 = document.getElementById("modal-product-img-2");
	const product_img_11 = document.getElementById("modal-product-img-11");
	const product_img_22 = document.getElementById("modal-product-img-22");

	if (btn.dataset) {
		// console.log("Product Dataset!!");
		modal_title_text.textContent = btn.dataset.productCategory;
		modal_info_text_1.textContent = btn.dataset.productTitle;
		modal_info_text_2.textContent = btn.dataset.productTitle;
		modal_price_text.textContent = btn.dataset.productPrice;
		modal_price_del_text.textContent = btn.dataset.productDelPrice;
		product_img_1.src = btn.dataset.productImages.split(",")[0];
		product_img_2.src = btn.dataset.productImages.split(",")[1];
		product_img_11.src = btn.dataset.productImages.split(",")[0];
		product_img_22.src = btn.dataset.productImages.split(",")[1];
	}
}

// Product Modal Functionality

const eye_btn = document.querySelectorAll("[data-eye-btn]");

eye_btn.forEach(function (btn) {
	btn.addEventListener("click", function () {
		console.log("Modal Open!!");
		// console.log("Button Data: ", btn.dataset);
		modal.style.visibility = "visible";
		updateModalData(btn);
	});
});

modal_close_btn.addEventListener("click", function () {
	console.log("Modal Close!!!");
	modal.style.visibility = "hidden";
});

// eye_btn_1.forEach(function (btn) {
// 	btn.addEventListener("click", function () {
// 		console.log("Modal Open!!");
// 		// console.log("Button Data: ", btn.dataset);
// 		modal.style.visibility = "visible";
// 		updateModalData(btn);
// 	});
// });

// Infinite Slider For Product Modal

// var copy = document.querySelector(".modal-img-slider").cloneNode(true);
// document.querySelector(".modal-img-div").appendChild(copy);
