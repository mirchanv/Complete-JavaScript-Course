"use strict";

const worldCup = {
  sport: "football",
  year: 2025,
  matcheSchedule: {
    match1: {
      date: "23-01-25",
      start: 11,
      end: 13,
    },
    match2: {
      date: "24-01-25",
      start: 12,
      end: 14,
    },
    match3: {
      date: "25-01-25",
      start: 9,
      end: 11,
    },
    match4: {
      date: "26-01-25",
      start: 19,
      end: 21,
    },
  },
};

// Object.keys() - returns array of keys
console.log(Object.keys(worldCup.matcheSchedule));

// looping through all keys
for (const match of Object.keys(worldCup.matcheSchedule)) {
  console.log(`Today ${match} will be played!`);
}

// Object.values return array of values
console.log(Object.values(worldCup.matcheSchedule));

// looping through all values
for (const matchTimming of Object.values(worldCup.matcheSchedule)) {
  console.log(matchTimming);
}

// Object.entries() returns an array of both keys and values
console.log(Object.entries(worldCup.matcheSchedule));

// looping through all entries of matcheSchedule obejct and destructuring them
for (const [match, { date, start, end }] of Object.entries(
  worldCup.matcheSchedule
)) {
  const startAmOrPm = start >= 12 ? "pm" : "am";
  const endAmOrPm = end >= 12 ? "pm" : "am";

  console.log(
    `${match} will be played on ${date} from ${start}${startAmOrPm} to ${end}${endAmOrPm}.`
  );
}
