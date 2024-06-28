function countToTen() {
  let count = 0;
  while (count < 10) {
    count++;
    document.getElementById("theCount").innerHTML += count + "<br>";
  }
}
/*(zeroPad(7, 7);
function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }

  console.log(string);
}
min = Math.min(65, 15);
console.log(min);

isEven(140);
function isEven(number) {
  if (number % 2 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}
countBs("ButtBB");
function countBs(str) {
  let num = 0;
  if (/[B]/.test(str));
  {
    num++;
    console.log(num);
  }
}*/

/*let guessedWord = prompt("What word am I thinking of?");
while (guessedWord != "sandwich");
{
  guessedWord = prompt("That ain't it! Try again!");
}
alert("That's it!!!");*/

/*for (var prop in document) {
  document.write(prop + ":" + document[prop] + "<br>");
}*/

let word = "BooBs";
let number = 0;

for (let letter of word) {
  if (letter === "B") {
    number++;
  }
}
console.log(number);

let age = 19;
if (age < 21) {
  document.write("You're a baby, son! GTFOH!");
} else {
  document.write("LET'S FUCKIN PARTY!!!");
}

let languagePref = "";
switch (languagePref) {
  case "English":
    console.log("I speak English");
    break;
  case "German":
    console.log("I speak German");
    break;
  case "Russian":
    console.log("I speak Russian");
    break;
  case "Dutch":
    console.log("I speak Dutch");
    break;
  default:
    console.log("Default Language");
}

for (let x = 1; x <= 10; x++) {
  console.log(x);
}

let areaCodes = ["770", "404", "343", "999", "271", "555"];
for (x = 0; x < areaCodes.length; x++) {
  document.write("<br>" + "Different Area Code:" + areaCodes[x] + "<br>");
}
/*const pets = ["cat", "dog", "cow"];
for (let pet of pets) {
  console.log(pet);
}

/*function countB(str) {
  while (str < str.length);
}
/*console.log(countBs("Butt"));*/
