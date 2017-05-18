require.config({
    paths:{
        'jqeury':'jquery.min'
    }
})

require(['jquery','Popup'],function($,popup){
    var popup = new popup.Popup();
    $('#alert').click(function(){
        var popup = new popup.Popup();
        popup.alert();
    })
})