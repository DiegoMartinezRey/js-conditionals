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
  const av = (gradeA + gradeB + gradeC) / 3;
  console.log("Media es: " + av);
  if (av < 5) {
    console.log("suspenso");
  }
  if (av >= 5 && av < 8) {
    console.log("Aprobado");
  }
  if (av >= 8) {
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

function threeDigits(num) {
  if (num > 99 && num < 1000) {
    console.log("Tiene 3 digitos");
  } else {
    console.log("No tiene 3 digitos");
  }
}

threeDigits(321);

function numberDivisible(num1, num2) {
  if (num2 % num1 === 0) {
    console.log("El numero " + num1 + " es multiplo por " + num2);
  } else {
    console.log("El numero " + num1 + " NO es multiplo por " + num2);
  }
}

numberDivisible(2, 6);

function doubleNumber(num1, num2) {
  if (num2 === num1 * 2) {
    console.log("El numero es el doble");
  } else {
    console.log("El numero NO es el doble");
  }
}

doubleNumber(3, 6);

function sortNumber(num1, num2, num3) {
  if (num1 > num2 && num2 > num3) {
    console.log(num1, num2, num3);
  } else if (num1 > num3 && num3 > num2) {
    console.log(num1, num3, num2);
  } else if (num2 > num1 && num1 > num3) {
    console.log(num2, num1, num3);
  } else if (num2 > num3 && num3 > num1) {
    console.log(num2, num3, num1);
  } else if (num3 > num1 && num1 > num2) {
    console.log(num3, num1, num2);
  } else {
    console.log(num3, num2, num1);
  }
}

sortNumber(15, 540, 112);
