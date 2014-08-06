var Gen_None = function() {
	return this;
};

Gen_None.prototype.generate = function(parentGenerator, partial, depth) {
	return partial;
};

module.exports = {
	gen: Gen_None
};