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
      exec(json2defineCmd+'--input test/data/sample.json', function (error, stdout, stderr) {
        if (error) {
          assert.ok(false);
        } else {
          assert.ok(true);
        }
        done();
      });
    });

    it('test --input option with broken json', function(done) {
      exec(json2defineCmd+'--input test/data/broken.json', function (error, stdout, stderr) {
        if (error) {
          assert.ok(false);
        } else {
          assert.ok(true);
        }
        done();
      });
    });

    it('test --input option with broken filepath', function(done) {
      exec(json2defineCmd+'--input broken/filepath.json', function (error, stdout, stderr) {
        assert.deepEqual(error.code, 1);
        done();
      });
    });
  });

});
