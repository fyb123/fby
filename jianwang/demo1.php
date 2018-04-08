<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 18/1/8 008
 * Time: 下午 4:13
 */
class DBServe{
    private $dbname;//数据库名称;
    private $pwd;//密码;
    private $con;//连接;
    private $host;//地址
    private $username;//登录是的name root
    function __construct($dbname1,$pwd1,$host1,$username1)
    {
        $this->host = $host1;
        $this->username = $username1;
        $this->pwd = $pwd1;
        $this->dbname = $dbname1;
        //连接数据库
        $this->con = mysql_connect($this->host,$this->username,$this->pwd);
        //选择数据库   registered
        function selectdb($username){
            mysql_select_db($username,$this->con);
        }
        //查！！！
        function selectData(){
            $sql = "select * from root order by id asc";
            mysql_query($sql,$this->con);
        }
        //插入数据 表root
        function addData($name,$content){
            $sql = "insert into root(username,password) values ('$name','$content')";
            mysql_query($sql,$this->con);
        }
    }
}
$thing = new DBServe('registered','root','localhost','root');//$dbname1,$pwd1,$host1,$username1