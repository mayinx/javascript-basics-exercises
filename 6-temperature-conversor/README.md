# Exercise 6: Temperature Conversor

Write a program that:

1. Asks the user to pick a temperature source type (celsius or fahrenheit)
2. Asks the user to give a temperature value to be converted to the other temeperature type
3. Shows the user a message with the result

## Requirements

- Valid Temperature types: `"c for celsius, f for fahrenheit"`
- If the user gives an invalid temperature type, ask again until it's valid
- The decimal separator must be `.`. Inform the user about it when asking it for the temperature value.
- If the number given by the user is not a valid number, finish and tell the user about it.

## Formula

- **Fahrenheit to Celsius:**

  - `tempCelsius = (tempFahrenheit - 32) * 0.5556`
  - E.g.:
    - `(50°F - 32) * .5556 = 10°C`

- **Celsius to Fahrenheit:**

  - `tempFahrenheit = (tempClesius * 1.8) + 32`
  - E.g.:
    - `(30°C * 1.8) + 32 = 86°F`

- So test your solution f.i. with
  - 50°F == 10°C
  - 30°C == 86°F

## Resources

- [MDN alert()](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)
- [MDN prompt()](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)
- [MDN if...else statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [MDN switch statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
- [MDN Converting String to Numbers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#convert_numeric_strings_and_null_to_numbers)
- [MDN String Concatenation with the + operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition#string_concatenation)
- [MDN String interpolation (Template literals)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [MDN While Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
