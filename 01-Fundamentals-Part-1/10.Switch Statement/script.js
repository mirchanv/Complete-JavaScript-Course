let day = "Friday";

switch (day.toLowerCase()) {
  case "monday": // this means ("monday" === day) strict equality
    console.log(`${day} Schedule : 
      -> Study web-development
      -> Go to coding meetup`);
    break;

  case "tuesday":
    console.log(`${day} Schedule : 
      -> Prepare and upload videos on YouTube`);
    break;

  case "wednesday":
  case "thursday":
    console.log(`Wednesday-Thursday Schedule : 
      -> Write code examples`);
    break;

  case "friday":
    console.log(`${day} Schedule : 
      -> Record videos for web development course
      -> Go out with friends for dinner`);
    break;

  case "saturday":
  case "sunday":
    console.log(`Saturday-Sunday Schedule : 
      -> Enjoy the weekeend`);
    break;

  default:
    console.log("Invalid day!");
}

// above translated into if statement

day = day.toLowerCase();

if (day === "monday") {
  console.log(`${day} Schedule : 
      -> Study web-development
      -> Go to coding meetup`);
} else if (day === "tuesday") {
  console.log(`${day} Schedule : 
      -> Prepare and upload videos on YouTube`);
} else if (day === "wednesaday" || day === "thursday") {
  console.log(`Wednesday-Thursday Schedule : 
      -> Write code examples`);
} else if (day === "friday") {
  console.log(`${day} Schedule : 
      -> Record videos for web development course
      -> Go out with friends for dinner`);
} else if (day === "saturday" || day === "sunday") {
  console.log(`Saturday-Sunday Schedule : 
      -> Enjoy the weekeend`);
} else console.log("Invalid day!");
