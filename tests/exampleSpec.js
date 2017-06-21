describe('Main Describe Header', function() {
  before(function() {
    var cat = 'True cat'
  })

  it('first test header here', function() {
    console.log(cat);
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

    it('detects page content', function() {
      expect('#header').toHaveContent('Tigai');
    });
  });
});

describe('This is a second Describe', function() {
  it('This is a failing nested test', function() {
    expect(1 + 101).toEqual(11);
  });

  it('This is another nested test', function() {
    expect(1 + 10).toEqual(11);
  });

  it('is a failing definition test', function() {
    expect(null).toBeDefined();
  });
});
