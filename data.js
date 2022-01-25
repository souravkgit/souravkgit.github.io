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
  height = 150;
} 
else if (window.innerWidth >= 500 && window.innerWidth < 1000) {
  height = 80;
} 
else if (window.innerWidth >= 1000) {
  height = 50;
  chek = document.getElementsByClassName('items')
  el = chek[0];
  if (!el.classList.contains('small')){
      el.classList.toggle('small');
  }
  chek = document.getElementsByClassName('options')
  el = chek[0];
  if (!el.classList.contains('small')){
      el.classList.toggle('small');
  }
  chek = document.getElementsByClassName('genrate')
  el = chek[0];
  if (!el.classList.contains('small')){
      el.classList.toggle('small');
  }
  chek = document.getElementsByClassName('slider')
  el = chek[0];
  if (!el.classList.contains('large')){
      el.classList.toggle('large');
  }
  chek = document.getElementsByClassName('count')
  el = chek[0];
  if (!el.classList.contains('small')){
      el.classList.toggle('small');
  }
}

// Giving the typing effect to the text displaying on the screen...
document.querySelector("#desc").setAttribute("style", "height:" + height + "px;");
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
  chek = document.getElementsByClassName('text1')
  el = chek[0];
  if (!el.classList.contains('selected')){
      el.classList.toggle('selected');
      uplet = 1;
  }
  else {
    el.classList.toggle('selected');
    uplet = 0;
  }
}

function lower() {
  chek = document.getElementsByClassName('text3')
  el = chek[0];
  if (!el.classList.contains('selected')){
      el.classList.toggle('selected');
      lowlet = 1;
  }
  else {
    el.classList.toggle('selected');
    lowlet = 0;
  }
}

function nums() {
  chek = document.getElementsByClassName('text2')
  el = chek[0];
  if (!el.classList.contains('selected')){
      el.classList.toggle('selected');
      num = 1;
  }
  else {
    el.classList.toggle('selected');
    num = 0;
  }
}

function special() {
  chek = document.getElementsByClassName('text4')
  el = chek[0];
  if (!el.classList.contains('selected')){
      el.classList.toggle('selected');
      spc = 1;
  }
  else {
    el.classList.toggle('selected');
    spc = 0;
  }
}

// Main code to generate the password and display it on the screen...
function Genrate() {
  amount = document.getElementById("myRange").value;
  if (amount==0){
    return;
  }
  var pass = "";
  var mixed = [];
  if (uplet==0 && lowlet==0 && num==0 && spc==0){
    return;
  }
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


