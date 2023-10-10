const totalVogalsInString = (string: string): {
    word: string,
    vocalsCount: { [key: string]: number},
    usage: string
} => {
    const map: { [key: string]: number} = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    };

    const usage: (string | 0)[] = [
        'eat',
        'drink',
        'use',
        0,
    ];

    const stringArray: string[] = string.split('');

    stringArray.forEach((char) => {
        if (map[char] !== undefined) {
            map[char] += 1;
        }
    });

    const funcData = {
        word: string,
        vocalsCount: map,
        usage: ''
    };

    const rand = Math.floor(Math.random() * usage.length);
    
    if (rand === 3 || usage[rand] === 0) {
        funcData['usage'] = 'Nothing to do with it';
    } else {
        funcData['usage'] = `You can ${usage[rand]} it`; 
    }
    return funcData;
}

const buttonHandler = () => {
    const button = document.querySelector('button');
    const input: HTMLInputElement | null = document.querySelector('input');
    let { value }: any = input ?? "";
    
    if (value === '') {
        alert('Please enter a word');
        return;
    }
    
    const result = totalVogalsInString(input?.value ?? '');
    button?.addEventListener('click', (event) => {
        event.preventDefault();
    });

    if (input !== null) {
        input.value = '';
    }

    const card = document.getElementById('cardContainer');
    const resultDiv = document.querySelector('.result-off');
    if (resultDiv !== null) {
        resultDiv.className = 'result-on';
    }
    if (card !== null) {
        card.className = 'card';
    }

    const { word, vocalsCount, usage } = result;

    const cardContent = `
        <h3>${word}</h3>
        <p>${usage}</p>
        <p>Vocals</p>
        <div id="vocalsCard">
            <div id="vocalCard">
                A
                <hr>
                <div>${vocalsCount.a}</div>
            </div>
            <div id="vocalCard">
                E
                <hr>
                <div>${vocalsCount.e}</div>
            </div>
            <div id="vocalCard">
                I
                <hr>
                <div>${vocalsCount.i}</div>
            </div>
            <div id="vocalCard">
                O
                <hr>
                <div>${vocalsCount.o}</div>
            </div>
            <div id="vocalCard">
                U
                <hr>
                <div>${vocalsCount.u}</div>
            </div>
        </div>
    `;

    const containerDiv = document.querySelector('.container');
    if (containerDiv !== null) {
        if (containerDiv.childNodes.length === 7) {
            if (card !== null) {
                card.innerHTML = cardContent;
                containerDiv.appendChild(card);
            }    
        } else {
            if (card !== null && containerDiv.lastChild !== null) {
                containerDiv.removeChild(containerDiv.lastChild);
                card.innerHTML = cardContent;
                containerDiv.appendChild(card);
            }
        }
    }
}

// Adding pr to the developer branch