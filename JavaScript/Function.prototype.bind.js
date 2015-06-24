Function.prototype.bind = function(){ 
	// bind作为Function的prototype属性，每一个函数都具有bind方法，其中的this指向调用该方法的函数。
  	var fn = this;
  	// 前面说过，这个方法是为了将类数组转换成数组
  	var args = Array.prototype.slice.call(arguments);
  	// 数组的shift方法会移除数组的第一个元素，在bind方法的参数里面，第一个参数就是需要绑定this的对象
  	var object = args.shift();
  	return function(){ 
    	return fn.apply(object,
    	// 现在的args是移除了最初参数中第一个参数后的数组，也就是新函数的预设的初始参数。
    	// array.concat(items...)方法产生一个新数组，它包含一份array的浅复制，并把一个或者多个参数item附加在其后。
    	// 如果参数item是一个数组，那么它的元素会被分别添加。
    	// 于是这一行代码产生了一个参数数组，这个数组由预设的初始参数(如果存在)和新传递的参数组成。
      	args.concat(Array.prototype.slice.call(arguments))); 
  	}; 
};
function bind(context) {
	if (arguments.length < 2 && Object.isUndefined(arguments[0]))
  		return this;

	if (!Object.isFunction(this))
  		throw new TypeError("The object is not callable.");
  	
	var nop = function() {};
	var __method = this, args = slice.call(arguments, 1);

	var bound = function() {
  		var a = merge(args, arguments);
  		// Ignore the supplied context when the bound function is called with
  		// the "new" keyword.
  		var c = this instanceof bound ? this : context;
  		return __method.apply(c, a);
	};
    
	nop.prototype   = this.prototype;
	bound.prototype = new nop();

	return bound;
}

var name = 'yuan'
var info = {
    name: "yuanzm",
    sayName: function() {
        console.log(this.name);
    }
}
var sayName = info.sayName.call(info);
