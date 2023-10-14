const lista = [
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
let thisLista = lista;
// a) Crie uma função que retorne a bio do id passado
function getBio(id) {
    const item = thisLista.find((item) => item.id === id);
    return item ? item.bio : "Não existe um usuário com este id";
}
//b) Crie uma função que retorne o name do id passado
function getName(id) {
    const item = thisLista.find((item) => item.id === id);
    return item ? item.name : "Não existe um usuário com este id";
}
// c) Crie uma função que apague um item da lista a partir de um id passado
function deleteItem(id) {
    const newList = thisLista.filter((item) => item.id !== id);
    if (newList !== thisLista)
        thisLista = newList;
}
// d) Crie uma função que altere a bio ou o name a partir de um id passado
function patchItem(id, name, bio) {
    const user = { id, name, bio };
    if (id !== undefined && id >= 0 && id < thisLista.length && name !== "" && bio !== "") {
        thisLista[id - 1] = user;
        return null;
    }
    return "Alguns parametros são obrigatórios";
}
// Funções para a página
function getAll() {
    return thisLista;
}
function createCards() {
    const list = getAll();
    const container = document.querySelector(".users-container");
    console.log(container)
    if (container !== null) {
        list.forEach((item) => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <div class="card-header">
                    <h2>${item.name}</h2>
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
