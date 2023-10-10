var totalVogalsInString = function (string) {
    var map = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    };
    var usage = [
        'eat',
        'drink',
        'use',
        0,
    ];
    var stringArray = string.split('');
    stringArray.forEach(function (char) {
        if (map[char] !== undefined) {
            map[char] += 1;
        }
    });
    var funcData = {
        word: string,
        vocalsCount: map,
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
    var result = totalVogalsInString((_a = input === null || input === void 0 ? void 0 : input.value) !== null && _a !== void 0 ? _a : '');
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
    var word = result.word, vocalsCount = result.vocalsCount, usage = result.usage;
    var cardContent = "\n        <h3>".concat(word, "</h3>\n        <p>").concat(usage, "</p>\n        <p>Vocals</p>\n        <div id=\"vocalsCard\">\n            <div id=\"vocalCard\">\n                A\n                <hr>\n                <div>").concat(vocalsCount.a, "</div>\n            </div>\n            <div id=\"vocalCard\">\n                E\n                <hr>\n                <div>").concat(vocalsCount.e, "</div>\n            </div>\n            <div id=\"vocalCard\">\n                I\n                <hr>\n                <div>").concat(vocalsCount.i, "</div>\n            </div>\n            <div id=\"vocalCard\">\n                O\n                <hr>\n                <div>").concat(vocalsCount.o, "</div>\n            </div>\n            <div id=\"vocalCard\">\n                U\n                <hr>\n                <div>").concat(vocalsCount.u, "</div>\n            </div>\n        </div>\n    ");
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
// Adding pr to the developer branch
