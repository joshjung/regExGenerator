var fs = require("fs");
var shuffle = require('knuth-shuffle').knuthShuffle;

module.exports = function(diff) {
	this.regEx = "";
	this.diff = diff;

	if (!this.diff) {
		console.error("ERROR: diff is " + this.diff);
	}

	this.regEx_none = function(wordPiece) {
		return wordPiece;
	}

	this.regEx_dot = function(wordPiece) {
		return ".".repeat(wordPiece.length);
	}

	this.regEx_plus = function(wordPiece) {
		if (wordPiece.length == 1) {
			return wordPiece + "+";
		}

		return "(" + wordPiece + ")+";
	}

	this.regEx_orRecurse = function(wordPiece) {
		if (this.depth > 0) {
			return 0;
		}

		// From 2 - 5 depending on difficulty 
		var count = Math.ceil(this.diff * 4) + 1;

		var ors = [];

		for (var i = 0; i < count; i++) {
			ors.push(new exports.RegExGenerator(this.diff)._generate(wordPiece, this.depth + 1));
		}

		shuffle(ors);

		// Eliminate duplicates
		ors = ors.filter(function(elem, pos, self) {
			return self.indexOf(elem) == pos;
		});

		return "(" + ors.join("|") + ")";
	}

	this.regExGenerators = [this.regEx_none, this.regEx_dot, this.regEx_plus, this.regEx_orRecurse];

	this.genNextRegExSlice = function() {
		this.curRegExSlice = 0;

		//We keep looping until we find a slice that works. In some cases a random
		//reg ex slice generator may fail (for example if the depth is too deep)
		while (this.curRegExSlice == 0) {
			var typeOfSlice = Math.floor(Math.random() * this.regExGenerators.length * this.diff);
			this.curRegExSlice = this.regExGenerators[typeOfSlice].call(this, this.curSlice);
		}

		this.regEx += this.curRegExSlice;
	}

	this.popRandomLetters = function() {
		var count = (this.curWord.length > 2) ? Math.floor(Math.random() * (this.curWord.length - 2)) + 1 : this.curWord.length;

		this.curSlice = this.curWord.substr(0, count);
		this.curWord = this.curWord.substr(count);

		this.genNextRegExSlice();
	}

	this._generate = function(word, depth) {
		this.curWord = this.originalWord = word;
		this.depth = depth;

		while (this.curWord.length) {
			this.popRandomLetters();
		}

		return this.regEx;
	}

	this.generate = function(word) {
		return this._generate(word, 0);
	}
}