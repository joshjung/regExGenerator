var Gen_Plus = function() {
	return this;
};

Gen_Plus.prototype.generate = function(parentGenerator, partial, depth) {
	return partial.length == 1 ? partial + '+' : '(' + partial + ')+';
};

module.exports = {
	gen: Gen_Plus
};