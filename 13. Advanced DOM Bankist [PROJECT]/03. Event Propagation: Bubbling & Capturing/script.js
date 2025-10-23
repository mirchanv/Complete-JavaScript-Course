"use strict";

document.querySelector("#grandparent").addEventListener("click", (e) => {
  console.log("grandparent clicked");
});

document.querySelector("#parent").addEventListener("click", (e) => {
  console.log("parent clicked");
});

document.querySelector("#child").addEventListener("click", (e) => {
  console.log("child clicked");
  e.stopPropagation();
});

// NOTE:
// Event Propagation determines in which order the events occur

// Capturing phase – the event goes down to the element.
// Target phase – the event reached the target element.
// Bubbling phase – the event bubbles up from the element.

// elem.addEventListener( event, callack,  useCapture)
// If it’s false (default), then the handler is set on the bubbling phase.
// If it’s true, then the handler is set on the capturing phase.

// event.stopPropagation() stops the capturing and bubbling
