let stronk = 'a1b c34d x567z';
let chi4 = stronk.match(/\d+/g);
console.log(chi4);
let sum = 0;
for (let elem4 of chi4) {
	elem4 = parseInt(elem4);
	sum = sum + elem4;}
console.log(sum);