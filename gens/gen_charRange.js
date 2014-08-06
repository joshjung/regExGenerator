var Gen_CharRange = function() {
	return this;
};

var genCharRange = function(c) {
	if (/[a-z]/.test(c))
		return '[a-z]';
	if (/[A-Z]/.test(c))
		return '[A-Z]';
	if (/[0-9]/.test(c))
		return '[0-9]';

	return '.';
};

Gen_CharRange.prototype.generate = function(parent, partial, depth) {
	if (parent.indeterminateChars + partial.length >= parent.maxIndeterminateChars) {
		return 0;
	}

	var ret = '';

	for (var i = 0; i < partial.length; i++) {
		ret += genCharRange(partial.charAt(i));
	}

	parent.indeterminateChars += partial.length;

	return ret;
};

module.exports = {
	gen: Gen_CharRange
};