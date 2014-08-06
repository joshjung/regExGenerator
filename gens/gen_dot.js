/**
 * MAX_INDETERMINATE CHARS determines how many . chars can occur in the regular expression.
 * This is a percentage.
 */
const MAX_INDETERMINATE_CHARS = 0.25;

var repeat = function(str, num) {
	return new Array(num + 1).join(str);
}

var Gen_Dot = function() {
	this.indeterminateChars = 0;
	return this;
};

Gen_Dot.prototype.reset = function() {
	this.indeterminateChars = 0;
};

Gen_Dot.prototype.generate = function(parentGenerator, partial, depth) {
	if (this.indeterminateChars + partial.length >= MAX_INDETERMINATE_CHARS) {
		return 0;
	}

	this.indeterminateChars += wordPiece.length;

	return repeat('.', wordPiece.length);
};

module.exports = {
	gen: Gen_Dot
};