// js 组件使用闭包并且外放到window上面
(function(){
    var abc = 5;
    function TabView(cfg){
        this.a = cfg.a || 1;
        this.b = cfg.b || 2;
    }
    TabView.protype = {
        render:function(){
            abc++;
        },
        destory:function(){
            abc--;
        }
    }
    window.TabView = TabView;
})()
