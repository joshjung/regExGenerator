var shuffle = require('knuth-shuffle').knuthShuffle;

var Gen_OrRecurse = function() {
	return this;
};

Gen_OrRecurse.prototype.generate = function(parent, partial, depth) {
	if (depth > 0)
		return 0;

	// From 2 - 5 ORS depending on difficulty 
	var count = Math.ceil(parent.diff * 4) + 1,
		ors = [];

	for (var i = 0; i < count; i++) {
		ors.push(new parent.clone()._generate(partial, depth + 1));
	}

	shuffle(ors);

	// Eliminate duplicates
	ors = ors.filter(function(elem, pos, self) {
		return self.indexOf(elem) == pos;
	});

	return '(' + ors.join('|') + ')';
};

module.exports = {
	gen: Gen_OrRecurse
};