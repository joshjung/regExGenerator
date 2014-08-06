var fs = require('fs'),
	debug = require('debug')('regex');

var generators = [
	new(require('./gens/gen_none').gen)(this),
	new(require('./gens/gen_dot').gen)(this),
	new(require('./gens/gen_plus').gen)(this),
	new(require('./gens/gen_orRecurse').gen)(this)
];

console.log(generators);

var RegExGenerator = function(diff) {
	this.regEx = '';
	this.diff = diff !== undefined ? diff : 0.5;
	this.indeterminateChars = 0;
}

RegExGenerator.prototype = {
	setDiff: function(diff) {
		this.diff = diff;
		return this;
	},
	genNextRegExSlice: function() {
		this.curRegExSlice = 0;

		//We keep looping until we find a slice that works. In some cases a random
		//reg ex slice generator may fail (for example if the depth is too deep)
		while (this.curRegExSlice === 0) {
			var t = Math.floor(Math.random() * generators.length * this.diff);
			this.curRegExSlice = generators[t].generate(this, this.curSlice, this.depth);
		}

		this.regEx += this.curRegExSlice;
	},
	next: function() {
		var count = (this.curWord.length > 2) ? Math.floor(Math.random() * (this.curWord.length - 2)) + 1 : this.curWord.length;

		this.curSlice = this.curWord.substr(0, count);
		this.curWord = this.curWord.substr(count);

		this.genNextRegExSlice();
	},
	_generate: function(word, depth) {
		indeterminateChars = 0;

		debug('generating for ' + word + ":" + depth);

		this.curWord = this.originalWord = word;
		this.depth = depth;

		while (this.curWord.length) {
			this.next();
		}

		return this.regEx;
	},
	generate: function(word, diff) {
		this.diff = diff;

		if (!this.diff) {
			console.error('ERROR: generate diff should be a number, but is ' + this.diff);
		}

		return new RegExp(this._generate(word, 0));
	},
	clone: function() {
		return new RegExGenerator(this.diff);
	}
}

module.exports = RegExGenerator;