/**
 * self invoking function to add eventlistener to button click
 */
 (function () {
   document.getElementById("prescreen-button").onclick = function(){
       parseTextArea();
   };
 })();

/**
 * Called when calculate button is clicked.
 * @constructor
 */
function parseTextArea() {
  var userInput = document.querySelector(".prescreen-input").value.toLowerCase();
  userInput = userInput.replace(/ /g, '');
  var lines = userInput.split('\n');
  var obj = {};

  for (var i = 0; i < lines.length; ++i) {
    // split each string on the comma
    var keyValues = lines[i].split(',');
    keyValues = keyValues.toString();
    keyValues = keyValues.split(':');

    // if the current key already exists in the object, add new value to its current value; else, add the new key and its associated value
    if (obj.hasOwnProperty(keyValues[0])) {
      // get current key's value
      var value = obj[keyValues[0]];

      // add new value to existing sum for this key
      value += parseInt(keyValues[1]);

      // set this key's value to the newly calculated sum
      obj[keyValues[0]] = value;
    } else {
      // add the new key and its associated value to the object
      obj[keyValues[0]] = parseInt(keyValues[1]);
    }
  }

  var output = "";

  for (key in obj) {
    if (isPalindrome(key)) {
      output += '<p class="prescreen-palindrome">The total for <span>' + key + '</span> is <span>' + obj[key] + '</span>.</p>';
    } else {
      output += '<p class="prescreen-output">The total for <span>' + key + '</span> is <span>' + obj[key] + '</span>.</p>';
    }
  }
  var textnode = document.createTextNode(output);
  document.querySelector(".output").innerHTML = output;

}

/**
 * Returns whether passed parameter is a palindrome or no.
 * @constructor
 * @param {string} strValue - string value passed for test of palindrome.
 */
function isPalindrome(strValue) {
  var str = strValue.replace(/[^A-Z]+/ig, "");
  var len = Math.floor(str.length / 2);
  for (var i = 0; i < len; i++) {
    if (str[i] !== str[str.length - i - 1])
      return false;
  }
  return true;
}
