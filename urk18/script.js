// 18 - 2, 4, 6, 8, 10

let str1 = 'http://antod.com';
let res1 = /http:|https:/.test(str1);
console.log('Задание второе: ');
console.log(res1); 

/*
Условие задачи Определите, что ли заканчивается переданная строка расширением jpg или jpeg.
*/
let str2 = 'riba.png';
let res2 = /.png$|.jpg$|.jpeg$/.test(str2);
console.log('Задание четвёртое: ');
console.log(res2);

/*
использовать length нельзя, все писать в выражении
*/
let str3 = '20013203';
if (str3.length >= 1 && str3.length < 12) {
	let res3 = /\d/.test(str3);
	console.log('Задание шестое: ');
	console.log(res3); }
else
{
	console.log('Задание шестое: ');
	console.log('число выходит за границы допущенного'); }

let str4 = '01.09.2003';
let massdat = str4.split('.');
if (massdat[0].length == 2 && massdat[1].length == 2 && massdat[2].length == 4 && massdat[0] >= 1 && massdat[0] < 32 && massdat[1] >= 1 && massdat[1] < 12) { 
	let res4 = /\d.\d.\d/.test(str4);
	console.log('Задание восьмое: ');
	console.log(res4); }
else {
	console.log('Задание восьмое: ');
	console.log('неверный формат даты'); }

/*
выражение должно быть универсальным
*/
let str5 = 'faerr12@gmail.ru';
let res5 = /@gmail.com$|@bk.ru$|@rambler.ru$/.test(str5);
console.log('Задание десятое: ');
console.log(res5);
