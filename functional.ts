import lista from "./database";
import IUser from "./interface";

let thisLista = lista;
// a) Crie uma função que retorne a bio do id passado
function getBio(id: number): string {
    const item = thisLista.find((item: IUser) => item.id === id);
    return item ? item.bio : "Não existe um usuário com este id";
}

//b) Crie uma função que retorne o name do id passado
function getName(id:number): string {
    const item = thisLista.find((item: IUser) => item.id === id);
    return item ? item.name : "Não existe um usuário com este id";
}

// c) Crie uma função que apague um item da lista a partir de um id passado
function deleteItem(id: number): void {
    const newList = thisLista.filter((item: IUser) => item.id !== id);
    if (newList !== thisLista) thisLista = newList
}

// d) Crie uma função que altere a bio ou o name a partir de um id passado
function patchItem(id: number, name: string, bio: string): string | null {
    const user = {id, name, bio};
    if (id !== undefined  && id >=0 && id < thisLista.length && name !== "" && bio !== "") {
        thisLista[id-1] = user;
        return null
    }
    return "Alguns parametros são obrigatórios"
}
