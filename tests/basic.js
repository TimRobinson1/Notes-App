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
  it("Checks if Flib equals Lalp", function() {
    assert.equal('Flig', 'Lalp');
  });

  it("Checks if Nonsense equals Nonsense", function() {
    assert.equal('Nonsense', 'Nonsense');
  });

  it("Expects Tim to not equal Nigel", function() {
    assert.notEqual('Tim', 'Nigel');
  });
});
