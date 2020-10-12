var BuyButton = document.querySelector(".button-buy");
var BuyModal = document.querySelector(".buy-modal");
var BuyModalClose = BuyModal.querySelector(".buy-modal-close");


BuyButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    BuyModal.classList.add("buy-modal-show");
  });

  BuyModalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    BuyModal.classList.remove("buy-modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (BuyModal.classList.contains("buy-modal-show")) {
        evt.preventDefault();
        BuyModal.classList.remove("buy-modal-show");
      }
    }
  });