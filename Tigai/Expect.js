var status,
    failCounter = 0;

// These are for establishing a test layout & structure.


// This section is for interacting with front-end HTML elements
function click(id) {
  document.getElementById(id).click();
}

function fillIn(id) {
  function enterText(input) {
    document.getElementById(id).value = input;
  }
  return {
    with: enterText
  }
}




// This function returns the expect object, which has the specified functions
// that you can call on it to run the test.
function expect(testValue) {
  var errorMsg;

  function toBeDefined()  {
    error = ` -- Expected "${testValue}" to be defined.`
    _processResults(testValue != void 0, error)
  }

  function toEqual(actual) {
    var result = (actual === testValue);
    error = ` -- Expected "${testValue}" to equal "${actual}".`
    _processResults(result, error)
  }

  function toNotEqual(actual) {
    var result = (actual !== testValue);
    error = ` -- Expected "${testValue}" to not equal "${actual}".`
    _processResults(result, error)
  }

  function toInclude(substring) {
    var result = testValue.includes(substring);
    error = ` -- Expected "${testValue}" to include "${substring}".`
    _processResults(result, error)
  }

  function toHaveContent(content) {
    var element = document.getElementById(testValue).innerHTML;
    var result = element.includes(content);
    error = ` -- Expected "${element}" to include "${content}".`
    _processResults(result, error)
  }

  return {
    toEqual: toEqual,
    toNotEqual: toNotEqual,
    toInclude: toInclude,
    toHaveContent: toHaveContent,
    toBeDefined: toBeDefined
  }
}
