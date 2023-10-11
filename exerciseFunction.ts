import IResults from "./interfaces/IResults";
import IVowelsMap from "./interfaces/IVowelsMap";

const countVowels = (wordsToCount: string): IVowelsMap => {
    if (wordsToCount === undefined) {
        return {};
    }
    const vowels: string = wordsToCount.match(/[aeiouáéíóúãẽĩõũAEIOUÁÉÍÓÚÃẼĨÕŨ]/g)?.join('') ?? '';
    const splitedArr: string[] = vowels.split('').filter(function (char) { return char !== ' '; });
    const vowelsCount: IVowelsMap = {};
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


const totalVowelsInString = (string: string): IResults => {
    const map: IVowelsMap = countVowels(string);
    const usage: string[] = [
        'eat',
        'drink',
        'use',
        '0',
    ];

    const funcData: IResults = {
        word: string,
        vowelsCount: map,
        usage: ''
    };

    const rand: number = Math.floor(Math.random() * usage.length);
    
    if (rand === 3 || usage[rand] === '0') {
        funcData['usage'] = 'Nothing to do with it';
    } else {
        funcData['usage'] = `You can ${usage[rand]} it`; 
    }
    return funcData;
}

const buttonHandler = () => {
    const button: HTMLButtonElement | null = document.querySelector('button');
    const input: HTMLInputElement | null = document.querySelector('input');
    let value: string = input?.value ?? "";
    
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

    const card: HTMLDivElement | null = document.querySelector('#cardContainer');
    const resultDiv: HTMLDivElement | null = document.querySelector('.result-off');
    if (resultDiv !== null) {
        resultDiv.className = 'result-on';
    }
    if (card !== null) {
        card.className = 'card';
    }

    const { word, vowelsCount, usage } = result;
    const cardContent: string= `
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

    const containerDiv: HTMLDialogElement | null = document.querySelector('.container');
    if (containerDiv !== null) {
        const cardAlreadyExists = 7;
        if (containerDiv.childNodes.length === cardAlreadyExists) {
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
