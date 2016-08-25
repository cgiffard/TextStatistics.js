var assert = require('assert');
var TextStatistics = require('../index.js');

describe('TextStatistics', function() {
  describe('#wordCount()', function() {
    it('an empty string should have word count of one, because dividing by zero', function() {
      var ts = TextStatistics('');
      assert.equal(1, ts.wordCount());
    });

    it('should count the number of words in a text', function() {
      var ts = TextStatistics('see spot run');
      assert.equal(3, ts.wordCount());
    });

    it('should not count words with an apostrophe as two words', function() {
      var ts = TextStatistics('they\'re');
      assert.equal(1, ts.wordCount());
    });

    it('should not count the empty string after a period as a word', function() {
      var ts = TextStatistics('dog.');
      assert.equal(1, ts.wordCount());
    });

    it('should count an email address as a single word', function() {
      var ts = TextStatistics('textstatistics@example.com');
      assert.equal(1, ts.wordCount());
    });
  });
});