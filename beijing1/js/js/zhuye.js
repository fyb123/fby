/**
 * Created by lenovo on 17/6/14 014.
 */
/*------------滚动----------------*/
$(function(){
    $(".nav1 li").hover(function(){
        $(this).find("span").stop().animate({marginTop:'-159px'},300)
    },function(){
        $(this).find("span").stop().animate({marginTop:'0px'},300)
    })
});
/*--------------选项卡-------------------*/
$(function(){
    $("#top ul li").click(function(){
      $(this).css({"background":"red"}).siblings().css({"background":"#ccc"})
    });
    $("#top ul li").click(function(){
        var i=$(this).index();
        $("#bottom ul").eq(i).show().siblings().hide();
    })
});
$(function(){
    $(".tt").mouseenter(function(){
        $(this).css({"border":"red 2px solid"}).siblings().css({"border":"#ccc 1px solid"})
    }).mouseleave(function(){
        $(this).css({"border":"#ccc 1px solid"}).siblings().css({"border":"red 2px solid"})
    })
});