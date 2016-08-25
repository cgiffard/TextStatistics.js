var assert = require('assert');
var ts = require('../index.js');

describe('TextStatistics.js', function() {
  describe('#wordCount()', function() {
    it('should count the number of words in a text', function() {
      var ts_ = ts('see spot run');
      assert.equal(3, ts_.wordCount());
    });
  });
});