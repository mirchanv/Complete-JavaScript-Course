/* Write your code below. Good luck! 🙂 */

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${
      john.fullName
    }'s (${john.bmi.toFixed(1)})!`
  );
} else if (john.calcBMI() > mark.calcBMI()) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${
      mark.fullName
    }'s (${mark.bmi.toFixed(1)})!`
  );
}
