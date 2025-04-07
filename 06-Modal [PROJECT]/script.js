"use strict";

const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal-container");
const closeModal = document.querySelector(".close-modal");
const openModals = document.querySelectorAll(".open-modal");

console.log(modal);
console.log(modalContainer);
console.log(closeModal);
console.log(openModals);

for (let i = 0; i < openModals.length; i++) {
  openModals[i].addEventListener("click", function () {
    console.log(openModals[i].textContent);
    modalContainer.classList.add("show-modal");
  });
}

closeModal.addEventListener("click", function () {
  modalContainer.classList.remove("show-modal");
});

document.addEventListener("keydown", function (event) {
  // console.log(event);
  if (event.key === "Escape") {
    modalContainer.classList.remove("show-modal");
  }
});
