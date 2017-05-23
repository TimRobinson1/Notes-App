describe('Basic Tests', function() {
  it("Checks if Tim equals Tim", function() {
    assert.equal('Tim', 'Tim');
  });

  it("Checks if Tim equals Nigel", function() {
    assert.equal('Tim', 'Nigel');
  });

  it("Expects Tim to not equal Nigel", function() {
    assert.notEqual('Tim', 'Nigel');
  });
});

describe('Contains', function() {
  it("The string 'cats are felines' include 'cats'", function() {
    assert.include('cats are evil', 'cats');
  });

  it("The string 'cats are felines' include 'dogs'", function() {
    assert.include('cats are evil', 'dogs');
  });
});

describe('Page Content', function() {
  it("The page has the header 'TESTS'", function() {
    assert.idContains('header', 'TESTS');
  });

  it("The page does not have the header 'BAD TESTS'", function() {
    assert.idContains('header', 'BAD TESTS');
  });
});
