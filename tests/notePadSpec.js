describe('Note Pad', function() {
  describe('#shortenString', function() {
    it('shortens a string to its first 20 chars', function() {
      expect(shortenString('Tim is a really nice team mate. But which Tim do I mean?')).toEqual('Tim is a really nice');
    })
  })
})
