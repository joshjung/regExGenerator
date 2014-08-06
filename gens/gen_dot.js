/**
 * MAX_INDETERMINATE CHARS determines how many . chars can occur in the regular expression.
 * This is a percentage.
 */
const MAX_INDETERMINATE_CHARS = 0.25;

var repeat = function(str, num) {
	return new Array(num + 1).join(str);
};

var Gen_Dot = function() {
	return this;
};

Gen_Dot.prototype.generate = function(parent, partial, depth) {
	if (parent.indeterminateChars + partial.length >= MAX_INDETERMINATE_CHARS * parent.originalWord.length) {
		return 0;
	}

	parent.indeterminateChars += partial.length;

	return repeat('.', partial.length);
};

module.exports = {
	gen: Gen_Dot
};