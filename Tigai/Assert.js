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

// These are the tests you can run

// Check that two elements are equal
Tests.prototype.equal = function(actual, expected) {
  // Input is not an array
  var result = (actual === expected);
  this.error = ` -- Expected "${actual}" to equal "${expected}".`
  this._processResults(result)
};


// Check that two elements are not equal
Tests.prototype.notEqual = function(actual, expected) {
  var result = (actual !== expected)
  this.error = ` -- Expected "${actual}" to not equal "${expected}".`
  this._processResults(result)
}


// Use to find a substring in a string.
// 'String' is the item you're searching and 'Substring' is what you're looking for.
Tests.prototype.include = function(string, substring) {
  var result = string.includes(substring);
  this.error = ` -- Expected "${string}" to equal "${substring}".`
  this._processResults(result)
}


// Check that an id (for example a header) contains a string.
// Fill in 'id' with the name of the id you're looking to test and
// 'content' with the string you're searching for.
Tests.prototype.idContains = function(id, content) {
  var element = document.getElementById(id).innerHTML;
  var result = element.includes(content);
  this.error = ` -- Expected the id "${id}" to include "${content}".`
  this._processResults(result)
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
}

Tests.prototype._printResult = function() {
  document
  .getElementById("test")
  .innerHTML += `<p class="${this.status}">${this.indentation} ${this.message}${this.error}</p>`;
};
