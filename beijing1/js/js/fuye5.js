/**
 * Created by lenovo on 2017/6/21.
 */
function one(){
    var name=document.getElementById("gong").value;
    if(name.length<4){
        document.getElementById("gongSpan").innerHTML="用户名不能少于4位"
    }else{
        document.getElementById("gongSpan").innerHTML=""
    }
}
function checkName(){
    var name=document.getElementById("name").value;
    if(name.length<4){
        document.getElementById("nameSpan").innerHTML="用户名不能少于4位"
    }else{
        document.getElementById("nameSpan").innerHTML=""
    }
}
function checkPhone(){
    var phone=document.getElementById("Phone").value;
    var a=/^1\d{10}$/;
    if(!a.test(phone)){
        document.getElementById("phoneSpan").innerHTML="不符合规范"
    }else {
        document.getElementById("phoneSpan").innerHTML=""
    }
}
function checkEmail(){
    var email=document.getElementById("email").value;
    var a=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if(!a.test(email)){
        document.getElementById("emailSpan").innerHTML="不符合规范"
    }else {
        document.getElementById("emailSpan").innerHTML=""
    }
}
function checkPwd(){
    var pwd = document.getElementById("pwd").value;
    if (pwd.length < 8) {
        document.getElementById("pwdSpan").innerHTML = "不少于8位"
    } else if(!isNaN(pwd)){
        document.getElementById("pwdSpan").innerHTML = "不能为纯数字"
    }else {
        document.getElementById("pwdSpan").innerHTML=""
    }
}