var countVowels = function (string) {
    var _a, _b;
    if (string === undefined) {
        return -1;
    }
    var vowels = (_b = (_a = string.match(/[aeiouáéíóúãẽĩõũAEIOUÁÉÍÓÚÃẼĨÕŨ]/g)) === null || _a === void 0 ? void 0 : _a.join('')) !== null && _b !== void 0 ? _b : '';
    var splitedArr = vowels.split('').filter(function (char) { return char !== ' '; });
    var vowelsCount = {};
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
var totalVowelsInString = function (string) {
    var map = countVowels(string);
    var usage = [
        'eat',
        'drink',
        'use',
        0,
    ];
    var funcData = {
        word: string,
        vowelsCount: map,
        usage: ''
    };
    var rand = Math.floor(Math.random() * usage.length);
    if (rand === 3 || usage[rand] === 0) {
        funcData['usage'] = 'Nothing to do with it';
    }
    else {
        funcData['usage'] = "You can ".concat(usage[rand], " it");
    }
    return funcData;
};
var buttonHandler = function () {
    var _a;
    var button = document.querySelector('button');
    var input = document.querySelector('input');
    var value = (input !== null && input !== void 0 ? input : "").value;
    if (value === '') {
        alert('Please enter a word');
        return;
    }
    var result = totalVowelsInString((_a = input === null || input === void 0 ? void 0 : input.value) !== null && _a !== void 0 ? _a : '');
    button === null || button === void 0 ? void 0 : button.addEventListener('click', function (event) {
        event.preventDefault();
    });
    if (input !== null) {
        input.value = '';
    }
    var card = document.getElementById('cardContainer');
    var resultDiv = document.querySelector('.result-off');
    if (resultDiv !== null) {
        resultDiv.className = 'result-on';
    }
    if (card !== null) {
        card.className = 'card';
    }
    var word = result.word, vowelsCount = result.vowelsCount, usage = result.usage;
    var cardContent = "\n        <h3>".concat(word, "</h3>\n        <p>").concat(usage, "</p>\n        <p>Vowels</p>\n        <div id=\"vowelsCard\">\n            ").concat(Object.keys(vowelsCount).map(function (key) {
        return "<div id=\"vowelCard\">\n                    ".concat(key, "\n                    <div>").concat(vowelsCount[key], "</div>\n                </div>");
    }).join(""), "\n        </div>\n    ");
    var containerDiv = document.querySelector('.container');
    if (containerDiv !== null) {
        if (containerDiv.childNodes.length === 7) {
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
