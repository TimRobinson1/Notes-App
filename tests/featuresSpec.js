describe('Fill in form', function() {

  it('adds to note array when button is pressed', function() {
    fillIn('note').with('This is a test note');
    click('create');
    expect(notePad.notes[0]).toEqual('This is a test note');
  })

  it('adds the note to the page', function() {
    expect("notes").toHaveContent('This is a test note');
  })

  it('shortens a note longer than 20 chars', function() {
    fillIn('note').with('This is really quite a long test note');
    click('create');
    expect("notes").toHaveContent('This is really quite');
  })
})
