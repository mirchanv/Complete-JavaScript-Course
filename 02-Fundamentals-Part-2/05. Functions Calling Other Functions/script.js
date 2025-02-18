const order = function (customerName, teaType, withMilk, withSugar) {
  console.log(
    `ORDER STATUS: Thank you, ${customerName}! Your order for ${teaType} has been received.`
  );

  prepareOrder(teaType, withMilk, withSugar); // calling prepareOrder function from order function
};

const prepareOrder = function (teaType, withMilk, withSugar) {
  console.log(`ORDER STATUS: We are currently preparing your ${teaType}`);

  if (withMilk) console.log(`-> Now adding milk to your ${teaType}`);
  if (withSugar) console.log(`-> Now adding sugar to your ${teaType}`);

  orderComplete(teaType); // calling orderComplete function from prepareOrder function
};

const orderComplete = function (teaType) {
  console.log(
    `ORDER STATUS: Your order is now complete! Enjoy your ${teaType}`
  );
};

order("Tiger", "Kadak Chai", true, true);
