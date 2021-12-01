// Creating the lists for required password types.
var upperletr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerletr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var speciallet = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "?", "/", "-"];

// Declaring all variables.
var uplet = 0;
var lowlet = 0;
var num = 0;
var spc = 0;
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var amount = 0;

// Setting the slider to display the desired length of password on screen...
output.innerHTML = slider.value;
slider.oninput = function () {
  output.innerHTML = this.value;
};
var height = 30;

// Function for shuffling elements of an array...
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

// Main code starts from here for android users..
if (window.innerWidth < 500) {
  var height = 150;

  // Giving the typing effect to the text displaying on the screen...
  document
    .querySelector("#desc")
    .setAttribute("style", "height:" + height + "px;");
  var str =
    "This is very simple tool to get a very strong as well as very easy password of desired length in just seconds.";
  var empt = "";
  var index = 0;
  setInterval(() => {
    if (index < str.length) {
      empt += str[index];
      document.getElementById("desc").innerHTML = empt;
      index += 1;
    }
  }, 40);

  // Declaring all the functions to select the desired characters , user wants in there password..
  function upper() {
    var classs = document.getElementById("text1").className;
    document.getElementById("text1").classList.toggle("text1-selected");
    if (classs == "text1") uplet = 1;
    else uplet = 0;
  }

  function lower() {
    var classs = document.getElementById("text3").className;
    document.getElementById("text3").classList.toggle("text2-selected");
    if (classs == "text3") lowlet = 1;
    else lowlet = 0;
  }

  function nums() {
    var classs = document.getElementById("text2").className;
    document.getElementById("text2").classList.toggle("text3-selected");
    if (classs == "text2") num = 1;
    else num = 0;
  }

  function special() {
    var classs = document.getElementById("text4").className;
    document.getElementById("text4").classList.toggle("text4-selected");
    if (classs == "text4") spc = 1;
    else spc = 0;
  }

  // Main code to generate the password and display it on the screen...
  function Genrate() {

    amount = document.getElementById("myRange").value;

    var pass = "";
    var mixed = [];

    // Checking the characters user wants and then displaying them accordingly...
    if (uplet == 1) {
      for (let i = 0; i < upperletr.length; i++) {
        const element = upperletr[i];
        mixed.push(element);
      }
    }

    if (lowlet == 1) {
      for (let index = 0; index < lowerletr.length; index++) {
        const element = lowerletr[index];
        mixed.push(element);
      }
    }

    if (num == 1) {
      for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        mixed.push(element);
      }
    }

    if (spc == 1) {
      for (let index = 0; index < speciallet.length; index++) {
        const element = speciallet[index];
        mixed.push(element);
      }
    }

    // Shuffling the created array for better results...
    mixed = shuffle(mixed);
    var mixlen = mixed.length;

    // Creating the password of desired length using that shuffled array...
    for (let index = 0; index < amount; index++) {
      use = Math.floor(Math.random() * mixlen);
      pass += mixed[use];
    }

    // Displaying the password on the screen...
    document.getElementById("myInput").setAttribute("value", pass);
  }

  // Function to let user copy the password in just one click...
  function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
  }
}
