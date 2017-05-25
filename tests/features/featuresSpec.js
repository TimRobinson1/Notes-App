describe('Fill in form', function() {

  it('adds to note array when button is pressed', function() {
    fillIn('note').with('This is a test note');
    click('create');
    expect(notePad.notes[0]).toEqual('This is a test note');
  });

  it('adds the note to the page', function() {
    expect("notes").toHaveContent('This is a test note');
  });

  it('shortens a note longer than 20 chars', function() {
    fillIn('note').with('This is really quite a long test note');
    click('create');
    expect("notes").toHaveContent('This is really quite');
  });

  it('changes the hashes when clicked', function() {
    click('entry1');
    expect(window.location.hash).toEqual('#1')
    click('entry0');
    expect(window.location.hash).toEqual('#0')
  });
});
