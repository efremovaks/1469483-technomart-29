// writeUs

var writeUs = document.querySelector(".contacts-right__button");
var writeUsPopap = document.querySelector(".modal-write-frame");
var writeUsClose = writeUsPopap.querySelector(".modal-close");
var writeUsForm = writeUsPopap.querySelector(".modal-write-items");
var writeUsName = writeUsPopap.querySelector(".write-name-input");
var writeUsEmail = writeUsPopap.querySelector(".write-mail-input");
var writeUsMessage = writeUsPopap.querySelector(".write-text-input");


writeUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsPopap.classList.add("modal-show");
    writeUsName.focus();
});

writeUsClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsPopap.classList.remove("modal-show")
});

writeUsForm.addEventListener("submit", function (evt) {
    if (!writeUsName.value || !writeUsEmail.value || !writeUsMessage.value) {
        evt.preventDefault();
    }
});


window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (writeUsPopap.classList.contains("modal-show")) {
            evt.preventDefault();
            writeUsPopap.classList.remove("modal-show");
        }
    }
});


//   map

var mapLink = document.querySelector(".contacts-right__map");
var mapPopup = document.querySelector(".map-popup");
var mapClose = mapPopup.querySelector(".map-popup-close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("map-modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("map-modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("map-modal-show")) {
            evt.preventDefault();
            mapPopup.classList.remove("map-modal-show");
        }
    }
});



//   slider

var slides = document.querySelectorAll(".slider-list__item");
var slidesButtonLeft = document.querySelector(".promo-wrapper__slider-button-left");
var slidesButtonRight = document.querySelector(".promo-wrapper__slider-button-right");
var slidesDot = document.querySelectorAll(".slider-choice__item");

slidesButtonLeft.onclick = function() {
    slides[0].classList.toggle("slider__slide-active");
    slides[1].classList.toggle("slider__slide-active");
};

slidesButtonRight.onclick = function() {
    slides[0].classList.toggle("slider__slide-active");
    slides[1].classList.toggle("slider__slide-active");
};