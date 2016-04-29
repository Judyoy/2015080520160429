define([], function(){
    var loadBMap = function(fn) {
        var script = document.createElement('script');
        var body = document.getElementsByTagName('body')[0];
        script.src = 'http://api.map.baidu.com/api?v=2.0&ak=F949418aa68f01773339f9c591c5308a&callback=baidumapcallback';
        body.appendChild(script);
        window.baidumapcallback = fn;
    }
    return loadBMap;
});