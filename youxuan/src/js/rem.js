
// 用js实现rem，更平滑
(function(doc, win) {
    var docEl = doc.documentElement,
        // orientationchange: 屏幕旋转；   resize： 调节屏幕大小
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            clientWidth = clientWidth < 320 ? 320 : clientWidth;
            clientWidth = clientWidth > 640 ? 640 : clientWidth;
            // 表示当clientWidth为640px时：1rem === 100px
            docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';

            // 处理部分手机横竖屏切换时，布局错乱的问题
            setTimeout(function() {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                clientWidth = clientWidth < 320 ? 320 : clientWidth;
                clientWidth = clientWidth > 640 ? 640 : clientWidth;
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';                
            }, 333);
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);