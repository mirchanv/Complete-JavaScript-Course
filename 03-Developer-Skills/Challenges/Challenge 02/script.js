const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const getWorkDetails = function (workHours) {
  return {
    totalHoursWorked: calcTotalHoursWorked(workHours),
    daysWorked: getTotalDaysWorked(workHours),
    averageDailyHours:
      calcTotalHoursWorked(workHours) / getTotalDaysWorked(workHours),
    highestHourDay: daysOfWeek[getHighestHourWorkday(workHours)],
    isFullTimeWeek: this.totalHoursWorked >= 35,
  };
};

const calcTotalHoursWorked = function (hoursWorked) {
  let totalHours = 0;
  for (let i = 0; i < hoursWorked.length; i++) {
    totalHours += hoursWorked[i];
  }
  return totalHours;
};

const getTotalDaysWorked = function (daysAtWork) {
  let totalDaysWorked = 0;
  for (let i = 0; i < daysAtWork.length; i++) {
    if (daysAtWork[i] !== 0) totalDaysWorked++;
  }
  return totalDaysWorked;
};

const getHighestHourWorkday = function (hoursWorked) {
  let highestHourDay = hoursWorked[0];
  for (let i = 1; i < hoursWorked.length; i++) {
    if (hoursWorked[i] > highestHourDay) highestHourDay = i;
  }
  return highestHourDay;
};

// TEST
const dailyWorkHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];
console.log("Work Details :", getWorkDetails(dailyWorkHours));
