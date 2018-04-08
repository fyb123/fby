var log = document.querySelector(".log");
var reg = document.querySelector(".reg");
var login = document.querySelector(".login");
var registered = document.querySelector(".registered");
var IdLog = document.querySelector("#log");
var IdReg = document.querySelector("#reg");
var PassSpan = document.querySelector(".Pass_span");
var Pass = document.querySelector("#Pass");
var personality = document.querySelector(".personality");
var phone = document.querySelector(".phone");
var formOne = document.querySelector(".form-one");
var formTwo = document.querySelector(".form-two");

personality.onclick=function(){
    formOne.style.cssText="display:block;";
    formTwo.style.cssText="display:none;";
};
phone.onclick=function(){
    formOne.style.cssText="display:none;";
    formTwo.style.cssText="display:block;";
}

PassSpan.onclick=function(){
    Pass.style.cssText="visibility:hidden;opacity:0;transition:1s;"
};

IdLog.onclick=function(){
    log.classList.add("active");
    reg.classList.remove("active");
    login.style.cssText="display:block;";
    registered.style.cssText="display:none;";
    Pass.style.cssText="visibility:visible;opacity:1;transition:1s;"
};

IdReg.onclick=function(){
    reg.classList.add("active");
    log.classList.remove("active");
    registered.style.cssText="display:block;";
    login.style.cssText="display:none;"
    Pass.style.cssText="visibility:visible;opacity:1;transition:1s;"
};

log.onclick=function(){
    log.classList.add("active");
    reg.classList.remove("active");
    login.style.cssText="display:block;";
    registered.style.cssText="display:none;"
};

reg.onclick=function(){
    reg.classList.add("active");
    log.classList.remove("active");
    registered.style.cssText="display:block;";
    login.style.cssText="display:none;"
};




var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var div_input1 = document.querySelector(".input1");
var div_input2 = document.querySelector(".input2");
function method1(){
    div_input1.style.cssText="background-position: 0 -25px;display:block;";
    document.querySelector(".input1").innerHTML="请填写您的通行账号";
}
function method2(){
    div_input2.style.cssText="background-position: 0 -25px;display:block;";
    document.querySelector(".input2").innerHTML="请填写您的密码";
}


//下面开始王成功js代码
function plays(name){
    var oUl=document.querySelector("section #section-"+name+" .auto");
var Lis=document.querySelectorAll("section #section-"+name+" .click li");
var num=0;
var timers=null;
     function autoPlay(){
    num++;
    run();
}
function run(){
    if(num==4){
      oUl.style.transition="0s";
       num=0; 
    }else{
        oUl.style.transition="0.8s";
    }
    oUl.style.marginLeft=-num*1150+"px";
    for(var j=0;j<Lis.length;j++){
      Lis[j].className="";
    }
    Lis[num].className="li1";
}
timers=setInterval(autoPlay,2500);

oUl.onmouseover=function(){
    clearInterval(timers);
}
oUl.onmouseout=function(){
    timers=setInterval(autoPlay,2500);
}

for(var i=0;i<Lis.length;i++){
   Lis[i].index=i;
   Lis[i].onclick=function(){
       num=this.index;
       run();
   }
}
}
plays("one");
plays("two");
plays("three");

function selects(name1,name2,attr,fun){
    var btns=document.querySelectorAll(name1);
var divs=document.querySelectorAll(name2);
for(var i=0;i<btns.length;i++){
    btns[i].index=i;
    btns[i].onclick=function(){
        for(var j=0;j<divs.length;j++){
             divs[j].style.display="none";
             btns[j].removeAttribute("class");
             if(btns[j]==this){
                divs[j].style.display="block";
                btns[j].setAttribute("class",attr);
             }
        }
    }
}
}
selects("section .ul1 li","section .plays div","on");
selects("main .display>ul>li","main .display div","dli1");
selects("#main5 .left-5 ul li","#main5 .left-5 div","li1");
selects("#main5 .right-5 ul li","#main5 .right-5 div","li1")
function textRun(name,time){
    var gUl=document.querySelector(name);
var c=0;
var timer2=null;
function runs(){
   c++;
   if(c==5){
        gUl.style.transition="0s";
        c=0;
   }else{
    gUl.style.transition="0.7s"
   }
   gUl.style.marginTop=c*(-100)+"px";
}
timer2=setInterval(runs,time);
}
textRun("#main4 .gamer-t ul",2500);
textRun("#main4 .gamer-t2 ul",1500);
//function method3(){
//    if(input1.value.length>=3&&input1.value.length<=10){
//        div_input1.style.cssText="background-position: 0 -50px;color:#8cae17";/*绿色*/
//        document.querySelector(".input1").innerHTML="通过";
//    }else if(input1.value.length==0){
//        div_input1.style.cssText="background-position: 0 -25px;color:#000";
//        document.querySelector(".input1").innerHTML="请填写您的通行账号";
//    }else{
//        div_input1.style.cssText="background-position: 0 -50px;color:#ad1a1a";/*红色*/
//        document.querySelector(".input1").innerHTML="请填写3-10位汉字或字母";
//    }
//}