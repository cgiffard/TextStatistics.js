var chai = require('chai');
var assert = chai.assert;

/*

    Text
    --------------------------------------------------------
    Moby Dick by Herman Melville

    Call me Ishmael. Some years ago - never mind how long precisely - having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen, and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people's hats off - then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me.

    Data
    --------------------------------------------------------
    Letter Count:                                        884
    Word Count:                                          201
    3+ syllables:                                         23
    Syllable Count:                                      304
    Sentence Count:                                        8
    Note: 1 of the 3+ syllable words is a proper noun and
    will be ignored by the Gunning-Fog Score.

    Manually Calculated Scores
    --------------------------------------------------------
    Flesch-Kincaid Reading Ease
    (206.835 - (1.015 * (word_count / sentence_count)) - (84.6 * (syllableCount / word_count))) = 53.380886194029850746268656716418

    Flesch-Kincaid Grade Level
    ((0.39 * (word_count / sentence_count)) + (11.8 * (syllableCount / word_count)) - 15.59) = 12.055516169154228855721393034826

    Gunning-Fog Score
    (((word_count / sentence_count) + (100 * (long_word_count / word_count ))) * 0.4) = 14.428109452736318407960199004975

    Coleman-Liau Index
    ((5.89 * (letter_count / word_count)) - (0.3 * (sentence_count / word_count)) - 15.8) = 10.092338308457711442786069651741

    SMOG Index
    (1.043 * sqrt((long_word_count * (30 / sentence_count)) + 3.1291)) = 9.8605762790974848783982768629462

    Automated Readability Index
    ((4.71 * (letter_count / word_count)) + (0.5 * (word_count / sentence_count)) - 21.43) = 11.847126865671641791044776119403

*/

var TS = require('../index');
var ts = TS();

var strText = "Call me Ishmael. Some years ago - never mind how long precisely - having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen, and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people's hats off - then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me.";

describe('Test Syllables', function(){

    it('testMobyDickSyllables', function(){ // The Words from Moby Dick, in order
        assert.equal(1, ts.syllableCount('Call'));
        assert.equal(1, ts.syllableCount('me'));
        assert.equal(2, ts.syllableCount('Ishmael'));
        assert.equal(1, ts.syllableCount('Some'));
        assert.equal(1, ts.syllableCount('years'));
        assert.equal(2, ts.syllableCount('ago'));
        assert.equal(2, ts.syllableCount('never'));
        assert.equal(1, ts.syllableCount('mind'));
        assert.equal(1, ts.syllableCount('how'));
        assert.equal(1, ts.syllableCount('long'));
        assert.equal(3, ts.syllableCount('precisely'));
        assert.equal(2, ts.syllableCount('having'));
        assert.equal(2, ts.syllableCount('little'));
        assert.equal(1, ts.syllableCount('or'));
        assert.equal(1, ts.syllableCount('no'));
        assert.equal(2, ts.syllableCount('money'));
        assert.equal(1, ts.syllableCount('in'));
        assert.equal(1, ts.syllableCount('my'));
        assert.equal(1, ts.syllableCount('purse'));
        assert.equal(1, ts.syllableCount('and'));
        assert.equal(2, ts.syllableCount('nothing'));
        assert.equal(4, ts.syllableCount('particular'));
        assert.equal(1, ts.syllableCount('to'));
        assert.equal(3, ts.syllableCount('interest'));
        assert.equal(1, ts.syllableCount('me'));
        assert.equal(1, ts.syllableCount('on'));
        assert.equal(1, ts.syllableCount('shore'));
        assert.equal(1, ts.syllableCount('I'));
        assert.equal(1, ts.syllableCount('thought'));
        assert.equal(1, ts.syllableCount('I'));
        assert.equal(1, ts.syllableCount('would'));
        assert.equal(1, ts.syllableCount('sail'));
        assert.equal(2, ts.syllableCount('about'));
        assert.equal(1, ts.syllableCount('a'));
        assert.equal(2, ts.syllableCount('little'));
        assert.equal(1, ts.syllableCount('and'));
        assert.equal(1, ts.syllableCount('see'));
        assert.equal(1, ts.syllableCount('the'));
        assert.equal(3, ts.syllableCount('watery'));
        assert.equal(1, ts.syllableCount('part'));
        assert.equal(1, ts.syllableCount('of'));
        assert.equal(1, ts.syllableCount('the'));
        assert.equal(1, ts.syllableCount('world'));
        assert.equal(1, ts.syllableCount('It'));
        assert.equal(1, ts.syllableCount('is'));
        assert.equal(1, ts.syllableCount('a'));
        assert.equal(1, ts.syllableCount('way'));
        assert.equal(1, ts.syllableCount('I'));
        assert.equal(1, ts.syllableCount('have'));
        assert.equal(1, ts.syllableCount('of'));
        assert.equal(2, ts.syllableCount('driving'));
        assert.equal(1, ts.syllableCount('off'));
        assert.equal(1, ts.syllableCount('the'));
        assert.equal(1, ts.syllableCount('spleen'));
        assert.equal(1, ts.syllableCount('and'));
        assert.equal(4, ts.syllableCount('regulating'));
        assert.equal(1, ts.syllableCount('the'));
        assert.equal(4, ts.syllableCount('circulation'));
        assert.equal(3, ts.syllableCount('Whenever'));
        assert.equal(1, ts.syllableCount('I'));
        assert.equal(1, ts.syllableCount('find'));
        assert.equal(2, ts.syllableCount('myself'));
        assert.equal(2, ts.syllableCount('growing'));
        assert.equal(1, ts.syllableCount('grim'));
        assert.equal(2, ts.syllableCount('about'));
        assert.equal(1, ts.syllableCount('the'));
        assert.equal(1, ts.syllableCount('mouth'));
        assert.equal(3, ts.syllableCount('whenever'));
        assert.equal(1, ts.syllableCount('it'));
        assert.equal(1, ts.syllableCount('is'));
        assert.equal(1, ts.syllableCount('a'));
        assert.equal(1, ts.syllableCount('damp'));
        assert.equal(2, ts.syllableCount('drizzly'));
        assert.equal(3, ts.syllableCount('November'));
        assert.equal(1, ts.syllableCount('in'));
        assert.equal(1, ts.syllableCount('my'));
        assert.equal(1, ts.syllableCount('soul'));
        assert.equal(3, ts.syllableCount('whenever'));
        assert.equal(1, ts.syllableCount('I'));
        assert.equal(1, ts.syllableCount('find'));
        assert.equal(2, ts.syllableCount('myself'));
        assert.equal(6, ts.syllableCount('involuntarily'));
        assert.equal(2, ts.syllableCount('pausing'));
        assert.equal(2, ts.syllableCount('before'));
        assert.equal(2, ts.syllableCount('coffin'));
        assert.equal(3, ts.syllableCount('warehouses'));
        assert.equal(1, ts.syllableCount('and'));
        assert.equal(2, ts.syllableCount('bringing'));
        assert.equal(1, ts.syllableCount('up'));
        assert.equal(1, ts.syllableCount('the'));
        assert.equal(1, ts.syllableCount('rear'));
        assert.equal(1, ts.syllableCount('of'));
        assert.equal(3, ts.syllableCount('every'));
        assert.equal(3, ts.syllableCount('funeral'));
        assert.equal(1, ts.syllableCount('I'));
        assert.equal(1, ts.syllableCount('meet'));
        assert.equal(1, ts.syllableCount('and'));
        assert.equal(4, ts.syllableCount('especially'));
        assert.equal(3, ts.syllableCount('whenever'));
        assert.equal(1, ts.syllableCount('my'));
        assert.equal(2, ts.syllableCount('hypos'));
        assert.equal(1, ts.syllableCount('get'));
        assert.equal(1, ts.syllableCount('such'));
        assert.equal(1, ts.syllableCount('an'));
        assert.equal(2, ts.syllableCount('upper'));
        assert.equal(1, ts.syllableCount('hand'));
        assert.equal(1, ts.syllableCount('of'));
        assert.equal(1, ts.syllableCount('me'));
        assert.equal(1, ts.syllableCount('that'));
        assert.equal(1, ts.syllableCount('it'));
        assert.equal(2, ts.syllableCount('requires'));
        assert.equal(1, ts.syllableCount('a'));
        assert.equal(1, ts.syllableCount('strong'));
        assert.equal(2, ts.syllableCount('moral'));
        assert.equal(3, ts.syllableCount('principle'));
        assert.equal(1, ts.syllableCount('to'));
        assert.equal(2, ts.syllableCount('prevent'));
        assert.equal(1, ts.syllableCount('me'));
        assert.equal(1, ts.syllableCount('from'));
        assert.equal(5, ts.syllableCount('deliberately'));
        assert.equal(2, ts.syllableCount('stepping'));
        assert.equal(2, ts.syllableCount('into'));
        assert.equal(1, ts.syllableCount('the'));
        assert.equal(1, ts.syllableCount('street'));
        assert.equal(1, ts.syllableCount('and'));
        assert.equal(5, ts.syllableCount('methodically'));
        assert.equal(2, ts.syllableCount('knocking'));
        assert.equal(2, ts.syllableCount('people\'s'));
        assert.equal(1, ts.syllableCount('hats'));
        assert.equal(1, ts.syllableCount('off'));
        assert.equal(1, ts.syllableCount('then'));
        assert.equal(1, ts.syllableCount('I'));
        assert.equal(2, ts.syllableCount('account'));
        assert.equal(1, ts.syllableCount('it'));
        assert.equal(1, ts.syllableCount('high'));
        assert.equal(1, ts.syllableCount('time'));
        assert.equal(1, ts.syllableCount('to'));
        assert.equal(1, ts.syllableCount('get'));
        assert.equal(1, ts.syllableCount('to'));
        assert.equal(1, ts.syllableCount('sea'));
        assert.equal(1, ts.syllableCount('as'));
        assert.equal(1, ts.syllableCount('soon'));
        assert.equal(1, ts.syllableCount('as'));
        assert.equal(1, ts.syllableCount('I'));
        assert.equal(1, ts.syllableCount('can'));
        assert.equal(1, ts.syllableCount('This'));
        assert.equal(1, ts.syllableCount('is'));
        assert.equal(1, ts.syllableCount('my'));
        assert.equal(3, ts.syllableCount('substitute'));
        assert.equal(1, ts.syllableCount('for'));
        assert.equal(2, ts.syllableCount('pistol'));
        assert.equal(1, ts.syllableCount('and'));
        assert.equal(1, ts.syllableCount('ball'));
        assert.equal(1, ts.syllableCount('With'));
        assert.equal(1, ts.syllableCount('a'));
        assert.equal(5, ts.syllableCount('philosophical'));
        assert.equal(2, ts.syllableCount('flourish'));
        assert.equal(2, ts.syllableCount('Cato'));
        assert.equal(1, ts.syllableCount('throws'));
        assert.equal(2, ts.syllableCount('himself'));
        assert.equal(2, ts.syllableCount('upon'));
        assert.equal(1, ts.syllableCount('his'));
        assert.equal(1, ts.syllableCount('sword'));
        assert.equal(1, ts.syllableCount('I'));
        assert.equal(3, ts.syllableCount('quietly'));
        assert.equal(1, ts.syllableCount('take'));
        assert.equal(1, ts.syllableCount('to'));
        assert.equal(1, ts.syllableCount('the'));
        assert.equal(1, ts.syllableCount('ship'));
        assert.equal(1, ts.syllableCount('There'));
        assert.equal(1, ts.syllableCount('is'));
        assert.equal(2, ts.syllableCount('nothing'));
        assert.equal(3, ts.syllableCount('surprising'));
        assert.equal(1, ts.syllableCount('in'));
        assert.equal(1, ts.syllableCount('this'));
        assert.equal(1, ts.syllableCount('If'));
        assert.equal(1, ts.syllableCount('they'));
        assert.equal(1, ts.syllableCount('but'));
        assert.equal(1, ts.syllableCount('knew'));
        assert.equal(1, ts.syllableCount('it'));
        assert.equal(2, ts.syllableCount('almost'));
        assert.equal(1, ts.syllableCount('all'));
        assert.equal(1, ts.syllableCount('men'));
        assert.equal(1, ts.syllableCount('in'));
        assert.equal(1, ts.syllableCount('their'));
        assert.equal(2, ts.syllableCount('degree'));
        assert.equal(1, ts.syllableCount('some'));
        assert.equal(1, ts.syllableCount('time'));
        assert.equal(1, ts.syllableCount('or'));
        assert.equal(2, ts.syllableCount('other'));
        assert.equal(2, ts.syllableCount('cherish'));
        assert.equal(2, ts.syllableCount('very'));
        assert.equal(2, ts.syllableCount('nearly'));
        assert.equal(1, ts.syllableCount('the'));
        assert.equal(1, ts.syllableCount('same'));
        assert.equal(2, ts.syllableCount('feelings'));
        assert.equal(2, ts.syllableCount('towards'));
        assert.equal(1, ts.syllableCount('the'));
        assert.equal(2, ts.syllableCount('ocean'));
        assert.equal(1, ts.syllableCount('with'));
        assert.equal(1, ts.syllableCount('me'));
    }

    /* Test Word Count
    -------------------- */
    it('testWordCount', function(){
        assert.equal(201, ts.wordCount(strText));
    }

    /* Test Long Word Count
    -------------------- */
    it('testLongWordCount', function(){
        assert.equal(23, ts.wordsWithThreeSyllables(strText, true)); // Include proper nouns
        assert.equal(22, ts.wordsWithThreeSyllables(strText, false)); // Don't include proper nouns
    }

    /* Test Sentences
    -------------------- */
    it('testSentenceCount', function(){
        assert.equal(8, ts.sentenceCount(strText));
    }

    /* Test Letter Count
    -------------------- */
    it('testTextLengthCheck', function(){
        assert.equal(884, ts.letterCount(strText));
    }

    /* Test Flesch Kincaid Reading Ease
    -------------------- */
    it('testFleschKincaidReadingEase', function(){
        assert.equal(53.4, ts.fleschKincaidReadingEase(strText));
    }

    /* Test Flesch Kincaid Grade Level
    -------------------- */
    it('testFleschKincaidGradeLevel', function(){
        assert.equal(12.1, ts.fleschKincaidGradeLevel(strText));
    }

    /* Test Gunning Fog Score
    -------------------- */
    it('testGunningFogScore', function(){
        assert.equal(14.4, ts.gunningFogScore(strText));
    }

    /* Test Coleman Liau Index
    -------------------- */
    it('testColemanLiauIndex', function(){
        assert.equal(10.1, ts.colemanLiauIndex(strText));
    }

    /* Test SMOG Index
    -------------------- */
    it('testSMOGIndex', function(){
        assert.equal(9.9, ts.smogIndex(strText));
    }

    /* Test Automated Readability Index
    -------------------- */
    it('testAutomatedReadabilityIndex', function(){
        assert.equal(11.8, ts.automatedReadabilityIndex(strText));
    }
});