// POO
// class - encapsulamento/agrupamento de métodos 

class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    presentation(message: string) {
        console.log(message);
    }

    sayMyName() {
        console.log(`Me chamo ${this.name}`);
    }
}

const person1 = new Person("Kauan");

console.log(person1.name);
person1.presentation("Olá pessoal!");
person1.sayMyName();

const person2 = new Person("Osvaldo");

console.log(person2.name);
person2.presentation("Olá pessoal!");
person2.sayMyName();


