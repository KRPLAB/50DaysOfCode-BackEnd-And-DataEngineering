"use strict";
/*A proposta desta atividade é colocar em prática todos os conceitos básicos aprendidos sobre Typescript
até agora, criando um CRUD simplificado, para gerenciar uma lista nomes.*/
const nameList = [];
const addName = (name) => {
    nameList.push(name);
};
const getNames = () => {
    nameList.forEach((actualName) => {
        console.log(actualName);
    });
};
const removeName = (index) => {
    nameList.splice(index, 1);
};
const updateName = (index, name) => {
    nameList.splice(index, 1, name);
};
addName("Kauan");
addName("Otávio");
addName("Roberto");
removeName(1);
updateName(1, "Osvaldo");
getNames();
