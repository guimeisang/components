define(['jquery'],function($){
    function Popup(){};
    Popup.prototype = {
        alert:function(){
            alert('this is alert')
        },
        confirm:function(){
            alert('this is confirm')
        },
        prompt:function(){
            alert('this is prompt')
        }
    };
    return {
        Popup:Popup
    };
});