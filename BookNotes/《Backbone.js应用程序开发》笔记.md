# 《Backbone.js应用程序开发》笔记

## 第二章 Backbone基本构成
- event hash
  Backbone用jQuery的.delegate()来提供事件代理的支持，但有些改进，this始终指向当前的view对象。需要记住的是，events属性中指定的回调函数名称必须在view范围内有一个对应函数。
- View的逻辑通常要在el和它嵌套的元素上调用jQuery和Zepto的函数。Backbone通过定义的$el属性和$()函数可以很容易的做到这点。view.$el属性等同于$(view.el) ，view.$(selector)等同于$(view.el).find(selector)。

## 第六章 常见问题
- 视图嵌套
	+ 方案一：
	```
		this.$('.someContainer').append(innerView.el);
		// demo
		initialize : function () { 
		    //...
		},

		render : function () {

		    this.$el.empty();

		    this.innerView1 = new Subview({options});
		    this.innerView2 = new Subview({options});

		    this.$('.inner-view-container')
		        .append(this.innerView1.el)
		        .append(this.innerView2.el);
		}
	```
	+ 方案二
	```
	var OuterView = Backbone.View.extend({
	    initialize: function() {
	        this.inner = new InnerView();
	    },

	    render: function() {
	        this.$el.html(template); // or this.$el.empty() if you have no template
	        this.$el.append(this.inner.$el);
	        this.inner.render();
	    }
	});

	var InnerView = Backbone.View.extend({
	    render: function() {
	        this.$el.html(template);
	        this.delegateEvents();
	    }
	});
	```