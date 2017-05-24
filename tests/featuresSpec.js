describe('Fill in form', function() {

  it('adds to note array when button is pressed', function() {
    fillIn('note').with('This is a test note');
    click('create');
    expect(notePad.notes[0]).toEqual('This is a test note');
  })
})
