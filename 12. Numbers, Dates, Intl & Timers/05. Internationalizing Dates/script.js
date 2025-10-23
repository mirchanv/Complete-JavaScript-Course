"use strict";

const now = new Date();
console.log("now:", now);

const labelDateUS = document.querySelector(".date-US");
const labelDateGB = document.querySelector(".date-GB");
const labelDatePT = document.querySelector(".date-PT");
const labelDateIND = document.querySelector(".date-IND");

const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "long",
  year: "numeric",
  weekday: "short",
};

// formatting dates according to locales use the Internationalizion API
labelDateUS.textContent = Intl.DateTimeFormat("en-US", options).format(now);
labelDateGB.textContent = Intl.DateTimeFormat("en-GB", options).format(now);
labelDatePT.textContent = Intl.DateTimeFormat("hi-IN", options).format(now);
labelDateIND.textContent = Intl.DateTimeFormat("pt-PT", options).format(now);

// getting language used in user browser
console.log(navigator.language);
