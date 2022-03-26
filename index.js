function randomNumber(precision) {
  return Math.floor(Math.random() * precision);
}

module.exports = (req, res) => {
  // odd = heads, even = tails
  const coin = randomNumber(100000) % 2 ? "heads" : "tails";
  return {
    data: coin,
  };
};
