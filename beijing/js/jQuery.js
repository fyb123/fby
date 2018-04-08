$(".banner1 .h4").hover(
    function(){
        $(this).css("border-left","3px solid #000");
        $(this).css("padding-left","20px")
    },
    function(){
        $(this).css("border-left","none");
        $(this).css("padding-left","0")
    }
);
$(".banner3 .banner31 .dian ul li a").click(
    function(){
        $(".banner3 .banner31 .banner3_ul li").eq($(this).index()).show().siblings().hide();
}
);
$(".banner4 .col-md-4 img").hover(
    function(){
        $(this).next().css("display","block");
    }
,function(){
        $(this).next().css("display","none");
    }
    );
function checkEmail(){
    var e=document.getElementById("email").value;
    var a=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if(!a.test(e)){
        alert("邮箱不正确")
    }
}











