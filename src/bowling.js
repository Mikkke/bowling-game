class Bowling {
  constructor() {
    this.quilles = 10;
    this.frame = 10;
    this.rolls = 2;
    this.score = 0;
    this.strike = 0;
  }

  roll(fallQuille) {
    this.rolls -= 1;
    if (fallQuille === 10) {
      this.strike += 1;
    }
    this.score += fallQuille;
    return this.quilles - fallQuille;
  }
}

module.exports = Bowling;
