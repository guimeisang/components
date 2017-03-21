
 (function(){
     var dataDealMethods = {
        /**
        * 数组
        *  */
        // 将数组中的某一个值去掉
        // 测试用例 dataDealMethods.arrayRemoveVal(list,val)
        arrayRemoveVal:function(list,val){
            function indexOf(list,val){
                for(var i=0;i<list.length;i++){
                    if(list[i]==val) return i;
                }
                return -1;
            }
            var index = indexOf(list,val);
            if(index > -1){
                list.splice(index,1);
            }
        },
     };

     window.dataDealMethods = dataDealMethods;
 })()