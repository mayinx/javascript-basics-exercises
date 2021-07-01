alert("Hoi bro!");
const visitorName = prompt("Gimme me your name - OR ELSE");
let visitorYob =
  Number(prompt("Gimme me your year of birth - OR ELSE", "2021")) || 2021;
const visitorAge = new Date().getFullYear() - visitorYob;

if (visitorAge <= 10) {
  alert(
    "You are too young for this '" +
      visitorName +
      "'. Come back when you are older."
  );
} else if (visitorAge > 10 && visitorAge < 18) {
  if (
    confirm(
      "Please confirm:\nSelect the 'OK'-button if there's an adult with you right now - otherwise select 'Cancel'!"
    )
  ) {
    alert(
      "Welcome to my super website '" +
        visitorName +
        "'. Good that you are not alone here!"
    );
  } else {
    alert(
      "You are too young for this '" +
        visitorName +
        "'. You need an adult next to you to continue."
    );
  }
} else {
  if (visitorAge === 21) {
    alert(
      "Welcome to my super website '" + visitorName + "'. We are the same age!"
    );
  } else {
    alert("Welcome to my super website '" + visitorName + "'");
  }
}

// alert("Hello Dear " + visitorName + " your age is " + visitorAge);
