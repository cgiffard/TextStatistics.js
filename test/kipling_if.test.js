var assert = require("assert");

/*

    Text
    --------------------------------------------------------
    If by Rudyard Kipling

    If you can keep your head when all about you
    Are losing theirs and blaming it on you,
    If you can trust yourself when all men doubt you
    But make allowance for their doubting too,
    If you can wait and not be tired by waiting,
    Or being lied about, don't deal in lies,
    Or being hated, don't give way to hating,
    And yet don't look too good, nor talk too wise:

    If you can dream - and not make dreams your master,
    If you can think - and not make thoughts your aim;
    If you can meet with Triumph and Disaster
    And treat those two impostors just the same;
    If you can bear to hear the truth you've spoken
    Twisted by knaves to make a trap for fools,
    Or watch the things you gave your life to, broken,
    And stoop and build 'em up with worn-out tools:

    If you can make one heap of all your winnings
    And risk it all on one turn of pitch-and-toss,
    And lose, and start again at your beginnings
    And never breath a word about your loss;
    If you can force your heart and nerve and sinew
    To serve your turn long after they are gone,
    And so hold on when there is nothing in you
    Except the Will which says to them: "Hold on"

    If you can talk with crowds and keep your virtue,
    Or walk with kings - nor lose the common touch,
    If neither foes nor loving friends can hurt you;
    If all men count with you, but none too much,
    If you can fill the unforgiving minute
    With sixty seconds' worth of distance run,
    Yours is the Earth and everything that's in it,
    And - which is more - you'll be a Man, my son!

    Data
    --------------------------------------------------------
    Letter Count:                                       1125
    Word Count:                                          292
    3+ syllables:                                          6
    Syllable Count:                                      338
    Sentence Count:                                        1
    Note: 1 of the 3+ syllable words is a proper noun and
    will be ignored by the Gunning-Fog Score.

    Manually Calculated Scores
    --------------------------------------------------------
    Flesch-Kincaid Reading Ease
    (206.835 - (1.015 * (word_count / sentence_count)) - (84.6 * (syllableCount / word_count))) = -187.47239726027397260273972602738

    Flesch-Kincaid Grade Level
    ((0.39 * (word_count / sentence_count)) + (11.8 * (syllableCount / word_count)) - 15.59) = 111.9489041095890410958904109589

    Gunning-Fog Score
    (((word_count / sentence_count) + (100 * (long_word_count / word_count ))) * 0.4) = 117.48493150684931506849315068493

    Coleman-Liau Index
    ((5.89 * (letter_count / word_count)) - (0.3 * (sentence_count / word_count)) - 15.8) = 6.8916095890410958904109589041096

    SMOG Index
    (1.043 * sqrt((long_word_count * (30 / sentence_count)) + 3.1291)) = 14.114418454399741934838352157075

    Automated Readability Index
    ((4.71 * (letter_count / word_count)) + (0.5 * (word_count / sentence_count)) - 21.43) = 142.7164041095890410958904109589

*/

var TS = require('../index');
var ts = TS();

var strText = "If you can keep your head when all about you \n Are losing theirs and blaming it on you, \n If you can trust yourself when all men doubt you \n But make allowance for their doubting too, \n If you can wait and not be tired by waiting, \n Or being lied about, don't deal in lies, \n Or being hated, don't give way to hating, \n And yet don't look too good, nor talk too wise: \n\n If you can dream - and not make dreams your master, \n If you can think - and not make thoughts your aim; \n If you can meet with Triumph and Disaster \n And treat those two impostors just the same; \n If you can bear to hear the truth you've spoken \n Twisted by knaves to make a trap for fools, \n Or watch the things you gave your life to, broken, \n And stoop and build 'em up with worn-out tools: \n\n If you can make one heap of all your winnings \n And risk it all on one turn of pitch-and-toss, \n And lose, and start again at your beginnings \n And never breath a word about your loss; \n If you can force your heart and nerve and sinew \n To serve your turn long after they are gone, \n And so hold on when there is nothing in you \n Except the Will which says to them: \"Hold on\" \n\n If you can talk with crowds and keep your virtue, \n Or walk with kings - nor lose the common touch, \n If neither foes nor loving friends can hurt you; \n If all men count with you, but none too much, \n If you can fill the unforgiving minute \n With sixty seconds' worth of distance run, \n Yours is the Earth and everything that's in it, \n And - which is more - you'll be a Man, my son!";


describe('Test Syllables', function(){

    it('testKiplingSyllables', function(){ // The Words from If, in order
        assert.equal(ts.syllableCount('If'), 1);
        assert.equal(ts.syllableCount('you'), 1);
        assert.equal(ts.syllableCount('can'), 1);
        assert.equal(ts.syllableCount('keep'), 1);
        assert.equal(ts.syllableCount('your'), 1);
        assert.equal(ts.syllableCount('head'), 1);
        assert.equal(ts.syllableCount('when'), 1);
        assert.equal(ts.syllableCount('all'), 1);
        assert.equal(ts.syllableCount('about'), 2);
        assert.equal(ts.syllableCount('you'), 1);
        assert.equal(ts.syllableCount('Are'), 1);
        assert.equal(ts.syllableCount('losing'), 2);
        assert.equal(ts.syllableCount('theirs'), 1);
        assert.equal(ts.syllableCount('and'), 1);
        assert.equal(ts.syllableCount('blaming'), 2);
        assert.equal(ts.syllableCount('it'), 1);
        assert.equal(ts.syllableCount('on'), 1);
        assert.equal(ts.syllableCount('you,'), 1);
        assert.equal(ts.syllableCount('If'), 1);
        assert.equal(ts.syllableCount('you'), 1);
        assert.equal(ts.syllableCount('can'), 1);
        assert.equal(ts.syllableCount('trust'), 1);
        assert.equal(ts.syllableCount('yourself'), 2);
        assert.equal(ts.syllableCount('when'), 1);
        assert.equal(ts.syllableCount('all'), 1);
        assert.equal(ts.syllableCount('men'), 1);
        assert.equal(ts.syllableCount('doubt'), 1);
        assert.equal(ts.syllableCount('you'), 1);
        assert.equal(ts.syllableCount('But'), 1);
        assert.equal(ts.syllableCount('make'), 1);
        assert.equal(ts.syllableCount('allowance'), 3);
        assert.equal(ts.syllableCount('for'), 1);
        assert.equal(ts.syllableCount('their'), 1);
        assert.equal(ts.syllableCount('doubting'), 2);
        assert.equal(ts.syllableCount('too,'), 1);
        assert.equal(ts.syllableCount('If'), 1);
        assert.equal(ts.syllableCount('you'), 1);
        assert.equal(ts.syllableCount('can'), 1);
        assert.equal(ts.syllableCount('wait'), 1);
        assert.equal(ts.syllableCount('and'), 1);
        assert.equal(ts.syllableCount('not'), 1);
        assert.equal(ts.syllableCount('be'), 1);
        assert.equal(ts.syllableCount('tired'), 1);
        assert.equal(ts.syllableCount('by'), 1);
        assert.equal(ts.syllableCount('waiting,'), 2);
        assert.equal(ts.syllableCount('Or'), 1);
        assert.equal(ts.syllableCount('being'), 2);
        assert.equal(ts.syllableCount('lied'), 1);
        assert.equal(ts.syllableCount('about,'), 2);
        assert.equal(ts.syllableCount('don\'t'), 1);
        assert.equal(ts.syllableCount('deal'), 1);
        assert.equal(ts.syllableCount('in'), 1);
        assert.equal(ts.syllableCount('lies,'), 1);
        assert.equal(ts.syllableCount('Or'), 1);
        assert.equal(ts.syllableCount('being'), 2);
        assert.equal(ts.syllableCount('hated,'), 2);
        assert.equal(ts.syllableCount('don\'t'), 1);
        assert.equal(ts.syllableCount('give'), 1);
        assert.equal(ts.syllableCount('way'), 1);
        assert.equal(ts.syllableCount('to'), 1);
        assert.equal(ts.syllableCount('hating,'), 2);
        assert.equal(ts.syllableCount('And'), 1);
        assert.equal(ts.syllableCount('yet'), 1);
        assert.equal(ts.syllableCount('don\'t'), 1);
        assert.equal(ts.syllableCount('look'), 1);
        assert.equal(ts.syllableCount('too'), 1);
        assert.equal(ts.syllableCount('good,'), 1);
        assert.equal(ts.syllableCount('nor'), 1);
        assert.equal(ts.syllableCount('talk'), 1);
        assert.equal(ts.syllableCount('too'), 1);
        assert.equal(ts.syllableCount('wise:'), 1);
        assert.equal(ts.syllableCount('If'), 1);
        assert.equal(ts.syllableCount('you'), 1);
        assert.equal(ts.syllableCount('can'), 1);
        assert.equal(ts.syllableCount('dream'), 1);
        assert.equal(ts.syllableCount('-and'), 1);
        assert.equal(ts.syllableCount('not'), 1);
        assert.equal(ts.syllableCount('make'), 1);
        assert.equal(ts.syllableCount('dreams'), 1);
        assert.equal(ts.syllableCount('your'), 1);
        assert.equal(ts.syllableCount('master,'), 2);
        assert.equal(ts.syllableCount('If'), 1);
        assert.equal(ts.syllableCount('you'), 1);
        assert.equal(ts.syllableCount('can'), 1);
        assert.equal(ts.syllableCount('think'), 1);
        assert.equal(ts.syllableCount('-and'), 1);
        assert.equal(ts.syllableCount('not'), 1);
        assert.equal(ts.syllableCount('make'), 1);
        assert.equal(ts.syllableCount('thoughts'), 1);
        assert.equal(ts.syllableCount('your'), 1);
        assert.equal(ts.syllableCount('aim;'), 1);
        assert.equal(ts.syllableCount('If'), 1);
        assert.equal(ts.syllableCount('you'), 1);
        assert.equal(ts.syllableCount('can'), 1);
        assert.equal(ts.syllableCount('meet'), 1);
        assert.equal(ts.syllableCount('with'), 1);
        assert.equal(ts.syllableCount('Triumph'), 2);
        assert.equal(ts.syllableCount('and'), 1);
        assert.equal(ts.syllableCount('Disaster'), 3);
        assert.equal(ts.syllableCount('And'), 1);
        assert.equal(ts.syllableCount('treat'), 1);
        assert.equal(ts.syllableCount('those'), 1);
        assert.equal(ts.syllableCount('two'), 1);
        assert.equal(ts.syllableCount('impostors'), 3);
        assert.equal(ts.syllableCount('just'), 1);
        assert.equal(ts.syllableCount('the'), 1);
        assert.equal(ts.syllableCount('same;'), 1);
        assert.equal(ts.syllableCount('If'), 1);
        assert.equal(ts.syllableCount('you'), 1);
        assert.equal(ts.syllableCount('can'), 1);
        assert.equal(ts.syllableCount('bear'), 1);
        assert.equal(ts.syllableCount('to'), 1);
        assert.equal(ts.syllableCount('hear'), 1);
        assert.equal(ts.syllableCount('the'), 1);
        assert.equal(ts.syllableCount('truth'), 1);
        assert.equal(ts.syllableCount('you\'ve'), 1);
        assert.equal(ts.syllableCount('spoken'), 2);
        assert.equal(ts.syllableCount('Twisted'), 2);
        assert.equal(ts.syllableCount('by'), 1);
        assert.equal(ts.syllableCount('knaves'), 1);
        assert.equal(ts.syllableCount('to'), 1);
        assert.equal(ts.syllableCount('make'), 1);
        assert.equal(ts.syllableCount('a'), 1);
        assert.equal(ts.syllableCount('trap'), 1);
        assert.equal(ts.syllableCount('for'), 1);
        assert.equal(ts.syllableCount('fools,'), 1);
        assert.equal(ts.syllableCount('Or'), 1);
        assert.equal(ts.syllableCount('watch'), 1);
        assert.equal(ts.syllableCount('the'), 1);
        assert.equal(ts.syllableCount('things'), 1);
        assert.equal(ts.syllableCount('you'), 1);
        assert.equal(ts.syllableCount('gave'), 1);
        assert.equal(ts.syllableCount('your'), 1);
        assert.equal(ts.syllableCount('life'), 1);
        assert.equal(ts.syllableCount('to,'), 1);
        assert.equal(ts.syllableCount('broken,'), 2);
        assert.equal(ts.syllableCount('And'), 1);
        assert.equal(ts.syllableCount('stoop'), 1);
        assert.equal(ts.syllableCount('and'), 1);
        assert.equal(ts.syllableCount('build'), 1);
        assert.equal(ts.syllableCount('\'em'), 1);
        assert.equal(ts.syllableCount('up'), 1);
        assert.equal(ts.syllableCount('with'), 1);
        assert.equal(ts.syllableCount('worn'), 1);
        assert.equal(ts.syllableCount('-out'), 1);
        assert.equal(ts.syllableCount('tools:'), 1);
        assert.equal(ts.syllableCount('If'), 1);
        assert.equal(ts.syllableCount('you'), 1);
        assert.equal(ts.syllableCount('can'), 1);
        assert.equal(ts.syllableCount('make'), 1);
        assert.equal(ts.syllableCount('one'), 1);
        assert.equal(ts.syllableCount('heap'), 1);
        assert.equal(ts.syllableCount('of'), 1);
        assert.equal(ts.syllableCount('all'), 1);
        assert.equal(ts.syllableCount('your'), 1);
        assert.equal(ts.syllableCount('winnings'), 2);
        assert.equal(ts.syllableCount('And'), 1);
        assert.equal(ts.syllableCount('risk'), 1);
        assert.equal(ts.syllableCount('it'), 1);
        assert.equal(ts.syllableCount('all'), 1);
        assert.equal(ts.syllableCount('on'), 1);
        assert.equal(ts.syllableCount('one'), 1);
        assert.equal(ts.syllableCount('turn'), 1);
        assert.equal(ts.syllableCount('of'), 1);
        assert.equal(ts.syllableCount('pitch'), 1);
        assert.equal(ts.syllableCount('-and'), 1);
        assert.equal(ts.syllableCount('-toss,'), 1);
        assert.equal(ts.syllableCount('And'), 1);
        assert.equal(ts.syllableCount('lose,'), 1);
        assert.equal(ts.syllableCount('and'), 1);
        assert.equal(ts.syllableCount('start'), 1);
        assert.equal(ts.syllableCount('again'), 2);
        assert.equal(ts.syllableCount('at'), 1);
        assert.equal(ts.syllableCount('your'), 1);
        assert.equal(ts.syllableCount('beginnings'), 3);
        assert.equal(ts.syllableCount('And'), 1);
        assert.equal(ts.syllableCount('never'), 2);
        assert.equal(ts.syllableCount('breath'), 1);
        assert.equal(ts.syllableCount('a'), 1);
        assert.equal(ts.syllableCount('word'), 1);
        assert.equal(ts.syllableCount('about'), 2);
        assert.equal(ts.syllableCount('your'), 1);
        assert.equal(ts.syllableCount('loss;'), 1);
        assert.equal(ts.syllableCount('If'), 1);
        assert.equal(ts.syllableCount('you'), 1);
        assert.equal(ts.syllableCount('can'), 1);
        assert.equal(ts.syllableCount('force'), 1);
        assert.equal(ts.syllableCount('your'), 1);
        assert.equal(ts.syllableCount('heart'), 1);
        assert.equal(ts.syllableCount('and'), 1);
        assert.equal(ts.syllableCount('nerve'), 1);
        assert.equal(ts.syllableCount('and'), 1);
        assert.equal(ts.syllableCount('sinew'), 2);
        assert.equal(ts.syllableCount('To'), 1);
        assert.equal(ts.syllableCount('serve'), 1);
        assert.equal(ts.syllableCount('your'), 1);
        assert.equal(ts.syllableCount('turn'), 1);
        assert.equal(ts.syllableCount('long'), 1);
        assert.equal(ts.syllableCount('after'), 2);
        assert.equal(ts.syllableCount('they'), 1);
        assert.equal(ts.syllableCount('are'), 1);
        assert.equal(ts.syllableCount('gone,'), 1);
        assert.equal(ts.syllableCount('And'), 1);
        assert.equal(ts.syllableCount('so'), 1);
        assert.equal(ts.syllableCount('hold'), 1);
        assert.equal(ts.syllableCount('on'), 1);
        assert.equal(ts.syllableCount('when'), 1);
        assert.equal(ts.syllableCount('there'), 1);
        assert.equal(ts.syllableCount('is'), 1);
        assert.equal(ts.syllableCount('nothing'), 2);
        assert.equal(ts.syllableCount('in'), 1);
        assert.equal(ts.syllableCount('you'), 1);
        assert.equal(ts.syllableCount('Except'), 2);
        assert.equal(ts.syllableCount('the'), 1);
        assert.equal(ts.syllableCount('Will'), 1);
        assert.equal(ts.syllableCount('which'), 1);
        assert.equal(ts.syllableCount('says'), 1);
        assert.equal(ts.syllableCount('to'), 1);
        assert.equal(ts.syllableCount('them:'), 1);
        assert.equal(ts.syllableCount('"Hold'), 1);
        assert.equal(ts.syllableCount('on!"'), 1);
        assert.equal(ts.syllableCount('If'), 1);
        assert.equal(ts.syllableCount('you'), 1);
        assert.equal(ts.syllableCount('can'), 1);
        assert.equal(ts.syllableCount('talk'), 1);
        assert.equal(ts.syllableCount('with'), 1);
        assert.equal(ts.syllableCount('crowds'), 1);
        assert.equal(ts.syllableCount('and'), 1);
        assert.equal(ts.syllableCount('keep'), 1);
        assert.equal(ts.syllableCount('your'), 1);
        assert.equal(ts.syllableCount('virtue,'), 2);
        assert.equal(ts.syllableCount('Or'), 1);
        assert.equal(ts.syllableCount('walk'), 1);
        assert.equal(ts.syllableCount('with'), 1);
        assert.equal(ts.syllableCount('kings'), 1);
        assert.equal(ts.syllableCount('-nor'), 1);
        assert.equal(ts.syllableCount('lose'), 1);
        assert.equal(ts.syllableCount('the'), 1);
        assert.equal(ts.syllableCount('common'), 2);
        assert.equal(ts.syllableCount('touch,'), 1);
        assert.equal(ts.syllableCount('If'), 1);
        assert.equal(ts.syllableCount('neither'), 2);
        assert.equal(ts.syllableCount('foes'), 1);
        assert.equal(ts.syllableCount('nor'), 1);
        assert.equal(ts.syllableCount('loving'), 2);
        assert.equal(ts.syllableCount('friends'), 1);
        assert.equal(ts.syllableCount('can'), 1);
        assert.equal(ts.syllableCount('hurt'), 1);
        assert.equal(ts.syllableCount('you;'), 1);
        assert.equal(ts.syllableCount('If'), 1);
        assert.equal(ts.syllableCount('all'), 1);
        assert.equal(ts.syllableCount('men'), 1);
        assert.equal(ts.syllableCount('count'), 1);
        assert.equal(ts.syllableCount('with'), 1);
        assert.equal(ts.syllableCount('you,'), 1);
        assert.equal(ts.syllableCount('but'), 1);
        assert.equal(ts.syllableCount('none'), 1);
        assert.equal(ts.syllableCount('too'), 1);
        assert.equal(ts.syllableCount('much'), 1);
        assert.equal(ts.syllableCount('If'), 1);
        assert.equal(ts.syllableCount('you'), 1);
        assert.equal(ts.syllableCount('can'), 1);
        assert.equal(ts.syllableCount('fill'), 1);
        assert.equal(ts.syllableCount('the'), 1);
        assert.equal(ts.syllableCount('unforgiving'), 4);
        assert.equal(ts.syllableCount('minute'), 2);
        assert.equal(ts.syllableCount('With'), 1);
        assert.equal(ts.syllableCount('sixty'), 2);
        assert.equal(ts.syllableCount('seconds\''), 2);
        assert.equal(ts.syllableCount('worth'), 1);
        assert.equal(ts.syllableCount('of'), 1);
        assert.equal(ts.syllableCount('distance'), 2);
        assert.equal(ts.syllableCount('run,'), 1);
        assert.equal(ts.syllableCount('Yours'), 1);
        assert.equal(ts.syllableCount('is'), 1);
        assert.equal(ts.syllableCount('the'), 1);
        assert.equal(ts.syllableCount('Earth'), 1);
        assert.equal(ts.syllableCount('and'), 1);
        assert.equal(ts.syllableCount('everything'), 4);
        assert.equal(ts.syllableCount('that\'s'), 1);
        assert.equal(ts.syllableCount('in'), 1);
        assert.equal(ts.syllableCount('it,'), 1);
        assert.equal(ts.syllableCount('And'), 1);
        assert.equal(ts.syllableCount('which'), 1);
        assert.equal(ts.syllableCount('is'), 1);
        assert.equal(ts.syllableCount('more'), 1);
        assert.equal(ts.syllableCount('you\'ll'), 1);
        assert.equal(ts.syllableCount('be'), 1);
        assert.equal(ts.syllableCount('a'), 1);
        assert.equal(ts.syllableCount('Man,'), 1);
        assert.equal(ts.syllableCount('my'), 1);
        assert.equal(ts.syllableCount('son!'), 1);
    });

    /* Test Total Letters
    -------------------- */
    it('testLetterCount', function(){
        assert.equal(1125, ts.letterCount(strText));
    });

    /* Test Total Syllables
    -------------------- */
    it('testSyllableCount', function(){
        assert.equal(338, ts.syllableCount(strText));
    });

    /* Test Words
    -------------------- */
    it('testWordCount', function(){
        assert.equal(292, ts.wordCount(strText));
    });

    /* Test Sentences
    -------------------- */
    it('testSentenceCount', function(){
        assert.equal(4, ts.sentenceCount(strText));
    });

    /* Test Letter Count
    -------------------- */
    it('testTextLengthCheck', function(){
        assert.equal(1125,  ts.letterCount(strText));
    });

    /* Test Flesch Kincaid Reading Ease
    -------------------- */
    it('testFleschKincaidReadingEase', function(){
        assert.equal(34.8, ts.fleschKincaidReadingEase(strText));
    });

    /* Test Flesch Kincaid Grade Level
    -------------------- */
    it('testFleschKincaidGradeLevel', function(){
        assert.equal(26.5, ts.fleschKincaidGradeLevel(strText));
    });

    /* Test Gunning Fog Score
    -------------------- */
    it('testGunningFogScore', function(){
        assert.equal(29.9, ts.gunningFogScore(strText));
    });

    /* Test Coleman Liau Index
    -------------------- */
    it('testColemanLiauIndex', function(){
        assert.equal(6.9, ts.colemanLiauIndex(strText));
    });

    /* Test SMOG Index
    -------------------- */
    it('testSMOGIndex', function(){
        assert.equal(7.2, ts.smogIndex(strText));
    });

    /* Test Automated Readability Index
    -------------------- */
    it('testAutomatedReadabilityIndex', function(){
        assert.equal(33.2, ts.automatedReadabilityIndex(strText));
    });
});