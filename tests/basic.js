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

describe('Super Basic', function() {
  it("The string 'cats are evil' include 'cats'", function() {
    assert.include('cats are evil', 'cats');
  });

  it("The string 'cats are evil' include 'dogs'", function() {
    assert.include('cats are evil', 'dogs');
  });
});
