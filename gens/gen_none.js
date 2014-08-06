var Gen_None = function() {
	return this;
};

Gen_None.prototype.generate = function(parent, partial, depth) {
	return partial;
};

module.exports = {
	gen: Gen_None
};