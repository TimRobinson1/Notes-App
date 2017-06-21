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
    error = `Error: Expected "${testValue}" to be defined.`
    _processResults(testValue != void 0, error)
  }

  function toEqual(actual) {
    error = `Error: Expected "${testValue}" to equal "${actual}".`
    _processResults(actual === testValue, error)
  }

  function toNotEqual(actual) {
    error = `Error: Expected "${testValue}" to not equal "${actual}".`
    _processResults(actual !== testValue, error)
  }

  function toInclude(substring) {
    error = `Error: Expected "${testValue}" to include "${substring}".`
    _processResults(testValue.includes(substring), error)
  }

  function toHaveContent(content) {
    var element = document.querySelector(testValue).innerHTML;
    error = `Error: Expected "${element}" to include "${content}".`
    _processResults(element.includes(content), error)
  }

  return {
    toEqual: toEqual,
    toNotEqual: toNotEqual,
    toInclude: toInclude,
    toHaveContent: toHaveContent,
    toBeDefined: toBeDefined
  }
}
