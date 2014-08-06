var Gen_Escapee = function() {
	return this;
};

var genEscapee = function(c) {
	if (/\s/.test(c))
		return '\\s';
	if (/\a/.test(c))
		return '\\a';

	return '.';
};

Gen_Escapee.prototype.generate = function(parent, partial, depth) {
	if (parent.indeterminateChars + partial.length >= parent.maxIndeterminateChars) {
		return 0;
	}

	var ret = '';

	for (var i = 0; i < partial.length; i++) {
		ret += genEscapee(partial.charAt(i));
	}

	parent.indeterminateChars += partial.length;

	return ret;
};

module.exports = {
	gen: Gen_Escapee
};