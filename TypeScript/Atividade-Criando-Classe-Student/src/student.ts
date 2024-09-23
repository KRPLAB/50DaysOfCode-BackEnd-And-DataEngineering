export class Student {
    name: string;
    module: string;
    grade: number | null = null;

    constructor(name: string, module: string) {
        this.name = name;
        this.module = module;
    }

    sayHello() {
        console.log(`Olá, meu nome é ${this.name} e atualmente estou no módulo ${this.module}`);
    }

    setGrade(newGrade: number) {
        this.grade = newGrade;
    }

    getGrade() {
        console.log(`A nota do estudante ${this.name} é ${this.grade}`);
    }
}