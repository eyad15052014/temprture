function Converter() {
  const temperture = parseFloat(document.getElementById("Temperature").value);
  const unit = document.getElementById("unit").value;
  const result = document.getElementById("result");
  if (isNaN(temperture)) {
    result.textContent = "Please enter a valid temperature.";
    return;
  }
  let ConvertedTemp;
  let ConvertedUnit;
  if (unit === "celsius") {
    ConvertedTemp = (temperture * 9) / 5 + 32;
    ConvertedUnit = "fahrenheit";
  } else {
    ConvertedTemp = ((temperture - 32) * 5) / 9;
    ConvertedUnit = "celsius";
  }
  result.textContent = `Temperature Converter: ${temperture.toFixed(2)}° ${ConvertedUnit}`
}
