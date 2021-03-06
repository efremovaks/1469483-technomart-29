var BuyButton = document.querySelectorAll(".button-buy");
var BuyModal = document.querySelector(".buy-modal");
var BuyModalClose = BuyModal.querySelector(".buy-modal-close");


for (var index = 0, len = BuyButton.length; index < len; ++index) {
    BuyButton[index].addEventListener("click", function (evt) {
        evt.preventDefault();
        BuyModal.classList.add("buy-modal-show");
    })
};

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