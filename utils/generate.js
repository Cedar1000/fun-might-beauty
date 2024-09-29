const generateRandom5DigitNumber = () => {
  // Generate a random number between 10000 and 99999, inclusive.
  var randomNumber = Math.floor(Math.random() * 90000) + 10000;

  // Return the random number as a number.
  return randomNumber;
};

export default generateRandom5DigitNumber;
