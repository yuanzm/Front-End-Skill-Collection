
/********************************************************
*                                   *********************
*   前端 代码规范                   *********************
*                                   *********************
*   更新日期 : 2015-11-20 12:19     *********************
*
*********************************************************
*
* 前述 :
*
* " 程序是写给人看的，顺带能在机器上运行 " --《黑客与画家》
*
* 通常我们维护代码的时间远远大于新建代码的时间，代码的质量、代码风格的好坏对产品的质量、bug率、
* 可扩展性，维护的效率有着重要的影响。代码的组织、抽象能力、对编程语言的理解，可能需要时间和经验的累积，
* 但优良的代码风格可以迅速的掌握并使用于日常开发中。虽然更好的代码风格会花费更多的时间，但考虑到维护的次数
* 远多余写新模块的次数，这些时间是值得的。
*
* 本规范除了对语言细节作出一些要求和建议外，对代码风格的场景也举了很多例子。尝试着去实践这些代码风格，
* 一定会使日后的维护更容易、产品的质量更好。
*
* （ 当你纠结于使用什么样的代码风格更好时，请谨记一条原则 : 如何使代码结构和逻辑一目了然 ）
*
*
* 第 1 部分 : 硬性规定
* 第 2 部分 : 规定
* 第 3 部分 : 弱规定
* 第 4 部分 : 建议的代码风格
* 第 5 部分 : 一些最佳实践
*
*********************************************************/




    /************************************************
    * 第 1 部分 : 硬性规定
    *
    * 一定要遵守
    *************************************************/


    /**
    * 使用 === !==
    */
    ===     // 杜绝 ==
    !==     // 杜绝 !=


    /**
    * 应该加分号 ; 的地方一定要加上，漏加可能会导致代码压缩失败、或者其它问题。
    *
    * jsHint （或者jsLint也行）是一个优秀的 JavaScript 语法校验工具，在忘记加 ; 时会提示警告，
    * 它还有许多有用的提醒。
    *
    * 强烈建议在写完代码提交测试前，用jsHint校验代码（有些编辑器支持保存代码的时候自动行jsHint校验。）
    * 如果觉得jsHint的校验过于苛刻，可以查看 游戏中心前端Wiki " 工具 / 工具配置 / " 目录下关于如果关闭一些
    * jsHint警告的文章。
    */


    var greenApple = 'apple',       // 变量采用驼峰式命名
        redCar     = 'car';


    nameSpace.HOUSE_NUMBER = 100;   // 常量大写，用下划线连接


    /**
    * 类（构造函数），首字母大写
    */
    var CountryHouse = function (arg) {
        ...
    };


    for (var column in symbolObj) {
        if (symbolObj.hasOwnProperty(column))   // for-in 中应该始终用 hasOwnProperty() 过滤属性
            ...
    }


    /**
    * 避免重复读取 length
    */
    for (var i = 0; i < arr.length; i++) {
        ...
    }
    for (var i = 0, len = arr.length; i < len; i++)         // Better

    for (var i = arr.length - 1; i >= 0; i--)               // OK, 如果顺序无所谓。


    Array.prototype.customFn    // 不要在原生类型的prototype上添加自定义方法。


    /**
    * 在元素上保存自定义属性时，请添加 " data- " 前缀。
    */
    <a class="btn" data-age="10"> 立即邀请 </a>       // Good
    <a class="btn" age="10">      立即邀请 </a>       // Bad




    /************************************************
    * 第 2 部分 : 规定
    *
    * 强烈建议遵守
    *************************************************/


    /**
    * 变量、类、方法等的命名要准确传达它的功能和意义（尽量），
    *
    * 因为代码最终会被压缩，局部变量根据命名的需要，长一些无所谓，
    * 至于类、方法的命名，为了维护的方便，不应为了节省字节而导致表意不清。
    */


    var elemID    = 'cool',                 // 变量名中包含 ID 时，ID大写
        wgURL     = 'http://weixin.qq.com', // 变量名中包含 URL 时，URL大写
        myAndroid = null,                   // 变量名中包含 Android 时，大写首字母A
        myiOS     = null,                   // 变量名中包含 iOS 时，小写首字母i     // 此处有争议，请自行决定。
        $elem     = $('#elemID');           // jQuery对象命名以'$'开头


    /**
    * 本注释使用了多行注释格式 ... 
    *
    * 类、方法（函数）的注释用多行注释的方式，不要用 " // " 
    *
    * 其它地方的注释，如果需要多行描述，也用多行注释的方式，不要用 " // " 
    */


    /** 
     * ( 注释示例 ) : 这里描述函数的功能 ...                       
     *
     * @param symbols (WeiXin.Symbol)               // 这里注明参数的名字、类型
     * @param params  (Object) - Optional           // 如果某个参数不是必须的，添加 " - Optional " 
     *        // example format:                    // 如果某个参数结构比较复杂，可以举个具体的例子，方便快速理解
     *        {
     *            low : a Date, 
     *            high: a Date,
     *            msTarget: 3600000,   // Must be a Natural Number.
     *            freqs: {
     *                CLC OHLC: 60000,
     *                CLC Volume: 86400000,
     *                ...
     *            }
     *        };
     * @return {String}                             // 注明返回类型
     */


    /**
    * 单行代码尽量不要太长，占用多行的单行代码（实际是一行代码，只是换行了）会影响阅读，
    * "建议的代码风格" 部分有许多避免单行长代码的例子。
    */ 




    /************************************************
    * 第 3 部分 : 弱规定
    *
    * 建议遵守
    *************************************************/


    var that = this;    // 当需要保存当前对象的引用、以便在其它地方使用时，建议统一用 that。


    /**
    * 文件行数
    *
    * 模块或组件划分清晰的代码，单个文件代码的行数自然会减少，
    * 有同事建议单个文件不超过500行，某其他同事对此持保留看法。
    *
    * 但有一点是一致的，模块或组件的划分要清晰。
    *
    * 为了提高代码清晰度，巧妙换行的代码风格是有好处的，虽然会增加
    * 代码的行数，但是代码最终会压缩，所以是一样的。不应该过于纠结行数的多少。
    */




    /************************************************
    * 第 4 部分 : 建议的代码风格
    *************************************************/


    /**
    * 赋值的变量以 " = " 号对齐 
    *
    * 变量定义统一放在局部作用域最前面，只用一个var
    */
    var pear       = 100,           
        greenApple = 'xxxxxxx',     //（以最长的变量为基准对齐）
        orange     = {},            // 每个变量放一行
        lemon,                      
        banana;
    

    /**
    * 成员变量的赋值以 " = " 号对齐 
    */
    this._cntPause   = 0;
    this._syms       = {};
    this._symsSorted = [];      //（以最长的变量为基准对齐）
    this._symMenu    = null;
    this._plotters   = [];


    /**
    * 属性和值的对齐
    */
    var symRec = {
        isPending: true,
        isAdded:   false,
        isError:   false,
        type:      obj.type,
        obj:       obj
    };
    /**
    * 更清晰的对齐
    */
    var symRec = {
        isPending : true,
        isAdded   : false,
        isError   : false,
        type      : obj.type,
        obj       : obj
    };


    /**
    * 长数组对齐示例
    */
    _symbols : [ 'MarCostCong5Min',   'CostOfCongestion5Min', 'Congestion5Min',
                 'MarCostCong',       'CostOfCongestion',     'Congestion'      ],
    _columns: [
        "Expiration",
        "ClosePrice",
        "LastPrice",
        "Chg",
        "Chg%",
        "Volume"
    ]


    /**
    * 链式调用对齐示例
    */
    var lang       = Lang.LegendMenu,
        menu       = this._newPopupMenu(),
        menuQuote  = menu.addItem().text(lang.quote)        // 链式调用的每个函数(方法)单独放在一行，并且对齐
                                   .callback(fnAA)
                                   .imageClass('quote'),
        menuTable  = menu.addItem().text(lang.table)
                                   .callback(fnBB)
                                   .imageClass('table'),
        menuRename = menu.addItem().text(lang.rename)
                                   .callback(fnCC)
                                   .imageClass('rename');
    /**
    * 链式调用对齐示例
    */
    this.window.events.bind('closed',      this._windowClosing)  // 链式调用的每个函数(方法)单独放在一行，并且对齐
                      .bind('yAxisChange', this._windowResized)  //（以最长的为基准对齐）
                      .bind('symbol',      this._newSymbol);


    /**
    * 条件语句对齐示例
    */
    if (   abc !== null   
        && (   de === null          // 添加适当的 () 有助于区分逻辑关系
            || abc < de   ) ) {
        ......
    }


    /**
    * 条件语句对齐示例
    */
    if (   (   min !== null 
            && val < min   )       // 添加适当的 () 有助于区分逻辑关系
        || (   max !== null 
            && val > max   ) ) {
        ......
    }


    /**
    * 条件语句对齐示例
    */
    return (   (   d1 === null
                && d2 === null )
            || (   (d1 instanceof Date)         // 添加适当的 () 有助于区分逻辑关系
                && (d2 instanceof Date)
                && d1.getTime() === d2.getTime() ) );


    /**
    * 精巧的对齐 
    */
         if (x < 10) { val = 3       };
    else if (x < 50) { val = (x / 3) };
    else if (x < 80) { val = (x / 4) };
    else             { val = (x / 6) };


    /**
    * 对齐示例
    */
    for (var i = 0 ; 
             i < 10 && !isFound ;       // 有时把循环结束的表达放到这里，比直接用 break; 更清晰
             i++ ) {
        ...
    }
    if (isFound) {                      // 尤其当后续会用到这个结果时，一举两得。
        ...
    }


    /**
    * 注意 "function" 前后、参数间的空格
    */
    areEqual: function (d1, d2) {
        ...
    }


    /**
    * 参数过多或过长时，每个参数单独放在一行
    */
    new lim.Colors.Color( parseInt(match.substring(0,2), 16),   // 第一个参数和 ( 之间留一个空格会清晰一些
                          parseInt(match.substring(2,4), 16),
                          parseInt(match.substring(4,6), 16) ); // 最后一个参数和 ) 之间留一个空格会清晰一些

    ctx.clearRect( Math.max(0, prevF.x - _focusRadiusClear),    // 第一个参数和 ( 之间留一个空格会清晰一些
                   Math.max(0, prevF.y - _focusRadiusClear),
                   prevF.x + _focusRadiusClear,
                   prevF.y + _focusRadiusClear );               // 最后一个参数和 ) 之间留一个空格会清晰一些


    /**
    * 数学操作符对齐示例
    */
    var val = Math.round(  (this.r * 0.3)       // 添加适当的 () 有助于区分逻辑关系
                         + (this.g * 0.59)
                         + (this.b * 0.11) );
    var val = Math.round( (  width
                           / scrollableWidth
                           * scrollableSpaceOnBar 
                           - barBorder )
                         /
                          (  width
                           / scrollableWidth      
                           + 1                ) );
    var str = (  (   isPlus
                  && num > 0 )          // 添加适当的 () 有助于区分逻辑关系
               ? '+'
               : '' )
            + num.toFixed(numDecimals);


    /**
    * 三元操作符对齐示例
    */
    var dates = ( (   skipMissing
                   || cache._skipMissing )
                 ? getDateIterator(low, high)
                 : tl.iterator(low, high)     ),

        baseY = ( _baselineVal !== null
                 ? _baselineY
                 : ( (_style === 'line')
                    ? lineObj.veryFirstY
                    : this._canvas.height ) ),
        bar   = null;

    
    /**
    * 巧妙的对齐
    *
    * 在某些地方，当你纠结于该如何对齐代码更好时，请谨记一条原则 : 如何使代码结构和逻辑一目了然。
    */
    var HOURS_PER_DAY     =    24,
        MINUTES_PER_DAY   =  1440,
        SECONDS_PER_DAY   = 86400,                      // 以个位数对齐
        MILLIS_PER_SECOND =  1000,
        MILLIS_PER_MINUTE = ( 60 * MILLIS_PER_SECOND),
        MILLIS_PER_HOUR   = ( 60 * MILLIS_PER_MINUTE),
        MILLIS_PER_DAY    = ( 24 * MILLIS_PER_HOUR),
        MILLIS_PER_MONTH  = ( 28 * MILLIS_PER_DAY),
        MILLIS_PER_YEAR   = (365 * MILLIS_PER_DAY);




    /************************************************
    * 第 5 部分 : 一些 最佳实践
    *************************************************/


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


    /**
    * 善用 观察者模式
    *
    * 如果不熟悉观察者模式，可以上网搜索或请教同事
    */


    /**
    * 松耦合
    *
    * 设计模块、组件时，函数传递参数时，保持松耦合
    *
    * 比如在一个元素上添加样式时，样式写在 CSS 文件里，在元素上添加 className 即可。
    *
    * 在函数传递参数时，如果接收的函数只需要得到一个对象的某个属性值，那就不需要传递
    * 整个对象过去。比如只传递 event.target 而不是整个 event 对象.
    */


    /**
    * 尊重对象所有权
    *
    * 当需要创建一个和已经存在的某个类有类似功能的新类时，除了直接修改
    * 这个类外，有时也许适当使用继承、或者创建一个新对象与之交互更合理。
    *
    * （如果不好理解，请忽略）
    */


    /**
    * JavaScript 里有一些影响性能的语法或使用方法，或者是容易造成混淆的使用方式，
    * 可能同事们都有些了解，如果不了解请找一本好书或者上网查一下，请注意规避这些
    * 缺陷。
    *
    * 1. 比如避免使用 with 语句 ，除了性能问题外，在某些情况下 with 作用域里面的值会
    * 造成很大的混淆。
    *
    * 2. 避免频繁访问 dom 元素的 clientWidth, offsetHeight ... 等属性，这些属性每次访问时，
    * 浏览器都会动态计算它们的值，这一点与访问 NodeList 等动态对象类似。
    *
    * TODO 后续有空时可以总结一下
    */


    /**
    * Object.freeze() 的用途
    */
    (function (ns) {
        
        var Unit = function (index, name) {
            this._name = name;
            ...
            
            /**
            * Object.freeze() 可以防止对象的属性被删除、属性值被修改，也可防止在对象上添加新的属性。
            *                 此种情形下，对象不可被访问者改变。适合在基础功能组件或模块中使用。
            *
            * Object.freeze() 浏览器支持情况 ：>= IE9, Chrome, Firefox, Safari, Opera
            */
            Object.freeze(this);            // 新生成的实例对象被冻住
        };
        
        Unit.prototype = {
            constructor: Unit,
               
            toString: function () {
                return this._name;
            },

            ...
        };
        
        Object.freeze(Unit);                // Unit                 类被冻住
        Object.freeze(Unit.prototype);      // Unit.prototype 类的原型被冻住
        
        ns.Unit = Unit;
        
    })(myNameSpace);


    /**
    * 善用链式调用, 使代码清晰简洁
    */
    this._chart.color('#333333')
               .setPlotStyle('Mountain')
               .hide();

    // 注意 color 函数最后的 return this 语句
    color: function (color) {

        if (typeof color === 'undefined') {
            return this._color;
        }
        else if (!this._validateColor(color)) {
            /**
            * 上次开会后组内多数人觉得，对参数执行严格验证，并且验证失败时抛出错误是有风险的，
            * 所以此段代码仅供参考。
            *
            * 某同事觉得，对于后端接口返回值的校验可以宽松一些，但对于前端各个模块内部的公共方法
            * 执行严格的参数校验有助于提高代码的质量、开发效率（因为错误定位精准，并且没有一连串的宽松妥协、甚至静默失败）
            *
            * 建议同事们可以谨慎实践。（尤其对于新开发的模块可以谨慎实践，因为没有历史遗留问题。）
            */
            throw "IllegalArgumentException: color is invalid.";
        }
        else {
            this._color = color;
            /**
            * return this 返回之前的 this._chart 对象，
            * 使链式调用成为可能， 类似 jQuery的链式调用
            */
            return this;
        }
    }




/************************************************
*******    结束    ******************************
*************************************************/
