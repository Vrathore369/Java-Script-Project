const btnElement = document.getElementById('new-color-button');
const currentcolorElement = document.getElementById('current-Color');

// Create array for hex color
const hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

// Get random hex value
function getRandomHexValue() {
  const randomIndexPosition = Math.floor(Math.random() * hexValues.length);
  const randomHexValue = hexValues[randomIndexPosition];
  return randomHexValue;
}

// Get random hex string
function getRandomHexString(stringLength) {
  let hexString = '';
  for (let i = 0; i < stringLength; i++) {
    hexString += getRandomHexValue();
  }
  return hexString;
}

// Add event listener
btnElement.addEventListener('click', function() {
  const randomHexString = '#' + getRandomHexString(6);
  let randoHexString; // Declare the variable here
  randoHexString = randomHexString;

  document.body.style.setProperty('background-color', randoHexString);
  currentcolorElement.textContent = randomHexString;
});
