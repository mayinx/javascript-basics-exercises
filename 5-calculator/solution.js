const validOperations = ["+", "-", "*", "/", "%"];
const operatorObj = {
  "+": function (leftOp, rightOp) {
    return leftOp + rightOp;
  },
  "-": function (leftOp, rightOp) {
    return leftOp - rightOp;
  },
  "*": function (leftOp, rightOp) {
    return leftOp * rightOp;
  },
  "/": function (leftOp, rightOp) {
    return leftOp / rightOp;
  },
  "%": function (leftOp, rightOp) {
    return leftOp % rightOp;
  },
};

while (true) {
  let input = prompt(
    "CHOOSE OPERATON:\nWhich operation do you want to do? Type one of these: '+', '-', '*', '/', '%' or type 'exit' to leave. You can also leave by cancelling the prompt - or by just entering de nada and pressing enter..."
  );

  if (!input || input === "exit" || validOperations.indexOf(input) === -1) {
    // TODO: perhaps alert that guy about his mistake...
    break;
  }

  let operands = prompt(
    "CHOOSE OPERANDS:\nGimme two operands, separated by comma"
  ).split(",");

  let leftOp = Number(operands[0]);
  let rightOp = Number(operands[1]);

  let resultStr = `The result of ${leftOp} ${input} ${rightOp} is\n=> according to awesome but evil eval: ${evilCalculate(
    leftOp,
    rightOp,
    input
  )}\n=> and according to the brave but a bit verbose operators-object: ${operatorObj[
    input
  ](leftOp, rightOp)}`;

  // tell 'em
  alert(resultStr);
}

// Awesome: We can eval with JS too!
// But that's ... evil - so we could and should use another approach - e.g. via an operatorObj (see above)
function evilCalculate(leftOp, rightOp, operator) {
  return eval(leftOp + operator + rightOp);
}
