let str = 'aaa [2] bbb [3] ccc [12] ddd';
let dey = str.replace(/\d+/g, function(match) {
	return match*2; })
console.log(str);
console.log(dey);