// POO
// class - encapsulamento/agrupamento de métodos 

class Person {
    name: string = "Kauan";

    presentation(message: string) {
        console.log(message);
    }
}

const person = new Person();

console.log(person.name);
person.presentation("Olá pessoal, me chamo Kauan!");
