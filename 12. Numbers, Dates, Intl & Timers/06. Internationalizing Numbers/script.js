"use strict";

const balance = 123456.789;

// options obj
const options1 = {
  style: "currency",
  currency: "USD",
  currencyDisplay: "code",
};

// formatting numbers according to locales and currency using the Internationalizion API
const formatUSD1 = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  currencyDisplay: "code",
}).format(balance);

const formatUSD2 = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  currencyDisplay: "symbol",
}).format(balance);

const formatDE = Intl.NumberFormat("de-DE").format(balance);
const formatIND = Intl.NumberFormat("hi-IN", {
  style: "currency",
  currency: "INR",
}).format(balance);

const formatGBP = Intl.NumberFormat("en-GB").format(balance);
const formatJP = Intl.NumberFormat("ja-JP").format(balance);

console.log(formatUSD1);
console.log(formatUSD2);
console.log("DE:", formatDE);
console.log("IND:", formatIND);
console.log("GBP:", formatGBP);
console.log("JP:", formatJP);
