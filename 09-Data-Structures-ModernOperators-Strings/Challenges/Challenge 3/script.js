"use strict";

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// 1
let events = [...new Set(gameEvents.values())];
console.log("events:", events);

// 2
gameEvents.delete(64);
console.log("gameEvents", gameEvents);

// 3
const totalEvents = gameEvents.size;
const gameTime = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${gameTime / totalEvents} minutes`
);

// 4
for (const [time, event] of gameEvents.entries()) {
  let eventText = time > 45 ? "[SECOND HALF]" : "[FIRST HALF]";

  eventText += ` ${time}: ${event}`;
  console.log(eventText);
}
