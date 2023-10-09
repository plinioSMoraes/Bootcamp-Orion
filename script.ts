import lista from "./database";

// a) Crie uma função que retorne a bio do id passado
function getBio(id: number): string {
    let bio: string = "";
    lista.forEach((item: any) => {
        if (item.id === id) {
            bio = item.bio;
        }
    })
    if (bio === "") {
        return "Não existe um usuário com este id";
    }
    return bio;
}

//b) Crie uma função que retorne o name do id passado
function getName(id:number): string {
    let name: string = "";
    lista.forEach((item: any) => {
        if (item.id === id) {
            name = item.name;
        }
    })
    if (name === "") {
        return "Não existe um usuário com este id";
    }
    return name;
}

// c) Crie uma função que apague um item da lista a partir de um id passado
function deleteItem(id: number): void {
    const size:number = lista.length;
    lista.forEach((item: any) => {
        if (item.id === id) {
            lista.splice(lista.indexOf(item), 1);
        }
    })
    if (size === lista.length) {
        console.log("Não existe um usuário com este id");
    }
}

// d) Crie uma função que altere a bio ou o name a partir de um id passado
function patchItem(id: number, name: string, bio: string): void {
    const size:number = lista.length;
    if (name === "" && bio === "") {
        console.log("Os campos nome e bio não devem ser vazios");
        return;
    }
    if (lista[id] === undefined) {
        console.log("Não existe um usuário com este id");
        return;
    }
    lista.forEach((item: any) => {
        if (item.id === id) {
            item.name = name;
            item.bio = bio;
        }
    })
}

// e) Demonstre todas as funções com o paradigma funcional e com o imperativo
// Todas funções foram feitas seguindo a lógica funcional, pois não há alteração 
// de variáveis fora do escopo da função, e não há alteração de variáveis globais a não ser o bd
// que é apenas um array de teste.