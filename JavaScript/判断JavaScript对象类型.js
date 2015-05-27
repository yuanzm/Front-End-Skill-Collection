/*
 * 判断JavaScript对象类型的函数
 * @param {}
 */
function is(obj, type) {
	var toString = Object.prototype.toString, undefined;

	return (type === 'Null' && obj === null) ||
		(type === "Undefined" && obj === undefined) ||
		toString.call(obj).slice(8, -1) === type;
};

// test
var obj1 = 123,
	obj2 = '123',
	obj3 = {"number": 123}, 
	obj4 = null,
	obj5 = undefined,
	obj6 = [123]

console.log(is(obj1, 'Number'));
console.log(is(obj2, 'String'));
console.log(is(obj3, 'Object'));
console.log(is(obj4, 'Null'));
console.log(is(obj5, 'Undefined'));
console.log(is(obj6, 'Array'));
