const name = "Vishal Mirchandani";
const birthYear = 1990;
const country = "Denmark";

console.log(
  "Hello my name is" +
    " " +
    name +
    ". " +
    "\nI was born in " +
    birthYear +
    " " +
    "and I live in" +
    " " +
    country +
    "!"
);

// As we can see concatenating mutliple strings to create larger sentences or paragraphs can be quite tidous workj specially when we have to remember the spaces and line breaks. For this reason JavaScript introduces String templates

// Example of String templates
console.log(`Hello my name is ${name}.
I was born in ${birthYear} and I live in ${country}!`);
