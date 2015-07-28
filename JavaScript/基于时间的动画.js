/*
     * 用于获取元素的样式属性值
     * @elem: 需要获取属性的元素
     * @attr: 需要获取的属性
     * @return：元素对应的属性
     */
    function attrStyle(elem, attr) {
        if (elem.style[attr]) {
            return elem.style[attr];
        } else if (elem.currentStyle) {
            return elem.style[currentStyle];
        } else if (document.defaultView && document.defaultView.getComputedStyle) {
            attr = attr.replace(/([A-Z])/g, '-$1').toLowerCase();
            return document.defaultView.getComputedStyle(elem, null).getPropertyValue(attr);
        }
    }
    /*
     * JavaScript基于时间的动画 
     * @param {HTMLElement} obj:执行动画操作的DOM节点
     * @param {String} attr: 变化的属性值
     * @param {Number} fps: 动画帧，推荐60
     * @param {String} endAttr: 节点动画结束状态的属性值
     * @param {Number} duration: 整个动画执行的时间
     * @param {Function} callback: 动画结束后的回调函数
     */
    function AnimationBaseTime(obj, attr, endAttr, duration, fps, callback) {
        var startAttr = parseFloat(attrStyle(obj, attr)),                   // 元素动画属性的初始值
            dt = 1000 / 60,                                                 // 动画帧
            totalAnimationTime = duration / dt,                             // 总共动画次数
            endAttr = parseFloat(endAttr),                                  // 元素动画属性的结束值
            perStepChange = (endAttr - startAttr) / totalAnimationTime;     // 每一次更新属性值变化的值 
            acc = 0,                                                        // 用于判断是否需要更新属性值
            current = new Date(),                                           // loop函数执行的时间点
            previous = new Date(),                                          // 上一次loop执行的世间点
            flag = 1;                                                       // 判断动画方向的标签值
        // 用于决定动画的方向
        if (startAttr > endAttr) {
            flag = -1;
        }
        /*
         * 每一帧执行的函数
         */ 
        function loop() {
            var current = new Date();
            var passed = current - previous;
            previous = current;
            acc += passed;
            while (acc >= dt) {
                update(dt);
                acc -= dt;
            }
            paint(); 
        }
        /*
         * 更新属性值，并且判断是否到达终点态
         */
        function update(dt) {
            startAttr += perStepChange;
            if ((flag == 1 && (startAttr - endAttr) > 0) || (flag == -1 && (endAttr - startAttr))) {
                clearInterval(action);
                startAttr = endAttr;
                paint();
            }
        }
        /*
         * 渲染
         */ 
        function paint() {
            obj.style[attr] = String(startAttr);
        }
        var action = setInterval(loop, 1000 / fps);
        var nextAnimation = setTimeout(callback, duration);
    }