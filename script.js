const totalVogalsInString = (string) => {
    const map = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    };
    const stringArray = string.split('');
    stringArray.forEach((char) => {
        if (map[char] !== undefined) {
            map[char] += 1;
        }
    });
    return map;
}

const string = 'aeiou';
const result = totalVogalsInString(string);

console.log(result);