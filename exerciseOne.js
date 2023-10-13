const countVowels = (wordsToCount) => {
    var _a, _b;
    if (wordsToCount === undefined) {
        return {};
    }
    const vowels = (_b = (_a = wordsToCount.match(/[aeiouáéíóúãẽĩõũAEIOUÁÉÍÓÚÃẼĨÕŨ]/g)) === null || _a === void 0 ? void 0 : _a.join('')) !== null && _b !== void 0 ? _b : '';
    const splitedArr = vowels.split('').filter(function (char) { return char !== ' '; });
    const vowelsCount = {};
    splitedArr.forEach(function (char) {
        if (vowelsCount[char] === undefined) {
            vowelsCount[char] = 1;
        }
        else {
            vowelsCount[char] += 1;
        }
    });
    return vowelsCount;
};
const totalVowelsInString = (wordsToCount) => {
    const map = countVowels(wordsToCount);
    const usage = [
        'eat',
        'drink',
        'use',
        '0',
    ];
    const funcData = {
        word: wordsToCount,
        vowelsCount: map,
        usage: ''
    };
    const rand = Math.floor(Math.random() * usage.length);
    if (rand === 3 || usage[rand] === '0') {
        funcData['usage'] = 'Nothing to do with it';
    }
    else {
        funcData['usage'] = `You can ${usage[rand]} it`;
    }
    return funcData;
};
const buttonHandler = () => {
    var _a, _b;
    const button = document.querySelector('button');
    const input = document.querySelector('input');
    let value = (_a = input === null || input === void 0 ? void 0 : input.value) !== null && _a !== void 0 ? _a : "";
    if (value === '') {
        alert('Please enter a word');
        return;
    }
    const result = totalVowelsInString((_b = input === null || input === void 0 ? void 0 : input.value) !== null && _b !== void 0 ? _b : '');
    button === null || button === void 0 ? void 0 : button.addEventListener('click', (event) => {
        event.preventDefault();
    });
    if (input !== null) {
        input.value = '';
    }
    const card = document.querySelector('#cardContainer');
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
                </div>`;
    }).join("")}
        </div>
    `;
    const containerDiv = document.querySelector('.container');
    if (containerDiv !== null) {
        const cardAlreadyExists = 7;
        if (containerDiv.childNodes.length === cardAlreadyExists) {
            if (card !== null) {
                card.innerHTML = cardContent;
                containerDiv.appendChild(card);
            }
        }
        else {
            if (card !== null && containerDiv.lastChild !== null) {
                containerDiv.removeChild(containerDiv.lastChild);
                card.innerHTML = cardContent;
                containerDiv.appendChild(card);
            }
        }
    }
};
