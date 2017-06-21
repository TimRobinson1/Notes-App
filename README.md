# Tigai Testing Framework
Tigai was built to unit test javascript code and was integral for gaining a deeper understanding of
how testing frameworks are constructed.  It was created alongside a single-page app that was
built using plain Javascript and Node, without any frameworks such as Express.

### Syntax for basic testing

```
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

  it("The string 'cats are felines' include 'dogs'", function() {
    assert.include('cats are evil', 'dogs');
  });

  it("The page has the header 'TESTS'", function() {
    assert.idContains('header', 'TESTS');
  });

  it("Testing that content updates", function() {
    fillIn('box', 'Dave'); // Fills in input box
    click('testbutton'); // Clicks submit button
    assert.idContains('testheader', 'Dave') // Expects the page to have the new content
  });
});
```
