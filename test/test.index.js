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

  describe('getDefineCode()', function() {
    it('should return the #define code boolean', function() {
      var j2d = new json2define();
      assert.equal('#define BOOLEAN true', j2d.getDefineCode('boolean', true));
    });

    it('should return the #define code int/float', function() {
      var j2d = new json2define();
      assert.equal('#define INT 1', j2d.getDefineCode('int', 1));
    });

    it('should return the #define code char', function() {
      var j2d = new json2define();
      assert.equal('#define CHAR \'c\'', j2d.getDefineCode('char', 'c'));
    });

    it('should return the #define code string', function() {
      var j2d = new json2define();
      assert.equal('#define STRING "string"', j2d.getDefineCode('string', 'string'));
    });
  });

  describe('parseObject()', function() {
    it('key:value', function() {
      var j2d = new json2define();
      var data = {
        foo: 'bar'
      };
      var actual = j2d.parseObject(data);
      assert.equal('#define FOO "bar"\n', actual);
    });

    it('array', function() {
      var j2d = new json2define();
      var data = {
        testarray: [1, 2, 3]
      };
      var actual = j2d.parseObject(data);
      var expected = '#define TESTARRAY_0 1\n'+
                     '#define TESTARRAY_1 2\n'+
                     '#define TESTARRAY_2 3\n';
      assert.equal(expected, actual);
    });

    it('object', function() {
      var j2d = new json2define();
      var data = {
        testobject: {
          obj1: 1,
          obj2: 2,
        }
      };
      var actual = j2d.parseObject(data);
      var expected = '#define TESTOBJECT_OBJ1 1\n'+
                     '#define TESTOBJECT_OBJ2 2\n';
      assert.equal(expected, actual);
    });
  });

});
