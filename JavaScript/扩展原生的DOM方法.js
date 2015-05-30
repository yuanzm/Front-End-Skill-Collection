/*
 * 使用Javascript自定义appendTo()、prependTo()和empty()方法 
 * 根据document对象的all属性来判断浏览器的类型，因为只有IE支持该属性
 * 对于非IE浏览器，都会支持DOM标准模型，可以直接使用HTMLElement.prototype为文档节点扩展原型方法
 * 对于IE浏览器，虽然不能设计原型对象，就需要通过一个巧妙的方法来实现扩展：
 * 在访问元素节点的时候，顺便将要继承的方法绑定到要被访问的元素对象上面，就能实现继承自定义方法
 */
var DOMextend = function(name, fn) {
	//兼容非IE浏览器
	if (!document.all) {
		eval("HTMLElement.prototype." + name + "=fn");
	}
	//兼容IE浏览器
	else {
		var _createElement = document.createElement;
		//为createElement()方法绑定自定义函数
		document.createElement = function(tag) {
			var _elem = _createElement(tag);
			eval("_elem." + name + "=fn");
			return _elem;
		}
		//为getElementById()方法绑定自定义函数
		var _getElementById = document.getElementById;
		document.getElementById = function(id) {
			var _elem = _getElementById(id);
			eval("_elem." + name + "=fn");
			return _elem;
		}
		//为getElementsByTagName()方法绑定自定义函数
		var _getElementsByTagName = document.getElementsByTagName;
		document.getElementsByTagName = function(tag) {
			var _arr = _getElementsByTagName(tag);
			for (var _elem = 0;_elem < _arr.length;_elem++) {
				eval("_arr[_elem]." + name + "=fn");
			}
		}
	}
}
DOMextend("appendTo", function(e) {
	var _this = this;
	e.appendChild(_this);
	return _this;
});
DOMextend("prependTo", function(e) {
	var _this = this;
	e.insertBefore(_this, e.firstChild);
	return _this;
});
DOMextend("empty", function(e) {
	var _this = this;
	var a = [];
	for (var i = 0,c = _this.childNodes,l = c.length;i < l;i++ ) {
		a.push(_this.removeChild(c[0]));
	}
	return a;//返回被删除的子节点数组
});
DOMextend("next", function() {
	var _this = this;
	//如果节点类型不是等于1，说明不是元素节点
	while (_this && _this.nodeType != 1) {
		_this = _this.nextSibling;
	}
	return _this;
})
