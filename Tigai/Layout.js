var testCounter = 0,
    indent = 0,
    errorMsg;

// Testing display structure and layout
function describe(title, runSection) {
  indent += 20;
  document
  .getElementById("test")
  .innerHTML += `<h2 class="describe-title" style="margin-left:${indent}px;">${title}</h2>`;
  runSection();
  updateCounter();
  indent -= 20;
}

function it(name, runTest) {
  testCounter++;
  document
  .getElementById("test")
  .innerHTML += `<li class="it-title">${name}</li>`;
  try {
    runTest();
  }
  catch(error) {
    _processResults(false, error)
  }
  var list = document.getElementById("test").getElementsByTagName('li');
  list[list.length - 1].className += ` ${status}`;
}

function updateCounter() {
  var fails,
      color;
  failCounter === 1 ? fails = 'failure' : fails = 'failures';
  failCounter ? color = 'red' : color = '#00b300';
  document
  .getElementById("test-counter")
  .innerHTML = `<span style="color:${color}">${testCounter} tests, ${failCounter} ${fails}</span>`;
}

// Processing and displaying results
function _processResults(result, error) {
  if (result) {
    status = 'pass';
    errorMsg = '';
  } else {
    failCounter++;
    status = 'fail';
    errorMsg = error
  }
  _printResult();
}

function _printResult() {
  document
  .getElementById("test")
  .innerHTML += `<p class='fail'>${errorMsg}</p>`;
}
