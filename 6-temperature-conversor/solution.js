alert(
  "WELCOME\n...to this fancy and sophisticated temperature converter!\nYaaha - you heard that right: It converts the entered temperature value from one temperature measurement unit to another! Woah! Like Fahrenheit to Celsius and vice versa! So: Buckle up!"
);

while (true) {
  let tempUnit = prompt(
    "1. SELECT CURRENT TEMPERATUR MEASUREMENT UNIT\nPlease be so kind to select a valid unit of temperature measurement by entering either 'f' for Fahrenheit or 'c' for Celsius"
  );

  if (tempUnit == null) {
    break;
  } else {
    tempUnit = tempUnit.toLowerCase();
  }

  if (tempUnit != "c" && tempUnit != "f") {
    continue;
  }

  let tempValue = Number(
    prompt(
      "2. ENTER TEMPERATUR\nNow would you please be so kind to enter a temperature value? Yeah? Great!\n\nBUT (there's ALWAYS a 'but'):\nBe sure to use a point for decimals - not a crazy 'Mainland-Europe-Comma' or other experimental stuff from the mainland..."
    )
  );

  if (isNaN(tempValue)) {
    alert("The value you entered is not a valid number - bye bye!");
    break;
  }

  alert(
    `CONVERSION RESULT\n ${tempValue}°${tempUnit.toUpperCase()} ==  ${convertTemperature(
      tempUnit,
      tempValue
    )}°${(tempUnit === "c" ? "f" : "c").toUpperCase()}`
  );
}

// performs the conversion
function convertTemperature(fromUnit, tenpValue) {
  let result;

  switch (fromUnit) {
    case "f": // to C
      result = Math.round((tenpValue - 32) * 0.5556);
      break;
    case "c": // to F
      result = Math.round(tenpValue * 1.8 + 32);
      break;
    default:
      result =
        "[ARGUMENT ERROR in 'convertTemperature': INVALID MEASUREMENT UNIT '${fromUnit}']";
      break;
  }

  return result;
}
