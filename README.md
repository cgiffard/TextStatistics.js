TextStatistics.js
=================

JavaScript port of [TextStatistics.php](https://github.com/DaveChild/Text-Statistics)!


## Installation

Using a simple script include

```<script src="text-statistics.js"></script>```

Using NPM 

```npm install text-statistics```

## Usage

```javascript
var stat = new textstatistics();
```

Measuring Readability

```javascript
var text = "The quick brown fox jumped over the lazy dog.";

stat.fleschKincaidReadingEase(text); // 108.7
```

Counting Letters and Syllables

```javascript
stat.letterCount('I ate a banana'); // 11
stat.syllableCount('banana'); // 3
```

**[Famous! As seen in Time!](http://time.com/2958650/twitter-reading-level/)** (heh.)
