console.log("hello world");

for (let i = 0; i < 10; i++) {
  console.log("check variable", i);
  if (i === 5) {
    console.log("5 la thoat vong lap");
    break;
  }
}

// switch case
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

console.log("result:", day);
