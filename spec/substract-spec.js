describe('Reduces string', function() {
  var a = firstTwenty('Reminder for this weeks team: keep commit to github')
  it('string is 20 chars long', function() {
    assert.equal(a.length, 20)
  });
  it('returns first 20', function() {
    assert.equal(a, 'Reminder for this we')
  })
});
