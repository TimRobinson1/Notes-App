describe('Basic Tests', function() {
  it("Checks if 'Dog' does not equal 'Cat'", function() {
    expect('dog').toNotEqual('cat');
  });

  it("Checks if 'Dog' equals 'Dog'", function() {
    expect('Dog').toEqual('Dog');
  });

  it("Checks if 'Catastrophe' includes 'Cat'", function() {
    expect('Catastrophe').toInclude('Cat');
  });
});
