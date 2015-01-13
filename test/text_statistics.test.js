var chai = require('chai');
// var should = chai.should();
var assert = chai.assert;

var ts = require('../index');

/* removed as cleanText is not public */
describe('testCleaning', function(){

  it('cleans text with symbols', function(){
    var input = ts('There once was a little sausage named Baldrick. . . .  And he lived happily ever after.!! !??');
    assert.equal('There once was a little sausage named Baldrick. and he lived happily ever after.',ts.cleanText());
  });

  it('cleans empty text',function(){
    assert.equal('', ts(false).cleanText());
  });
});


describe('testCounts', function(){

  it('correctly counts with sentences', function(){
    var input = ts('There once was a little sausage named Baldrick.');
    assert.equal(47, input.characterCount());
    assert.equal(47, input.textLength());
    assert.equal(39, input.letterCount());
  });

  it('correctly counts empty strings',function(){
    var input = ts('');
    assert.equal(0, input.letterCount());
    assert.equal(0, input.wordCount());
    assert.equal(0, input.characterCount());
    var input = ts(' ');
    assert.equal(0, input.letterCount());
    assert.equal(0, input.wordCount());
    assert.equal(0, input.characterCount());
  });

  it('counts number of letters',function(){
    assert.equal(1, ts('a').letterCount());
    assert.equal(0, ts('').letterCount());
    assert.equal(46, ts('this sentence has 30 characters, not including the digits').letterCount());
  });

});

describe('testSyllableCountBasicWords', function(){

  it('counts syllables for basic words', function(){
        assert.equal(0, ts('.').syllableCount());
        assert.equal(1, ts('a').syllableCount());
        assert.equal(1, ts('was').syllableCount());
        assert.equal(1, ts('the').syllableCount());
        assert.equal(1, ts('and').syllableCount());
        assert.equal(2, ts('foobar').syllableCount());
        assert.equal(2, ts('hello').syllableCount());
        assert.equal(1, ts('world').syllableCount());
        assert.equal(3, ts('wonderful').syllableCount());
        assert.equal(2, ts('simple').syllableCount());
        assert.equal(2, ts('easy').syllableCount());
        assert.equal(1, ts('hard').syllableCount());
        assert.equal(1, ts('quick').syllableCount());
        assert.equal(1, ts('brown').syllableCount());
        assert.equal(1, ts('fox').syllableCount());
        assert.equal(1, ts('jumped').syllableCount());
        assert.equal(2, ts('over').syllableCount());
        assert.equal(2, ts('lazy').syllableCount());
        assert.equal(1, ts('dog').syllableCount());
        assert.equal(3, ts('camera').syllableCount());
  });

});