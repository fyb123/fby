/**
 * Created by lenovo on 17/6/21 021.
 */
function checkPhone(){
    var phone=document.getElementById("phone").value;
    var a=/^1\d{10}$/;
    if(!a.test(phone)){
        document.getElementById("phoneSpan").innerHTML="不符合规范"
    }else {
        document.getElementById("phoneSpan").innerHTML=""
    }
}
function checkPwd() {
    var pwd = document.getElementById("pwd1").value;
    if (pwd.length < 8) {
        document.getElementById("pwd1Span").innerHTML = "不少于8位"
    } else if(!isNaN(pwd)){
        document.getElementById("pwd1Span").innerHTML = "不能为纯数字"
    }else {
        document.getElementById("pwd1Span").innerHTML=""
    }
}
function checkPwd2(){
    var pwd=document.getElementById("pwd1").value;
    var pwd2=document.getElementById("pwd2").value;
    if(pwd!=pwd2){
        document.getElementById("pwd2Span").innerHTML="两次输入不一致"
    }else {
        document.getElementById("pwd2Span").innerHTML=""
    }
}
function checkName(){
    var name=document.getElementById("name").value;
    if(name.length<2){
        document.getElementById("nameSpan").innerHTML="用户名不能少于2位"
    }else{
        document.getElementById("nameSpan").innerHTML=""
    }
}
function checkCid(){
    var cid=document.getElementById("cid").value;
    var a=/(^\d{15}$)|(^\d{17}(\d|X)$)/;
    if(!a.test(cid)){
        document.getElementById("cidSpan").innerHTML="不符合规范"
    }else {
        document.getElementById("cidSpan").innerHTML=""
    }
}
function checkCh() {
    if (document.getElementById("ch").checked == true) {
        document.getElementById("input3").style.background = "#ff9900";
        document.getElementById("input3").disabled = "";
        //给BUTTON按钮的disabled属性赋值
    } else {
        document.getElementById("input3").style.background = "#dddddd";
        document.getElementById("input3").disabled = "disabled";
    }
}

function one(){
    var phone1=document.getElementById("input1").value;
    var a=/^1\d{10}$/;
    if(!a.test(phone1)){
        document.getElementById("phone1Span").innerHTML="不符合规范"
    }else {
        document.getElementById("phone1Span").innerHTML=""
    }
}
function checkPwd3() {
    var pwd = document.getElementById("input2").value;
    if (pwd.length < 8) {
        document.getElementById("pwdSpan").innerHTML = "不少于8位"
    } else if(!isNaN(pwd)){
        document.getElementById("pwdSpan").innerHTML = "不能为纯数字"
    }else {
        document.getElementById("pwdSpan").innerHTML=""
    }
}
function checkPwd4(){
    var pwd=document.getElementById("input2").value;
    var pwd2=document.getElementById("input5").value;
    if(pwd!=pwd2){
        document.getElementById("pwd3Span").innerHTML="两次输入不一致"
    }else {
        document.getElementById("pwd3Span").innerHTML=""
    }
}
/*----------选项卡----------*/
function shouji(){
    document.getElementById("right1").style.display="block";
    document.getElementById("right2").style.display="none";
    document.getElementById("right3").style.display="none";
}
function putong(){
    document.getElementById("right1").style.display="none";
    document.getElementById("right2").style.display="block";
    document.getElementById("right3").style.display="none";
}
function denglu(){
    document.getElementById("right1").style.display="none";
    document.getElementById("right2").style.display="none";
    document.getElementById("right3").style.display="block";
}