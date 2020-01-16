var assert = require("chai").assert;
var Bowling = require("../src/bowling");

describe("Bowling", function() {
  it("should be a fonction", function() {
    assert.isFunction(Bowling);
  });

  it("Should instanciate our game Bowling", function() {
    var bowling = new Bowling();
    assert.isObject(bowling);
  });

  it("Should have 10 quilles", function() {
    var bowling = new Bowling();
    assert.equal(bowling.quilles, 10);
  });

  it("Should return number of quille which stay", function() {
    var bowling = new Bowling();
    assert.equal(bowling.roll(3), 7);
  });

  it("should have 10 frames", function() {
    var bowling = new Bowling();
    assert.equal(bowling.frame, 10);
  });

  it("should have 2 rolls", function() {
    var bowling = new Bowling();
    assert.equal(bowling.rolls, 2);
  });

  it("should have 1 roll when roll is call", function() {
    var bowling = new Bowling();
    bowling.roll(4);
    assert.equal(bowling.rolls, 1);
  });

  it("Should have score begin at 0", function() {
    var bowling = new Bowling();
    assert.equal(bowling.score, 0);
  });

  it("should have score incrementé with fall quilles", function() {
    var bowling = new Bowling();
    bowling.roll(4);
    assert.equal(bowling.score, 4);
  });

  it("Should increase strike if 10 fall quilles ", function() {
    var bowling = new Bowling();
    bowling.roll(10);
    assert.equal(bowling.strike, 1);
  });
});
