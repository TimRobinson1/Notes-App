describe('Note Pad', function() {
  var notePad = new NotePad();

  // before(function() {
  //   Working on it!
  // });

  it('is instantiated with a empty note array', function() {
    expect(notePad.notes.length).toEqual(0);
  })

  describe('#shortenString', function() {
    it('shortens a string to its first 20 chars', function() {
      expect(notePad.shortenString('This is a really nice team.')).toEqual('This is a really nic');
    })
  })

  describe('#addNote', function() {
    it('adds a note to the notes array', function() {
      notePad.addNote('Nigels test note');
      expect(notePad.notes[0]).toEqual('Nigels test note');
    })
  })

})
