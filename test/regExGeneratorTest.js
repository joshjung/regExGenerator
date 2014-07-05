var assert = require('assert');
var RegExGenerator = require('../index.js');

describe('RegExGenerator', function() {
	['this', 'is', 'a', 'bunch', 'of', 'words', 'to', 'test', 'the framework'].forEach(function(word) {
		for (var i = 0; i < 1; i += 0.1) {
			describe('generate("' + word + '", 1)', function() {
				it('should return a regular expression that matches "' + word + '"', function() {
					var regExp = new RegExGenerator().generate(word, 1);
					console.log(regExp.toString());
					assert.equal(regExp.test(word), true);
				})
			});
		}
	});
});