require.config({
    paths: {//声明引用js的路径
        'jquery': '../plg/jquery/jquery.min',
        'mdd': './mdd'
    },
    shim: {//定义插件模块
        'mdd': {
            deps: [],
            exports: 'fun'
        }
    },
    urlArgs: "bust="+(new Date()).getTime()
});

require(['jquery', 'test1', 'mdd'], function(_, t1, fun){
    _('body').css('margin', 0);
    //alert(a);
    fun.f();
    alert(fun.a);
    //t1();

    //_.nav();

    var _artTab = _('#art .tab');
    var _artCnt = _('#art .cnt');

    _artTab.each(function(index, elm){
        _(this).click(function(){
            _artTab.removeClass('z-crt')
            .eq(index).addClass('z-crt');

            _artCnt.removeClass('z-crt')
            .eq(index).addClass('z-crt');
        })
    });

    //_art.className = '123';
    /*art.className = '123';
    _art.attr('class', '123');*/

});