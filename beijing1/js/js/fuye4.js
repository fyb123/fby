/**
 * Created by lenovo on 17/6/19 019.
 */
$(function(){
    var i=0;
    function run(){
        i++;
        i=(i==7)?0:i;
        $("#pic img").eq(i).fadeIn(500).siblings("img").fadeOut(500);
        $("#tu li").eq(i).css({"background":"yellow"}).siblings("li").css({"background":"deepskyblue"})
    }
    var timer=setInterval(run,1500);
    $("ul li").mouseenter(function(){
        clearInterval(timer);
        i=$(this).index();
        $("#pic img").eq(i).fadeIn(500).siblings("img").fadeOut(500);
        $("#tu li").eq(i).css({"background":"yellow"}).siblings("li").css({"background":"deepskyblue"})
    }).mouseleave(function(){
        timer=setInterval(run,1500)
    })
});
function one(){
    document.getElementById("right1").style.display="block";
    document.getElementById("right2").style.display="none";
}
function two(){
    document.getElementById("right1").style.display="none";
    document.getElementById("right2").style.display="block";
}
