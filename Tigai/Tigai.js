const assert = new Tests();
function Tests() {
  this.fail = 'Test failed!'
  this.success = 'Test passed!'
  this.message;
  this.color;
  this.testCounter = 0;
  this.error;
}


// These are the tests you can run

Tests.prototype.equal = function(actual, expected) {
  // Checking if the input are arrays
  if (Array.isArray(actual)  && Array.isArray(expected)) {
    var result = this.arraysEqual(actual, expected);
  } else {
    // Input is not an array
  var result = (actual === expected);
  }
  this.error = ' -- Expected "' + actual + '" to equal "' + expected + '".'
  this._processResults(result)
};

Tests.prototype.notEqual = function(actual, expected) {
  var result = (actual !== expected)
  this.error = ' -- Expected "' + actual + '" to not equal "' + expected + '".'
  this._processResults(result)
}

Tests.prototype.arraysEqual = function(arr1, arr2) {
  // This checks if the length and each element of array are identical
  if(arr1.length !== arr2.length) { return false }
  for(var i = arr1.length; i--;) {
    if(arr1[i] !== arr2[i]) { return false }
  }
return true;
}



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
  this.error = '';
}

Tests.prototype._printResult = function() {
  this.testCounter++
  document
  .getElementById("test")
  .innerHTML += "<p class='" + this.status + "'>" + this.testCounter + ". " + this.message + this.error + '</p>';
};
