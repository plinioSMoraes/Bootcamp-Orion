import lista from './database';
import IUser from './interface';

let thisLista = lista;

// a) Crie uma função que retorne a bio do id passado
function getBio(id: number): string {
    const listSize: number = lista.length;
    for (let i = 0; i < listSize;  i++ ) {
        const item = lista[i];
        if (item['id'] === id) {
            const bio: string = item['bio'];
            return bio;
        }
    }
    return 'Não foi encontrado o usuário';
}

// b) Crie uma função que retorne o name do id passado
function getName(id: number): string {
    const listSize = thisLista.length;
    for (let i:number = 0; i < listSize; i++ ){
        let user: IUser = thisLista[id];
        if (user.id === id) {
            const name = user.name;
            return name
        } 
    }
    return "Nao foi encontrada o usuário";
}

// c) Crie uma função que apague um item da lista a partir de um id passado
function deleteItem(id: number): void {
    const listSize = thisLista.length;
    const newArr: IUser[] = [];
    for (let i:number = 0; i < listSize; i++) {
        if (thisLista[i].id !== id) {
            newArr.push(thisLista[i])
        }
    }
    if (thisLista !== newArr) {
        thisLista = newArr
    }
}

// d) Crie uma função que altere a bio ou o name a partir de um id passado
function patchItem(bio: string, name: string, id: number): string | null {
    if (id < 1 || id === undefined || bio === "" || name === "") {
        return "Alguns parametros estão faltando ou estão errados";
    }
    let item: IUser = {id, bio, name};
    let listSize: number = thisLista.length
    for (let i: number = 0; i < listSize; i++) {
        if (thisLista[i].id === id) {
            thisLista[i] = item;
        }
    }
    return null;
}
