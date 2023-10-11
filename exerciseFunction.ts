var countVowels = function (string: string) {
    if (string === undefined) {
        return -1;
    }
    const vowels: string = string.match(/[aeiouáéíóúãẽĩõũAEIOUÁÉÍÓÚÃẼĨÕŨ]/g)?.join('') ?? '';
    var splitedArr: string[] = vowels.split('').filter(function (char) { return char !== ' '; });
    var vowelsCount = {};
    splitedArr.forEach(function (char: string) {
        if (vowelsCount[char] === undefined) {
            vowelsCount[char] = 1;
        }
        else {
            vowelsCount[char] += 1;
        }
    });
    return vowelsCount;
};


const totalVowelsInString = (string: string): {
    word: string,
    vowelsCount: { [key: string]: number},
    usage: string
} => {
    const map: { [key: string]: number} = countVowels(string);
    const usage: (string | 0)[] = [
        'eat',
        'drink',
        'use',
        0,
    ];

    const funcData = {
        word: string,
        vowelsCount: map,
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
    
    const result = totalVowelsInString(input?.value ?? '');
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

    const { word, vowelsCount, usage } = result;
    const cardContent = `
        <h3>${word}</h3>
        <p>${usage}</p>
        <p>Vowels</p>
        <div id="vowelsCard">
            ${Object.keys(vowelsCount).map((key) => {
                return `<div id="vowelCard">
                    ${key}
                    <div>${vowelsCount[key]}</div>
                </div>`
            }).join("")}
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
