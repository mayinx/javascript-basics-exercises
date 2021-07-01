const input = Number(prompt("Gimme a number, OR ELSE"));
let summation = 0;

if (input < 0) {
  alert("Get outtahere, bro! Just positive values are permitted!");
} else {
  for (let i = 0; i <= input; i++) {
    summation += i;
  }

  alert(
    "Hoi, bro -  Sum of digits in numbers from 0 to the given number '" +
      input +
      "' is '" +
      summation +
      "'"
  );
}
