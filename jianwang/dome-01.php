<?php
    header("Content-type:text/html;charset=utf-8");
    $username = $_GET['username'];//在本php文件中获取index.html中的name为username
    $passwords = $_GET['passwords'];//在本php文件中获取index.html中的name为passwords 注意：password为关键字，不能命名；
    
    $conn = mysqli_connect('localhost','root','root','registered');//连接服务器；如果连接成功$conn返回一个布尔值：ture；反之；返回false； 是否成功连接数据库可以这样判断：如下
    //if($conn){
    //    echo "恭喜您，连接成功！！!";
    //}else{
    //    echo "警告:找不到服务器：Can not find the server,这有可能会影响您的下一步操作";
    //}

    $sql = "select username from root where username = '$username'";//查！！！这个字段为sql语句，获取的是数据库里的存在与index.html里注册的昵称相同的字段有几条；然而这个数据得需要解析才能投入使用；
    $res = $conn->query($sql);//解析数据第一步
    $s = mysqli_num_rows($res);//解析数据第二步，解析出来的就是num类型的，可以投入使用； 
    
    if($s>=1){
        echo "抱歉，你输入的账号在数据库里存在".$s."个<br><h1>本次注册失败！</h1>";

    }else{
        $sql = "insert into root values('$username','$passwords')";//增！！！ 将新的昵称username添加至数据库mysql中
        $conn->query($sql);
        echo "<h1>恭喜您，本次注册成功！！！</h1>";

    }

?>