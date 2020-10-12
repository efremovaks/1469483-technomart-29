var BuyButton = document.querySelector(".button-buy");
var BuyModal = document.querySelector(".buy-modal");


BuyButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    BuyModal.classList.add("buy-modal-show");
  });