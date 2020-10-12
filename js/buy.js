var BuyButton = document.querySelector(".button-buy");
var BuyModal = document.querySelector(".buy-modal");
var BuyModalClose = BuyModal.querySelector(".buy-modal-close");


BuyButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    BuyModal.classList.add("buy-modal-show");
  });

  BuyButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    BuyModal.classList.remove("buy-modal-show");
  });