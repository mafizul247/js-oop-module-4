const reversString = "hello word".split('').reverse().join('');
// console.log(reversString);

String.prototype.reverse = function() {
    return this.split('').reverse().join('');
}

const stringReves = "hello word".reverse();
console.log(stringReves);