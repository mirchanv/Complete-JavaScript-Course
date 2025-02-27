// TEST DATA 1
const data1 = [17, 21, 23];

// TEST DATA 2
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "... ";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  return str;
};

console.log(printForecast(data1), "\n");
console.log(printForecast(data2));
