### 方法一
将外部容器的显示模式设置成display:table,img标签外部再嵌套一个span标签，并设置span的显示模式为display:table-cell，这样span内部的内容就相当于表格，可以很方便的使用vertical-align属性来对齐其中的内容了。

[demo](http://jsfiddle.net/Ln0mfg47/)

``` html
<!DOCTYPE html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>方法1</title>
    <style type="text/css">
    body {
        height:100%;
    }
    #box{
        width:500px;
        height:400px;
        display:table;
        text-align:center;
        border:1px solid #d3d3d3;
        background:#fff;
    }
    #box span{
        display:table-cell;
        vertical-align:middle;
    }
    #box img{
        border:1px solid #ccc;
    }
    </style>
    <!--[if lte IE 7]>
    <style type="text/css">?
    #box{
        position:relative;
        overflow:hidden;
    }
    #box span{
        position:absolute;
        left:50%;top:50%;
    }
    #box img{
        position:relative;
        left:-50%;top:-50%;
    }
    </style>
    <![endif]-->
</head>
<body>
    <div id="box">
        <span><img src="http://lorempixel.com/g/400/200/" alt="" /></span>
    </div>
</body>
</html>
```