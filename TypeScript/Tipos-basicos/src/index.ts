// Boolean: Representa valores verdadeiros e falsos
let isDone: boolean = true;

// Number: Representa números, sejam inteiros ou de ponto flutuante
const age: number = 25;
let price: number = 2.54;


// String: Representa sequências de caracteres (texto)
let color: string = "blue";
const nome: string = "João";

// Array: Representa uma coleção de elementos de um mesmo tipo
let numberlist: number[] = [1, 2, 3];
let stringList: string[] = ["João", "Kauan", "Rafael"]
let list2: Array<number> = [1, 2, 3];

// Tuple: Representa um array com um número fixo de elementos de tipos conhecidos
let x: [string, number];
x = ["hello", 10]; // OK
// x = [10, "hello"]; // Error

// Enum: Permite nomear um conjunto de valores numéricos
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

// Any: Desativa a verificação de tipo para uma variável
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // OK

// Tipagem em funções
function sum(a: number, b: number): number {
    return a + b
}

// Void: Representa a ausência de um valor (usado em funções que não retornam valor)
function warnUser(): void {
    console.log("This is my warning message");
}

// Null e Undefined: Representam valores não atribuídos
let u: undefined = undefined;
let n: null = null;

// Never: Representa o tipo de valores que nunca ocorrem (ex. funções que lançam exceções)
function error(message: string): never {
    throw new Error(message);
}

// Object: Representa qualquer valor que não seja um tipo primitivo
declare function create(o: object | null): void;
create({ prop: 0 }); // OK
create(null); // OK
// create(42); // Error
// create("string"); // Error
