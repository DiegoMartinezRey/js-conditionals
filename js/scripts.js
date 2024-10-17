function isOlder(name, age) {
  if (age >= 18) {
    return "Hola " + name + ", eres mayor de edad";
  } else {
    return "Hola " + name + ", eres menor de edad";
  }
}

const js1 = isOlder("Diego", 26);
console.log(js1);

function higherNumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

const js2 = higherNumber(10, 20);
console.log(js2);

function signOfNumber(num) {
  if (num > 0) {
    return "Numero positivo";
  } else if (num < 0) {
    return "Numero negativo";
  } else {
    return "Es cero";
  }
}

const js3 = signOfNumber(10);
console.log(js3);

function gradesCalification(gradeA, gradeB, gradeC) {
  const av = (gradeA + gradeB + gradeC) / 3;
  if (av < 5) {
    return "suspenso";
  }
  if (av >= 5 && av < 8) {
    return "Aprobado";
  }
  if (av >= 8) {
    return "Matrícula de honor";
  }
}

const js4 = gradesCalification(6, 2, 10);
console.log(js4);

function bestOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return "Mayor: " + num1;
  } else if (num2 > num1 && num2 > num3) {
    return "Mayor: " + num2;
  } else {
    return "Mayor: " + num3;
  }
}

const js5 = bestOfThree(10, 121, 1);
console.log(js5);

function divisibleNumber(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    return "Es divisible por 3 y por 5";
  } else if (num % 3 == 0) {
    return "Es divisible por 3";
  } else if (num % 5 == 0) {
    return "Es divisible por 5";
  } else {
    return num + " No es divisible ni por 3 ni por 5";
  }
}

const js6 = divisibleNumber(15);
console.log(js6);

function oddOrEven(num) {
  if (num % 2 === 0) {
    return "Es un numero par";
  } else {
    return "Es un numero impar";
  }
}

const js7 = oddOrEven(9);
console.log(js7);

function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "Es un año bisiesto";
  } else {
    return "No es un año bisiesto";
  }
}

const js8 = leapYear(1992);
console.log(js8);

function threeDigits(num) {
  if (num > 99 && num < 1000) {
    return "Tiene 3 digitos";
  } else {
    return "No tiene 3 digitos";
  }
}

const js9 = threeDigits(321);
console.log(js9);

function numberDivisible(num1, num2) {
  if (num2 % num1 === 0) {
    return "El numero " + num1 + " es multiplo por " + num2;
  } else {
    return "El numero " + num1 + " NO es multiplo por " + num2;
  }
}

const js10 = numberDivisible(2, 6);
console.log(js10);

function doubleNumber(num1, num2) {
  if (num2 === num1 * 2) {
    return "El numero es el doble";
  } else {
    return "El numero NO es el doble";
  }
}

const js11 = doubleNumber(3, 6);
console.log(js11);

function sortNumber(num1, num2, num3) {
  if (num1 > num2 && num2 > num3) {
    return num1 + " " + num2 + " " + num3;
  } else if (num1 > num3 && num3 > num2) {
    return num1 + " " + num3 + " " + num2;
  } else if (num2 > num1 && num1 > num3) {
    return num2 + " " + num1 + " " + num3;
  } else if (num2 > num3 && num3 > num1) {
    return num2 + " " + num3 + " " + num1;
  } else if (num3 > num1 && num1 > num2) {
    return num3 + " " + num1 + " " + num2;
  } else {
    return num3 + " " + num2 + " " + num1;
  }
}

const js12 = sortNumber(15, 540, 112);
console.log(js12);
