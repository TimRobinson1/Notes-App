describe('Main Describe Header', function() {
  it('first test header here', function() {
    expect(1 + 10).toEqual(11);
  });

  it('this is a failing test', function() {
    expect('dog').toEqual('cat');
  });

  describe('This is a Nested Describe', function() {
    it('This is a test in the nested describe', function() {
      expect(1 + 10).toEqual(11);
    });

    it('This is another nested test', function() {
      expect(1 + 10).toEqual(11);
    });
  });

  describe('This is a second Nested Describe', function() {
    it('This is a failing nested test', function() {
      expect(1 + 101).toEqual(11);
    });

    it('This is another nested test', function() {
      expect(1 + 10).toEqual(11);
    });
  });
});
