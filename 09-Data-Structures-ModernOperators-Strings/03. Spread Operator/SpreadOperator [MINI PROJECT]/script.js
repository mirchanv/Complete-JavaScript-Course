"use strict";

const messageConfirm = document.getElementById("message-confirm");
const submit = document.getElementById("submit");
const modalContainer = document.querySelector(".modal-container");
const closeModal = document.querySelector(".close-modal");

let selectedAddOns = [];

submit.addEventListener("click", function () {
  const checkboxes = document.querySelectorAll("input[type=checkbox]:checked");

  if (checkboxes.length < 3 || checkboxes.length > 3) {
    modalContainer.classList.add("show-modal");
    messageConfirm.textContent = `⚠️ Oops! You must select exactly 3 addons.`;
  } else {
    for (let i = 0; i < checkboxes.length; i++) {
      selectedAddOns.push(checkboxes[i].value);
    }
    makeSandwich(...selectedAddOns); // using spread operator
  }
  selectedAddOns = [];
});

const makeSandwich = function (addon1, addon2, addon3) {
  modalContainer.classList.add("show-modal");
  messageConfirm.textContent = `Hello there, we are preparing your club sandwich 🥪
with: ${addon1}, ${addon2} and ${addon3}`;
};

closeModal.addEventListener("click", function () {
  modalContainer.classList.remove("show-modal");
});
