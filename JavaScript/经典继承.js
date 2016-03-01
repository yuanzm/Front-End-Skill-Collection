/**
* 类的定义 - 经典方式
*/
(function (ns) {
    
    var Fruit = function () {
        this._color = null;
        this._taste = null;
        ...
    };
    
    Fruit.prototype = {
        constructor: Fruit,        // 重新绑定 constructor
           
        getColor: function () {
            return this._color;
        },

        ...
    };
    
    ns.Fruit = Fruit;
    
})(myNameSpace);


/**********************************************************************
* 类的继承 - 经典方式
*
* 大多数情况下，我们可能不会用到继承。
* 如果需要继承，可以采用以下经典的继承方式。
*/

// 此函数获取 prototype 的引用
function inheritPrototype (subClass, superClass) {
    /**
    * Object.create() 浏览器支持情况 ：>= IE9, Chrome, Firefox, Safari, Opera
    */
    var prototype = Object.create(superClass.prototype);  // 得到指向 superClass.prototype 的一个引用（指针）
    prototype.constructor = subClass;
    subClass.prototype = prototype;
}

// 父类
var SuperClass = function (name) {
    this.name = name;
};
SuperClass.prototype = {
    constructor: SuperClass,

    getName: function () {
        return this.name;
    }
};

// 子类
var SubClass = function (name, age) {
    SuperClass.call(this, name);
    this.age = age;
};
inheritPrototype(SubClass, SuperClass);     // 继承 prototype 

// 添加函数
SubClass.prototype.getAge = function () {
    return this.age;
};

/******************
* 类的继承 - 结束
***********************************************************************/