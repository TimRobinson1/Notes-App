var status,
    testCounter = 0,
    failCounter = 0;




function describe(title, runSection) {
  document
  .getElementById("test")
  .innerHTML += '<h2 class="describe-title">' + title + '</h2>';
  runSection();
  updateCounter();
}

function it(name, runTest) {
  testCounter++;
  document
  .getElementById("test")
  .innerHTML += '<li class="it-title">' + ' ' + name + '</li>';
  runTest();
  var list = document.getElementById("test").getElementsByTagName('li');
  list[list.length - 1].className += " " + status;
}

function updateCounter() {
  var fails,
      color;
  failCounter === 1 ? fails = 'failure' : fails = 'failures';
  failCounter ? color = 'red' : color = '#00b300';
  document
  .getElementById("test-counter")
  .innerHTML = '<span style="color:' + color + '">' + testCounter + ' tests, ' + failCounter + ' ' + fails + '</span>';
}

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





function expect(testValue) {
  var errorMsg;

  function toEqual(actual) {
    var result = (actual === testValue);
    errorMsg = ' -- Expected "' + testValue + '" to equal "' + actual + '".'
    _processResults(result)
  }

  function toNotEqual(actual) {
    var result = (actual !== testValue);
    errorMsg = ' -- Expected "' + testValue + '" to not equal "' + actual + '".'
    _processResults(result)
  }

  function toInclude(substring) {
    var result = testValue.includes(substring);
    errorMsg = ' -- Expected "' + testValue + '" to include "' + substring + '".'
    _processResults(result)
  }

  function toHaveContent(content) {
    var element = document.getElementById(testValue).innerHTML;
    var result = element.includes(content);
    errorMsg = ' -- Expected "' + element + '" to include "' + content + '".'
    _processResults(result)
  }

  function _processResults(result) {
    if (result) {
      status = 'pass';
      errorMsg = '';
    } else {
      failCounter++;
      status = 'fail';
    }
    _printResult();
  }

  function _printResult() {
    document
    .getElementById("test")
    .innerHTML += "<p class='fail'> " + errorMsg + '</p>';
  }

  return {
    toEqual: toEqual,
    toNotEqual: toNotEqual,
    toInclude: toInclude,
    toHaveContent: toHaveContent
  }
}
