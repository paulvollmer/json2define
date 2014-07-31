var assert = require('assert');
var json2define = require('../lib');


describe('lib/index.js', function() {

  describe('setRoot()', function() {
    it('should return the root string.', function() {
      var j2d = new json2define();
      j2d.setRoot('foo')
      assert.deepEqual('foo', j2d.root);
    });
  });

  describe('getDefineString()', function() {
    it('should return the #define code', function() {
      var j2d = new json2define();
      assert.equal('#define TEST "123"', j2d.getDefineString('test', '123'));
    });
  });
});
