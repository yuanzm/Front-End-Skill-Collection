//-----------------------------Code Snippet 1------------------------------
var array1 = [4, 8, 15, 16, 23, 42];
array1.sort();
// JavaScript的默认比较函数把要被排序的元素都视为字符串，所以比较这些数字的时候，会把它们转化成字符串，得到不符合预期的结果
// [15, 16, 23, 4, 42, 8]
console.log(array1);

//-----------------------------Code Snippet 2------------------------------
var array2 = [4, 8, 15, 16, 23, 42];
// 传递这个排序函数可以使得数值正确排序
array2.sort(function(a, b) {
	return a > b;
});
// [4, 8, 15, 16, 23, 42]
console.log(array2);

//-----------------------------Code Snippet 3------------------------------
var names = [
	{first: 'Joe', last: 'John'},
	{first: 'Joe', last: 'Besser'},
	{first: 'Moe', last: 'Howard'},
	{first: 'Joe', last: 'Derita'}
];

var by = function(name) {
	return function(o, p) {
		var a, b;
		if (typeof o === 'object' && typeof p === 'object' && o && p) {
			a = o[name];
			b = p[name];
			if (a === b) {
				return 0;
			}
			if (typeof a === typeof b) {
				return a < b ? -1: 1;
			}
			return typeof a < typeof b ? -1 : 1;
		} else {
			throw {
				name: 'Error',
				message: 'Exceptd an object when sorting by ' + name
			}
		}
	}
}

names.sort(by('first'));
// [
//  {first: 'Joe', last: 'John'},
// 	{first: 'Joe', last: 'Besser'},
// 	{first: 'Joe', last: 'Derita'},
// 	{first: 'Moe', last: 'Howard'}
// ]
console.log(names);
