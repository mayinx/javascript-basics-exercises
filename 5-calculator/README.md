# Exercise 5: Calculator

Write a program that ask the user which operator they want to do and the operands they want to use, and then computes the result.
The program should keep asking for new operators until the user cancel the question about the operation, or types "exit" when asked about which operator to use.

## Requirements

- Valid Operators: +, -, \*, / and %
- Finish condition: user typed `exit` or cancelled the prompt

## Example flow of the program

1. Ask user to choose between operators. Example:

```js
"Which operation do you want to do? Type one of these: +, -, *, / or type exit to leave. You can also leave by cancelling the prompt"`
```

2. If the user typed `exit` or the user cancelled the prompt, then finish.

3. If user has choosen a valid operator, ask for the operands `operand1` and `operand2`.

4. Execute operation using the operator and the operands, and show it to the user

5. Start again with step 1

## Resources

- [MDN alert()](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)
- [MDN prompt()](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)
- [MDN if...else statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [MDN switch statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
- [MDN Converting String to Numbers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#convert_numeric_strings_and_null_to_numbers)
- [MDN String Concatenation with the + operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition#string_concatenation)
- [MDN String interpolation (Template literals)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [MDN While Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
