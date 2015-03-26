TextStatistics.js
=================

JavaScript port of [TextStatistics.php](https://github.com/DaveChild/Text-Statistics)!

I've done what I think is a reasonably faithful port. Documentation incoming!
I removed a lot of the original comments during the port, but seeing as the API remained largely the same, I'll add them in shortly.

Same goes for a test suite - I'll get something working in node in a bit. :)

## Installation

Run this in the browser using a simple `<script>` include - or you can install for node with `npm install text-statistics`.

## Usage
This is a very basic example of how to use this..
Include the ``index.js`` file in your HTML..  ```<script src="https://raw.githubusercontent.com/cgiffard/TextStatistics.js/master/index.js"><script>
```
<script>
var stats = textstatistics("monkey goes yay");
alert(stats.wordCount()); // Alerts 4.
</script>
```

**[Famous! As seen in Time!](http://time.com/2958650/twitter-reading-level/)** (heh.)
