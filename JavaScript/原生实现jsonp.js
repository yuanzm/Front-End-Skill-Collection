	;(function(){
    var formatParams = function(data) {//格式化参数
        var arr = [];
        for (var name in data) {
            arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
        }
        return arr.join('&');
    }
    var jsonp = function(options) {
        options = options || {};
        if (!options.url || !options.callback) {
            throw new Error("参数不合法");
        }
 
        //创建 script 标签并加入到页面中
        var callbackName = ('jsonp_' + Math.random()).replace(".", "");
        var oHead = document.getElementsByTagName('head')[0];
        var params = "";
        if(options.data){
            options.data[options.callback] = callbackName;
            params += formatParams(options.data);
        }else{
            params+=options.callback+"="+callbackName;
        }
        var oS = document.createElement('script');
        oHead.appendChild(oS);
 
        //创建jsonp回调函数
        window[callbackName] = function (json) {
            oHead.removeChild(oS);
            clearTimeout(oS.timer);
            window[callbackName] = null;
            options.success && options.success(json);
        };
 
        //发送请求
        oS.src = options.url + '?' + params;
 
        //超时处理
        if (options.time) {
            oS.timer = setTimeout(function () {
                window[callbackName] = null;
                oHead.removeChild(oS);
                options.fail && options.fail({ message: "超时" });
            }, options.time);
        }
    };
    window.jsonp = jsonp;
})();
//调用方法
jsonp({
    url:"http://localhost:8000/name",
    callback:"callback",   //跟后台协商的接收回调名
    data:{id:"1000120"},
    success:function(json){
        alert("jsonp_ok");
    },
    fail:function(){
        alert("fail");
    },
    time:10000
})