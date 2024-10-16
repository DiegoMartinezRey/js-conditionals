function isOlder(name, age) {
  if (age >= 18) {
    console.log("Hola " + name + ", eres mayor de edad");
  } else {
    console.log("Hola " + name + ", eres menor de edad");
  }
}

isOlder("Diego", 26);

function higherNumber(num1, num2) {
  if (num1 > num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
}

higherNumber(10, 20);

function signOfNumber(num) {
  if (num > 0) {
    console.log("Numero positivo");
  } else if (num < 0) {
    console.log("Numero negativo");
  } else {
    console.log("Es cero");
  }
}

signOfNumber(10);

function gradesCalification(gradeA, gradeB, gradeC) {
  const media = (gradeA + gradeB + gradeC) / 3;
  console.log("Media es: " + media);
  if (media < 5) {
    console.log("suspenso");
  }
  if (media >= 5 && media < 8) {
    console.log("Aprobado");
  }
  if (media >= 8) {
    console.log("Matrícula de honor");
  }
}
gradesCalification(6, 8, 10);

function bestOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log("Mayor: " + num1);
  } else if (num2 > num1 && num2 > num3) {
    console.log("Mayor: " + num2);
  } else {
    console.log("Mayor: " + num3);
  }
}

bestOfThree(10, 121, 1);

function divisibleNumber(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    console.log("Es divisible por 3 y por 5");
  } else if (num % 3 == 0) {
    console.log("Es divisible por 3");
  } else if (num % 5 == 0) {
    console.log("Es divisible por 5");
  } else {
    console.log(num + " No es divisible ni por 3 ni por 5");
  }
}

divisibleNumber(15);

function oddOrEven(num) {
  if (num % 2 === 0) {
    console.log("Es un numero par");
  } else {
    console.log("Es un numero impar");
  }
}

oddOrEven(9);

function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Es un año bisiesto");
  } else {
    console.log("No es un año bisiesto");
  }
}

leapYear(1992);
