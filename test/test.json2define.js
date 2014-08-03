var assert = require('assert');
var exec = require('child_process').exec;
var pkg = require('../package.json');

var json2defineCmd = 'node bin/json2define ';


describe('bin/json2define', function() {

  describe('help', function() {
    it('test --help option', function(done) {
      exec(json2defineCmd+'--help', function (error, stdout, stderr) {
        if (error) {
          assert.ok(false);
        } else {
          assert.ok(true);
        }
        done();
      });
    });
  });

  describe('version', function() {
    it('test --version option', function(done) {
      exec(json2defineCmd+'--version', function (error, stdout, stderr) {
        if (error) {
          assert.ok(false);
        } else {
          assert.deepEqual(pkg.version+'\n', stdout);
        }
        done();
      });
    });
  });

  describe('input', function() {
    it('test --input option', function(done) {
      exec(json2defineCmd+'--input test/samples/sample.json', function (error, stdout, stderr) {
        if (error) {
          assert.ok(false);
        } else {
          assert.ok(true);
        }
        done();
      });
    });
  });

});
