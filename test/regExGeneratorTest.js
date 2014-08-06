var assert = require('assert');
var RegExGenerator = require('../RegExGenerator');
var i = 0;

describe('RegExGenerator', function() {
	['bazooka', 'halfwit', 'something', 'partial', 'node.js', 'yay', 'to', 'test', 'the framework', 'four score years ago'].forEach(function(word) {
		for (i = 0.1; i < 0.9; i += 0.1) {
			describe('generate("' + word + '",' + i + ')', function() {
				var regExp = new RegExGenerator().generate(word, i);
				var j = i;
				it(regExp.toString() + ' should matche "' + word + '"', function() {
					console.log(Math.round(j * 10) + ': ' + regExp.toString());
					assert.equal(regExp.test(word), true);
				})
			});
		}
	});
});