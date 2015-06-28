#《高性能JavaScript》笔记

## 第一章 加载和运行
### 加载位置
- `script`标签的出现使整个页面因脚本解析、运行而出现等待
- Internet Explorer 8, Firefox 3.5, Safari 4, 和Chrome 2 允许并行下载JavaScript 文件。
- 因为脚本阻塞其他页面资源的下载过程，所以推荐的办法是：将所有`<script>`标签放在尽可能接近`<body>`
标签底部的位置，尽量减少对整个页面下载的影响。
- 这个问题与外部JavaScript 文件处理过程略有不同。每个HTTP 请求都会产生额外的性能负担，下载一
个100KB 的文件比下载四个25KB 的文件要快。总之，减少引用外部脚本文件的数量。典型的，一个大型
网站或网页应用需要多次请求JavaScript 文件。你可以将这些文件整合成一个文件，只需要一个`<script>`标
签引用，就可以减少性能损失。

### 非阻塞脚本
非阻塞脚本的秘密在于，等页面完成加载之后，再加载JavaScript 源码。从技术角度讲，这意味着在
window 的load 事件发出之后开始下载代码。
- Deferred Scripts 延期脚本
任何带有defer 属性的`<script>`元素在DOM 加载完成之前不会被执行，不论是内联脚本还是外部脚本文
件，都是这样。
- Dynamic Script Elements 动态脚本元素
```
	var script = document.createElement ("script");
	script.type = "text/javascript";
	script.src = "file1.js";
	document.getElementsByTagName_r("head")[0].appendChild(script);
```
此技术的重点在于：无论在何处启动下载，文件的下载和运行都不会阻塞其他页面处理过程。你甚至可以将这些代码放在
<head>部分而不会对其余部分的页面代码造成影响（除了用于下载文件的HTTP 连接）。
兼容IE和标准的写法如下：
function loadScript(url, callback){
	var script = document.createElement ("script");
	script.type = "text/javascript";
	if (script.readyState){ //IE
		script.onreadystatechange = function(){
			if (script.readyState == "loaded" || script.readyState == "complete"){
				script.onreadystatechange = null;
				callback();
			}
		};
	} else { //Others
		script.onload = function(){
		callback();
	};
}
	script.src = url;
	document.getElementsByTagName_r("head")[0].appendChild(script);
}