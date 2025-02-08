let hasDriversLicense = true;
let hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);

hasGoodVision = false;
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);

console.log(!hasDriversLicense);

const isTired = true;

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah should be okay to drive!");
} else {
  console.log("Sarah should not be driving!");
}
