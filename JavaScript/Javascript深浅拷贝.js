/*
 * 浅拷贝函数
 * @param {Object} oldObj: 被拷贝的对象
 * @param {Object} newObj: 需要拷贝的对象
 @ return {Object} newObj: 拷贝之后的对象
 */

function shallowCopy(oldObj, newObj) {
	for (var key in oldObj) {
		newObj[key] = oldObj[key];
	}

	return newObj;
}

// test
var oldObj = {
	name: "yuanzm",
	age: "12",
	info: {
		id: "12330393"
	}
}
var newObj = {}
// 调用浅拷贝函数
shallowCopy(oldObj, newObj);
newObj.info.id = "12345678";
// 浅拷贝测试结果
console.log("浅拷贝测试结果");	
console.log(newObj.info);
console.log(oldObj.info);

// 可以看到对新对象的操作同样影响了旧对象是，因为旧对象的info属性是对象，是引用类型的变量
// console.log(oldObj);  // { name: 'yuanzm', age: '12', info: { id: '12345678'} }


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

/*
 * 深拷贝函数
 * @param {Object} oldObj: 被拷贝的对象
 * @param {Object} newObj: 需要拷贝的对象
 * @ return {Object} newObj: 拷贝之后的对象
 */

 function deepCopy(oldObj, newObj) {
 	for (var key in oldObj) {
 		var copy = oldObj[key];
 		if (oldObj === copy) continue; //如window.window === window，会陷入死循环，需要处理一下
 		if (is(copy, "Object")) {
 			newObj[key] = deepCopy(copy, newObj[key] || {});
 		} else if (is(copy, "Array")) {
 			newObj[key] = []
			newObj[key] = deepCopy(copy, newObj[key] || []);
 		} else {
 			newObj[key] = copy;
 		}
 	}
 	return newObj;
 }

 // test
var oldObj = {
	name: "yuanzm",
	age: "12",
	info: {
		id: "12330393"
	}
}
var newObj = {}
// 调用浅拷贝函数
deepCopy(oldObj, newObj);
newObj.info.id="12345678"
// 深拷贝测试结果
console.log("深拷贝测试结果")
console.log(newObj);
console.log(oldObj);
