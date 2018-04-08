/**
 * Created by lenovo on 2017/6/21.
 */
$(function(){
    $("#top ul li").mouseenter(function(){
        var i=$(this).index();
        $("#bottom ul").eq(i).show().siblings().hide();
    })
});