var abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcUpperArr = abcUpper.split("");
var abcLower = "abcdefghijklmnopqrstuvwxyz";
var abcLowerArr = abcLower.split("");
var num = "0123456789";
var numArr = num.split("");
var sym = "!#$%&()*+,-./:;<=>?@^[\\]^_`{|}~";
var symArr = sym.split("");

window.onload = alert("Welcome! Please click 'Generate password' to start!");

function generatePass() {
  var allChars = [];
  var resultPass = "";

  var Passlength = prompt("How many characters should your password to be?");

  if (Passlength < 8 || Passlength > 128) {
    alert(
      "It is recommended to have a password between 8 and 128 characters long!\nPlease start over."
    );
  } else {
    if (confirm("Should your password have uppercase letters?")) {
      Array.prototype.push.apply(allChars, abcUpperArr);
    }

    if (confirm("Should your password have lowercase letters?")) {
      Array.prototype.push.apply(allChars, abcLowerArr);
    }

    if (confirm("Should your password have numbers?")) {
      Array.prototype.push.apply(allChars, numArr);
    }

    if (confirm("Should your password have symbols?")) {
      Array.prototype.push.apply(allChars, symArr);
    }

    if (allChars.length === 0) {
      alert("Well then what should it have??? please try again!!!");
    } else {
      for (var i = 0; i < Passlength; i++) {
        var random = Math.floor(Math.random() * allChars.length);
        resultPass += allChars[random];
      }
    }
  }

  document.getElementById("password").innerHTML = resultPass;
}
