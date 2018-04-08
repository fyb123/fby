/**
 * Created by lenovo on 17/6/17 017.
 */
/*--------------轮播图----------------*/
$(function(){
    var c=0;
    function run(){
        c++;
        c= ( c == 3 ) ? 0 : c;
        var a=-1200*c;
        $("#list1").animate({"marginLeft":a},1000);
        $("#nav1 li").eq(c).css({'background':'red'}).siblings('li').css({'background':'#fff'})
    }
    timer=setInterval(run,2500);

    $("#nav1 li").click(function () {
        c = $(this).index();
        var marginLeft = -1200 * c;
        $("#nav1 li").eq(c).css({background: "red"}).siblings().css({background: "#ccc"});
        $("#list1").stop().animate({marginLeft: marginLeft}, 1000);
    });
});

$(function(){
    var i=0;
    $(".top .top2 span").click(function () {
        if(i==0){
            $(this).next().hide();
            i=1
        }else{
            $(this).next().show();
            i=0
        }
    });
});