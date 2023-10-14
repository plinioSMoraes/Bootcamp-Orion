import { IUser } from "./interfaces/IUser";

const lista: IUser[] = [
    {
        "id": 1, 
        "name": "Ada Lovelace", 
        "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina",
    },
    {
        "id": 2, 
        "name": "Alan Turing", 
        "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial",
    },
    {
        "id": 3, 
        "name": "Nikola Tesla", 
        "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.",
    },
    {
        "id": 4, 
        "name": "Nicolau Copérnico", 
        "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.",
    },
];

let thisLista: IUser[] = lista;
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

// Funções para a página
function getAll(): IUser[] {
    return thisLista;
}

function createCards(): void {
    const list: IUser[] = getAll();
    const container: HTMLDivElement | null = document.querySelector(".users-container");
    if (container !== null) {
        list.forEach((item: IUser) => {
            const card: HTMLDivElement = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <div class="card-header">
                    <h2>${item.name}</h2>
                    <button class="delete" id="${item.id}">X</button>
                </div>
                <div class="card-body">
                    <p>${item.bio}</p>
                </div>
            `;
            container.appendChild(card);
        });
    }
}

createCards();