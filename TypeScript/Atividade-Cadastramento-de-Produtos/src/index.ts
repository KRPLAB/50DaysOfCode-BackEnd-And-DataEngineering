import { IProduct } from "./interfaces";

const productList: IProduct[] = [];



function registerProduct(newProduct: IProduct): { product?: IProduct, message: string } {
    productList.push(newProduct);

    const foundProduct = productList.find(product => product.id === newProduct.id);

    if (foundProduct) {
        return {
            product: newProduct,
            message: "Produto cadastrado com sucesso!"
        };
    } else {
        return {
            message: "Erro ao cadastrar o produto."
        };
    }
}

function getProducts(): void {
    productList.forEach((actualProduct) => {
        console.log(actualProduct);
    })
}

const productsToAdd: IProduct[] = [
    { id: 1, name: "Produto 1", price: 10.00 },
    { id: 2, name: "Produto 2", price: 20.00 },
    { id: 3, name: "Produto 3", price: 30.00 },
    { id: 4, name: "Produto 4", price: 40.00 },
    { id: 5, name: "Produto 5", price: 50.00 },
    { id: 6, name: "Produto 6", price: 60.00 },
    { id: 7, name: "Produto 7", price: 70.00 },
    { id: 8, name: "Produto 8", price: 80.00 },
    { id: 9, name: "Produto 9", price: 90.00 },
    { id: 10, name: "Produto 10", price: 100.00 },
];

productsToAdd.forEach(product => {
    const result = registerProduct(product);
    console.log(result.message);
});

console.log("Lista de produtos")
getProducts();