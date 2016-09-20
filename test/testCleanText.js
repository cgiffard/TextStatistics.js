var assert = require('assert');
var TextStatistics = require('../index.js');

describe('TextStatistics', function() {
  // this is called when you "make" a TextStatistics
  describe('#cleanText()', function() {
    it('should add a final terminator if it\'s missing', function() {
      var ts = TextStatistics('Hello friend');
      assert.equal(ts.text, 'Hello friend.');
    });

    it('should not add a final terminator if there is a \'.\'', function() {
      var ts = TextStatistics('Hello friend.');
      assert.equal(ts.text, 'Hello friend.');
    });

    context('trailing whitespace', function() {
      it('should strip spaces', function() {
        var ts = TextStatistics('Hello friend.  ');
        assert.equal(ts.text, 'Hello friend.');
      });

      it('should strip newlines', function() {
        var ts = TextStatistics('Hello friend.\n\n');
        assert.equal(ts.text, 'Hello friend.');
      });

      it('should strip \\r\\n thing', function() {
        var ts = TextStatistics('Hello friend.\r\n');
        assert.equal(ts.text, 'Hello friend.');
      });

      it('should strip tabs', function() {
        var ts = TextStatistics('Hello friend.\t');
        assert.equal(ts.text, 'Hello friend.');
      });
    });

    context('leading whitespace', function() {
      it('should strip spaces', function() {
        var ts = TextStatistics('   Hello friend.');
        assert.equal(ts.text, 'Hello friend.');
      });

      it('should strip newlines', function() {
        var ts = TextStatistics('\n\nHello friend.');
        assert.equal(ts.text, 'Hello friend.');
      });

      it('should strip \\r\\n thing', function() {
        var ts = TextStatistics('\r\nHello friend.');
        assert.equal(ts.text, 'Hello friend.');
      });

      it('should strip tabs', function() {
        var ts = TextStatistics('\tHello friend.');
        assert.equal(ts.text, 'Hello friend.');
      });
    });

    it('should remove multiple spaces between words', function() {
      var ts = TextStatistics('Hello   good  friend.');
      assert.equal(ts.text, 'Hello good friend.');
    });

    it('should un-duplicate terminators', function() {
      var ts = TextStatistics('Hello... Friend..');
      assert.equal(ts.text, 'Hello. Friend.');
    });

    it('should pad terminators with a space', function() {
      var ts = TextStatistics('Hello.Good.Friend.');
      assert.equal(ts.text, 'Hello. Good. Friend.');
    });

    context('unify terminators', function() {
      it('should replace all !! with ..', function() {
        var ts = TextStatistics('Hello! Friend!');
        assert.equal(ts.text, 'Hello. Friend.');
      });

      it('should replace all ?? with ..', function() {
        var ts = TextStatistics('Hello? Friend?');
        assert.equal(ts.text, 'Hello. Friend.');
      });
    });

    context('replacing newlines with terminators', function() {
      it('should replace \\n', function() {
        var ts = TextStatistics('bulleted list here we go\nnice dog\ngood dog');
        assert.equal(ts.text, 'bulleted list here we go. nice dog. good dog.');
      });

      it('should replace \\r\\n', function() {
        var ts = TextStatistics('bulleted list here we go\r\nnice dog\r\ngood dog');
        assert.equal(ts.text, 'bulleted list here we go. nice dog. good dog.');
      });

      it('should replace \\r', function() {
        var ts = TextStatistics('bulleted list here we go\rnice dog\rgood dog');
        assert.equal(ts.text, 'bulleted list here we go. nice dog. good dog.');
      });
    });

    context('stripping periods from email addresses', function() {
      it('should replace a single period', function() {
        var ts = TextStatistics('textstatistics@example.com');
        assert.equal(ts.text, 'textstatistics@examplecom.');
      });

      it('should replace a single period in the first part', function() {
        var ts = TextStatistics('text.statistics@example.com');
        assert.equal(ts.text, 'textstatistics@examplecom.');
      });

      it('should replace two periods in the first part', function() {
        var ts = TextStatistics('text.stat.istics@example.com');
        assert.equal(ts.text, 'textstatistics@examplecom.');
      });

      it('should replace periods with a subdomain', function() {
        var ts = TextStatistics('textstatistics@test.example.com');
        assert.equal(ts.text, 'textstatistics@testexamplecom.');
      });

      it('should replace periods with a subdomain and before the @', function() {
        var ts = TextStatistics('text.stat.istics@test.example.com');
        assert.equal(ts.text, 'textstatistics@testexamplecom.');
      });
    });

    context('replacing non-terminator punctuation', function() {
      it('should replace commas with spaces', function() {
        var ts = TextStatistics('Hello, hi, friend.');
        assert.equal(ts.text, 'Hello hi friend.');
      });
      
      it('should replace colons with spaces', function() {
        var ts = TextStatistics('Hello: hi: friend.');
        assert.equal(ts.text, 'Hello hi friend.');
      });
      
      it('should replace semicolons with spaces', function() {
        var ts = TextStatistics('Hello; hi; friend.');
        assert.equal(ts.text, 'Hello hi friend.');
      });
      
      it('should replace parentheses with spaces', function() {
        var ts = TextStatistics('(Hello (hi) friend).');
        assert.equal(ts.text, 'Hello hi friend.');
      });
      
      it('should replace slashes with spaces', function() {
        var ts = TextStatistics('Hello/hi/friend.');
        assert.equal(ts.text, 'Hello hi friend.');
      });
      
      it('should replace double hyphens with spaces', function() {
        var ts = TextStatistics('Hello--hi--friend.');
        assert.equal(ts.text, 'Hello hi friend.');
      });

      it('should not replace a single dash with spaces', function() {
        var ts = TextStatistics('Hi-di-ho friend-person!');
        assert.equal(ts.text, 'Hi-di-ho friend-person.');
      });

      it('should replace pluses with spaces', function() {
        var ts = TextStatistics('Hello + hi+friend.');
        assert.equal(ts.text, 'Hello hi friend.');
      });

      it('should replace ampersands with spaces', function() {
        var ts = TextStatistics('Hello&hi & friend.');
        assert.equal(ts.text, 'Hello hi friend.');
      });

      it('should replace em-dash with spaces'); // can I do that?
    });
  });
});
