let lista: Array<Object> = [
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
