// Union Type para uma variável que pode conter números ou strings
let myVariable: number | string;

myVariable = 42; // OK
myVariable = "hello"; // OK 
myVariable = true; // Erro de tipo: Type 'true' is not assignable to type 'number | string'