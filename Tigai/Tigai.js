const assert = new Tests();
function Tests() {
  this.fail = 'Test failed!'
  this.success = 'Test passed!'
  this.message;
  this.color;
  this.error;
  this.indentation = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
}

var testCounter = 0;


function describe(title, func) {
  document
  .getElementById("test")
  .innerHTML += '<h2 id="describe">' + title + '</h2>';
  func();
}

function it(name, block) {
  testCounter++;
  document
  .getElementById("test")
  .innerHTML += '<h3 id="tests">&nbsp;&nbsp;&nbsp;' + testCounter + '. ' + name + '</h3>';
  block();
}


// These are the tests you can run
Tests.prototype.equal = function(actual, expected) {
    // Input is not an array
  var result = (actual === expected);
  this.error = ' -- Expected "' + actual + '" to equal "' + expected + '".'
  this._processResults(result)
};

Tests.prototype.notEqual = function(actual, expected) {
  var result = (actual !== expected)
  this.error = ' -- Expected "' + actual + '" to not equal "' + expected + '".'
  this._processResults(result)
}

Tests.prototype.include = function(string, substring) {
  var result = string.includes(substring);
  this.error = ' -- Expected "' + string + '" to include "' + substring + '".'
  this._processResults(result)
}

// Tests.prototype.arraysEqual = function(arr1, arr2) {
//   // This checks if the length and each element of array are identical
//   if(arr1.length !== arr2.length) { return false }
//   for(var i = arr1.length; i--;) {
//     if(arr1[i] !== arr2[i]) { return false }
//   }
// return true;
// }



// This is the results logic

Tests.prototype._processResults = function(result) {
  if (result) {
    // This runs if the test passes
    this.message = this.success;
    this.status = 'pass';
    this.error = '';
  } else {
    // This runs if the test fails
    this.message = this.fail;
    this.status = 'fail';
  }
  this._printResult();
}

Tests.prototype._printResult = function() {
  document
  .getElementById("test")
  .innerHTML += "<p class='" + this.status + "'>" + this.indentation + " " + this.message + this.error + '</p>';
};
