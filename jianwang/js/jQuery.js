/*
 * Created by ������ on 2018/3/2.
 */
 //$(function(){
 //    //��һ����ʾ
 //    $(".pic li").eq(0).show();
 //    //��껬���ֶ��л������뵭����
 //    $(".dot li").click(function(){
 //        $(this).addClass("cur").siblings().removeClass("cur");
 //        var index = $(this).index();
 //        $(".pic li").eq(index).fadeIn(400).siblings().fadeOut(400);
 //    });
 //    //�Զ��ֲ�
 //    var i = 0;
 //    var timer = setInterval(play,2000);
 //    //�������Ч��
 //    $(".dot").hover(function(){
 //        clearInterval(timer);
 //    },function(){
 //        timer=setInterval(play,2000);
 //    });
 //    timer();
 //});
$(function(){
    i=0;
    function run(){
        i++;
        if(i==13){
            i=0
        }
        $(".pic li").eq(i).fadeIn(400).siblings().fadeOut(400);
        $(".dot li").eq(i).addClass("cur").siblings().removeClass("cur");
    }
    timer=setInterval(run,5000);

    $(".dot li").mouseover(function(){
        clearInterval(timer)
        i=$(this).index();
        $(".pic li").eq(i).fadeIn(400).siblings().fadeOut(400);
        $(this).addClass("cur").siblings().removeClass("cur");
    })
    $(".dot li").mouseleave(function(){
        timer=setInterval(run,2000)
})
});
