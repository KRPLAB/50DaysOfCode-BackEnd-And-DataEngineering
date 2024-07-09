/*A proposta desta atividade é colocar em prática todos os conceitos básicos aprendidos sobre Typescript 
até agora, criando um CRUD simplificado, para gerenciar uma lista nomes.*/

const nameList: string[] = [];

const addName = (name: string): void => {
    nameList.push(name);
};

const getNames = (): void => {
    nameList.forEach((actualName) => {
        console.log(actualName);
    })
};

const removeName = (index: number): void => {
    nameList.splice(index, 1);
};

const updateName = (index: number, name: string) => {
    nameList.splice(index, 1, name);
}

addName("Kauan");
addName("Otávio");
addName("Roberto");
removeName(1);
updateName(1, "Osvaldo");
getNames();