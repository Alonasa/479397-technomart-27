if (!document.querySelector(".page-inner")){
  let link = document.querySelector(".button-contacts");
  let popup = document.querySelector(".modal-contact");
  let close = popup.querySelector(".modal-close");
  let userName = popup.querySelector("[name=name]");


  let buttonMap = document.querySelector(".map");
  let mapPopup = document.querySelector(".modal-map");
  let mapClose = mapPopup.querySelector(".modal-close");



  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-contact-show");
    userName.focus();
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-contact-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
    evt.preventDefault();
      if (popup.classList.contains("modal-contact-show")) {
        popup.classList.remove("modal-contact-show");
      }
    }
  });

  buttonMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-map-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-map-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
    evt.preventDefault();
      if (mapPopup.classList.contains("modal-map-show")) {
        mapPopup.classList.remove("modal-map-show");
      }
    }
  });

  let serviceView = document.querySelector(".services-items");
  let serviceButton = serviceView.querySelectorAll(".services-button");
  let serviceList = serviceView.querySelectorAll(".service-offer");
  let buttonDelivery = serviceView.querySelector(".button-delivery");
  let buttonWarrancy = serviceView.querySelector(".button-warrancy");
  let buttonCredit = serviceView.querySelector(".button-credit");

  buttonDelivery.addEventListener("click", function(evt){
    evt.preventDefault();
    for (let i = 0; i < serviceButton.length; i++){
      serviceButton[i].classList.remove("button-choosen");
    }
    for (let i = 0; i < serviceList.length; i++){
      serviceList[i].classList.remove("service-choosen");
    }
    serviceButton[0].classList.add("button-choosen");
    serviceList[0].classList.add("service-choosen");
  });

  buttonWarrancy.addEventListener("click", function(evt){
    evt.preventDefault();
    for (let i = 0; i < serviceButton.length; i++){
      serviceButton[i].classList.remove("button-choosen");
    }
    for (let i = 0; i < serviceList.length; i++){
      serviceList[i].classList.remove("service-choosen");
    }
    serviceButton[1].classList.add("button-choosen");
    serviceList[1].classList.add("service-choosen");
  });

  buttonCredit.addEventListener("click", function(evt){
    evt.preventDefault();
    for (let i = 0; i < serviceButton.length; i++){
      serviceButton[i].classList.remove("button-choosen");
    }
    for (let i = 0; i < serviceList.length; i++){
      serviceList[i].classList.remove("service-choosen");
    }
    serviceButton[2].classList.add("button-choosen");
    serviceList[2].classList.add("service-choosen");
  });


  let sliderList = document.querySelectorAll(".slider-item");
  let sliderN = document.querySelector(".arrow-next");
  let sliderP = document.querySelector(".arrow-previous");
  let count = 0;
  let controller = document.querySelectorAll(".slider-controller");

  sliderP.addEventListener("click", function(evt){
    evt.preventDefault();
    if (count > 0) {
      count = count - 1;
      for (let i = 0; i < sliderList.length; i++){
        sliderList[i].classList.remove("slider-choosen");
      }
      for(let i = 0; i < controller.length; i++){
        controller[i].classList.remove("controller-checked");
      }
      sliderList[count].classList.add("slider-choosen");
      controller[count].classList.add("controller-checked");
    }
  });

  sliderN.addEventListener("click", function(evt){
    evt.preventDefault();

    if (count < sliderList.length-1) {
      count = count + 1;
      for (let i = 0; i < sliderList.length; i++){
        sliderList[i].classList.remove("slider-choosen");
      }
      for(let i = 0; i < controller.length; i++){
        controller[i].classList.remove("controller-checked");
      }
      sliderList[count].classList.add("slider-choosen");
      controller[count].classList.add("controller-checked");
    }
  });

}

let modalAdded = document.querySelector(".modal-added-to-cart")
let buttonBuy = document.querySelectorAll(".button-buy");
let addedClose = modalAdded.querySelector(".modal-close");

for (var i = 0; i < buttonBuy.length; i++){
  buttonBuy[i].addEventListener("click", function(evt){
    evt.preventDefault();
    modalAdded.classList.add("modal-added-show");
  });
};

addedClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalAdded.classList.remove("modal-added-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
  evt.preventDefault();
    if (modalAdded.classList.contains("modal-added-show")) {
      modalAdded.classList.remove("modal-added-show");
    }
  }
});
