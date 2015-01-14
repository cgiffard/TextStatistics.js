var chai = require('chai');
// var should = chai.should();
var assert = chai.assert;

var TS = require('../index');
var ts = TS();


describe('Test Cleaning of text', function(){

  it('testCleaning', function(){
    assert.equal('', TS(false).text);

    assert.equal('There once was a little sausage named Baldrick. and he lived happily ever after.',
      TS('There once was a little sausage named Baldrick. . . .  And he lived happily ever after.!! !??').text);
  });
});


describe('Test Counts', function(){

  it('testCounts', function(){
    assert.equal(47, ts.characterCount('There once was a little sausage named Baldrick.'));
    assert.equal(47, ts.textLength('There once was a little sausage named Baldrick.'));
    assert.equal(39, ts.letterCount('There once was a little sausage named Baldrick.'));
    assert.equal(0, ts.letterCount(''));
    assert.equal(0, ts.letterCount(' '));
    assert.equal(0, ts.wordCount(''));
    assert.equal(0, ts.wordCount(' '));
    assert.equal(0, ts.sentenceCount(''));
    assert.equal(0, ts.sentenceCount(' '));
    assert.equal(1, ts.letterCount('a'));
    assert.equal(0, ts.letterCount(''));
    assert.equal(46, ts.letterCount('this sentence has 30 characters, not including the digits'));
  });

});

describe('Test Syllables', function(){

  it('testSyllableCountBasicWords', function(){
        assert.equal(0, ts.syllableCount('.'));
        assert.equal(1, ts.syllableCount('a'));
        assert.equal(1, ts.syllableCount('was'));
        assert.equal(1, ts.syllableCount('the'));
        assert.equal(1, ts.syllableCount('and'));
        assert.equal(2, ts.syllableCount('foobar'));
        assert.equal(2, ts.syllableCount('hello'));
        assert.equal(1, ts.syllableCount('world'));
        assert.equal(3, ts.syllableCount('wonderful'));
        assert.equal(2, ts.syllableCount('simple'));
        assert.equal(2, ts.syllableCount('easy'));
        assert.equal(1, ts.syllableCount('hard'));
        assert.equal(1, ts.syllableCount('quick'));
        assert.equal(1, ts.syllableCount('brown'));
        assert.equal(1, ts.syllableCount('fox'));
        assert.equal(1, ts.syllableCount('jumped'));
        assert.equal(2, ts.syllableCount('over'));
        assert.equal(2, ts.syllableCount('lazy'));
        assert.equal(1, ts.syllableCount('dog'));
        assert.equal(3, ts.syllableCount('camera'));
  });

  it('testSyllableCountComplexWords', function(){
    assert.equal(12, ts.syllableCount('antidisestablishmentarianism'));
    assert.equal(14, ts.syllableCount('supercalifragilisticexpialidocious'));
    assert.equal(8, ts.syllableCount('chlorofluorocarbonation'));
    assert.equal(4, ts.syllableCount('forethoughtfulness'));
    assert.equal(4, ts.syllableCount('phosphorescent'));
    assert.equal(5, ts.syllableCount('theoretician'));
    assert.equal(5, ts.syllableCount('promiscuity'));
    assert.equal(4, ts.syllableCount('unbutlering'));
    assert.equal(5, ts.syllableCount('continuity'));
    assert.equal(1, ts.syllableCount('craunched'));
    assert.equal(1, ts.syllableCount('squelched'));
    assert.equal(1, ts.syllableCount('scrounge'));
    assert.equal(1, ts.syllableCount('coughed'));
    assert.equal(1, ts.syllableCount('smile'));
    assert.equal(4, ts.syllableCount('monopoly'));
    assert.equal(2, ts.syllableCount('doughey'));
    assert.equal(3, ts.syllableCount('doughier'));
    assert.equal(4, ts.syllableCount('leguminous'));
    assert.equal(3, ts.syllableCount('thoroughbreds'));
    assert.equal(2, ts.syllableCount('special'));
    assert.equal(3, ts.syllableCount('delicious'));
    assert.equal(2, ts.syllableCount('spatial'));
    assert.equal(4, ts.syllableCount('pacifism'));
    assert.equal(4, ts.syllableCount('coagulant'));
    assert.equal(2, ts.syllableCount('shouldn\'t'));
    assert.equal(3, ts.syllableCount('mcdonald'));
    assert.equal(3, ts.syllableCount('audience'));
    assert.equal(2, ts.syllableCount('finance'));
    assert.equal(3, ts.syllableCount('prevalence'));
    assert.equal(5, ts.syllableCount('impropriety'));
    assert.equal(3, ts.syllableCount('alien'));
    assert.equal(2, ts.syllableCount('dreadnought'));
    assert.equal(3, ts.syllableCount('verandah'));
    assert.equal(3, ts.syllableCount('similar'));
    assert.equal(4, ts.syllableCount('similarly'));
    assert.equal(2, ts.syllableCount('central'));
    assert.equal(1, ts.syllableCount('cyst'));
    assert.equal(1, ts.syllableCount('term'));
    assert.equal(2, ts.syllableCount('order'));
    assert.equal(1, ts.syllableCount('fur'));
    assert.equal(2, ts.syllableCount('sugar'));
    assert.equal(2, ts.syllableCount('paper'));
    assert.equal(1, ts.syllableCount('make'));
    assert.equal(1, ts.syllableCount('gem'));
    assert.equal(2, ts.syllableCount('program'));
    assert.equal(2, ts.syllableCount('hopeless'));
    assert.equal(3, ts.syllableCount('hopelessly'));
    assert.equal(2, ts.syllableCount('careful'));
    assert.equal(3, ts.syllableCount('carefully'));
    assert.equal(2, ts.syllableCount('stuffy'));
    assert.equal(2, ts.syllableCount('thistle'));
    assert.equal(2, ts.syllableCount('teacher'));
    assert.equal(3, ts.syllableCount('unhappy'));
    assert.equal(5, ts.syllableCount('ambiguity'));
    assert.equal(4, ts.syllableCount('validity'));
    assert.equal(4, ts.syllableCount('ambiguous'));
    assert.equal(2, ts.syllableCount('deserve'));
    assert.equal(2, ts.syllableCount('blooper'));
    assert.equal(1, ts.syllableCount('scooped'));
    assert.equal(2, ts.syllableCount('deserve'));
    assert.equal(1, ts.syllableCount('deal'));
    assert.equal(1, ts.syllableCount('death'));
    assert.equal(1, ts.syllableCount('dearth'));
    assert.equal(1, ts.syllableCount('deign'));
    assert.equal(1, ts.syllableCount('reign'));
    assert.equal(2, ts.syllableCount('bedsore'));
    assert.equal(5, ts.syllableCount('anorexia'));
    assert.equal(3, ts.syllableCount('anymore'));
    assert.equal(1, ts.syllableCount('cored'));
    assert.equal(1, ts.syllableCount('sore'));
    assert.equal(2, ts.syllableCount('foremost'));
    assert.equal(2, ts.syllableCount('restore'));
    assert.equal(2, ts.syllableCount('minute'));
    assert.equal(3, ts.syllableCount('manticores'));
    assert.equal(4, ts.syllableCount('asparagus'));
    assert.equal(3, ts.syllableCount('unexplored'));
    assert.equal(4, ts.syllableCount('unexploded'));
    assert.equal(3, ts.syllableCount('CAPITALS'));
  });

  it('testSyllableCountProgrammedExceptions', function(){
    assert.equal(3, ts.syllableCount('simile'));
    assert.equal(2, ts.syllableCount('shoreline'));
    assert.equal(3, ts.syllableCount('forever'));
  });

  it('testAverageSyllablesPerWord', function(){
    assert.equal(1, ts.averageSyllablesPerWord('and then there was one'));
    assert.equal(2, ts.averageSyllablesPerWord('because special ducklings deserve rainbows'));
    assert.equal(1.5, ts.averageSyllablesPerWord('and then there was one because special ducklings deserve rainbows'));
  });
});

describe('Test Words', function(){

  it('testWordCount', function(){
    assert.equal(9, ts.wordCount('The quick brown fox jumps over the lazy dog'));
    assert.equal(9, ts.wordCount('The quick brown fox jumps over the lazy dog.'));
    assert.equal(9, ts.wordCount('The quick brown fox jumps over the lazy dog. '));
    assert.equal(9, ts.wordCount(' The quick brown fox jumps over the lazy dog. '));
    assert.equal(9, ts.wordCount(' The  quick brown fox jumps over the lazy dog. '));
    assert.equal(2, ts.wordCount('Yes. No.'));
    assert.equal(2, ts.wordCount('Yes.No.'));
    assert.equal(2, ts.wordCount('Yes.No.'));
    assert.equal(2, ts.wordCount('Yes . No.'));
    assert.equal(2, ts.wordCount('Yes .No.'));
    assert.equal(2, ts.wordCount('Yes - No. '));
  });

  it('testCheckPercentageWordsWithThreeSyllables', function(){
    assert.equal(9, Math.ceil(ts.percentageWordsWithThreeSyllables('there is just one word with three syllables in this sentence')));
    assert.equal(9, Math.ceil(ts.percentageWordsWithThreeSyllables('there is just one word with three syllables in this sentence', true)));
    assert.equal(0, Math.ceil(ts.percentageWordsWithThreeSyllables('there are no valid words with three Syllables in this sentence', false)));
    assert.equal(5, Math.ceil(ts.percentageWordsWithThreeSyllables('there is one and only one word with three or more syllables in this long boring sentence of twenty words')));
    assert.equal(10, Math.ceil(ts.percentageWordsWithThreeSyllables('there are two and only two words with three or more syllables in this long sentence of exactly twenty words')));
    assert.equal(5, Math.ceil(ts.percentageWordsWithThreeSyllables('there is Actually only one valid word with three or more syllables in this long sentence of Exactly twenty words', false)));
    assert.equal(0, Math.ceil(ts.percentageWordsWithThreeSyllables('no long words in this sentence')));
    assert.equal(0, Math.ceil(ts.percentageWordsWithThreeSyllables('no long valid words in this sentence because the test ignores proper case words like this Behemoth', false)));
  });
});

describe('Test Sentences', function(){

  it('testSentenceCount', function(){
    assert.equal(1, ts.sentenceCount('This is a sentence'));
    assert.equal(1, ts.sentenceCount('This is a sentence.'));
    assert.equal(1, ts.sentenceCount('This is a sentence!'));
    assert.equal(1, ts.sentenceCount('This is a sentence?'));
    assert.equal(1, ts.sentenceCount('This is a sentence..'));
    assert.equal(2, ts.sentenceCount('This is a sentence. So is this.'));
    assert.equal(2, ts.sentenceCount("This is a sentence. \n\n So is this, but this is multi-line!"));
    assert.equal(2, ts.sentenceCount('This is a sentence,. So is this.'));
    assert.equal(2, ts.sentenceCount('This is a sentence!? So is this.'));
    assert.equal(3, ts.sentenceCount('This is a sentence. So is this. And this one as well.'));
    assert.equal(1, ts.sentenceCount('This is a sentence - but just one.'));
    assert.equal(1, ts.sentenceCount('This is a sentence (but just one).'));
  });
  
  it('testAverageWordsPerSentence', function(){
    assert.equal(4, ts.averageWordsPerSentence('This is a sentence'));
    assert.equal(4, ts.averageWordsPerSentence('This is a sentence.'));
    assert.equal(4, ts.averageWordsPerSentence('This is a sentence. '));
    assert.equal(4, ts.averageWordsPerSentence('This is a sentence. This is a sentence'));
    assert.equal(4, ts.averageWordsPerSentence('This is a sentence. This is a sentence.'));
    assert.equal(4, ts.averageWordsPerSentence('This, is - a sentence . This is a sentence. '));
    assert.equal(5.5, ts.averageWordsPerSentence('This is a sentence with extra text. This is a sentence. '));
    assert.equal(6, ts.averageWordsPerSentence('This is a sentence with some extra text. This is a sentence. '));
  });
});

describe('Test Scores',function(){

  it('testFleschKincaidReadingEase', function(){
    assert.equal(121.2, ts.fleschKincaidReadingEase('This. Is. A. Nice. Set. Of. Small. Words. Of. One. Part. Each.')); // Best score possible
    assert.equal(94.3, ts.fleschKincaidReadingEase('The quick brown fox jumps over the lazy dog.'));
    assert.equal(94.3, ts.fleschKincaidReadingEase('The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.'));
    assert.equal(94.3, ts.fleschKincaidReadingEase('The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog'));
    assert.equal(94.3, ts.fleschKincaidReadingEase("The quick brown fox jumps over the lazy dog. \n\n The quick brown fox jumps over the lazy dog."));
    assert.equal(50.5, ts.fleschKincaidReadingEase('Now it is time for a more complicated sentence, including several longer words.'));
  });

  it('testFleschKincaidGradeLevel', function(){
    assert.equal(-3.4, ts.fleschKincaidGradeLevel('This. Is. A. Nice. Set. Of. Small. Words. Of. One. Part. Each.')); // Best score possible
    assert.equal(2.3, ts.fleschKincaidGradeLevel('The quick brown fox jumps over the lazy dog.'));
    assert.equal(2.3, ts.fleschKincaidGradeLevel('The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.'));
    assert.equal(2.3, ts.fleschKincaidGradeLevel('The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog'));
    assert.equal(2.3, ts.fleschKincaidGradeLevel("The quick brown fox jumps over the lazy dog. \n\n The quick brown fox jumps over the lazy dog."));
    assert.equal(9.4, ts.fleschKincaidGradeLevel('Now it is time for a more complicated sentence, including several longer words.'));
  });


  it('testGunningFogScore', function(){
    assert.equal(0.4, ts.gunningFogScore('This. Is. A. Nice. Set. Of. Small. Words. Of. One. Part. Each.')); // Best possible score
    assert.equal(3.6, ts.gunningFogScore('The quick brown fox jumps over the lazy dog.'));
    assert.equal(3.6, ts.gunningFogScore('The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.'));
    assert.equal(3.6, ts.gunningFogScore("The quick brown fox jumps over the lazy dog. \n\n The quick brown fox jumps over the lazy dog."));
    assert.equal(3.6, ts.gunningFogScore('The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog'));
    assert.equal(14.4, ts.gunningFogScore('Now it is time for a more complicated sentence, including several longer words.'));
    assert.equal(8.3, ts.gunningFogScore('Now it is time for a more Complicated sentence, including Several longer words.')); // Two proper nouns, ignored
  });

  it('testColemanLiauIndex', function(){
    assert.equal(3.0, ts.colemanLiauIndex('This. Is. A. Nice. Set. Of. Small. Words. Of. One. Part. Each.')); // Best possible score would be if all words were 1 character
    assert.equal(7.1, ts.colemanLiauIndex('The quick brown fox jumps over the lazy dog.'));
    assert.equal(7.1, ts.colemanLiauIndex('The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.'));
    assert.equal(7.1, ts.colemanLiauIndex("The quick brown fox jumps over the lazy dog. \n\n The quick brown fox jumps over the lazy dog."));
    assert.equal(7.1, ts.colemanLiauIndex('The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog'));
    assert.equal(13.6, ts.colemanLiauIndex('Now it is time for a more complicated sentence, including several longer words.'));
  });

  it('testSMOGIndex', function(){
    assert.equal(1.8, ts.smogIndex('This. Is. A. Nice. Set. Of. Small. Words. Of. One. Part. Each.')); // Should be 1.8 for any text with no words of 3+ syllables
    assert.equal(1.8, ts.smogIndex('The quick brown fox jumps over the lazy dog.'));
    assert.equal(1.8, ts.smogIndex('The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.'));
    assert.equal(1.8, ts.smogIndex("The quick brown fox jumps over the lazy dog. \n\n The quick brown fox jumps over the lazy dog."));
    assert.equal(1.8, ts.smogIndex('The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog'));
    assert.equal(10.1, ts.smogIndex('Now it is time for a more complicated sentence, including several longer words.'));
  });
  
  it('testAutomatedReadabilityIndex', function(){
    assert.equal(-5.6, ts.automatedReadabilityIndex('This. Is. A. Nice. Set. Of. Small. Words. Of. One. Part. Each.'));
    assert.equal(1.4, ts.automatedReadabilityIndex('The quick brown fox jumps over the lazy dog.'));
    assert.equal(1.4, ts.automatedReadabilityIndex('The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.'));
    assert.equal(1.4, ts.automatedReadabilityIndex("The quick brown fox jumps over the lazy dog. \n\n The quick brown fox jumps over the lazy dog."));
    assert.equal(1.4, ts.automatedReadabilityIndex('The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog'));
    assert.equal(8.6, ts.automatedReadabilityIndex('Now it is time for a more complicated sentence, including several longer words.'));
  });
});