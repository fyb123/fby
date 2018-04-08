<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 18/1/5 005
 * Time: 上午 10:09
 */
$width=200;
$height=40;
$image = imagecreatetruecolor($width,$height);
$white = imagecolorallocate($image,255,255,255);
imagefilledrectangle($image,0,0,$width,$height,$white);
function getRandColor($image){
return imagecolorallocate($image,mt_rand(0,255),mt_rand(0,255),mt_rand(0,255));
}

//快速创建字符串 $string='asdfffsadfeqwtdg12345'
$string=join('',array_merge(range(0,9),range("a","z"),range("A","Z")));
//echo $string;
$string1="";
$length = 4;
for($i=0;$i<$length;$i++){
//    $randColor=imagecolorallocate($image,mt_rand(0,255),mt_rand(0,255),mt_rand(0,255));
    $randColor=getRandColor($image);
    $size=mt_rand(20,28);
    $angle=mt_rand(-15,15);
    $x=20+40*$i;
    $y=30;
    $text=substr(str_shuffle($string),0,1);
    $string1=$string1.$text;
    imagettftext($image,$size,$angle,$x,$y,$randColor,"c:\WINDOWS\Fonts\MingLiU.ttc",$text);//迷你简汉真广标 MingLiU
}
session_start();
$_SESSION['code']=$string1;
for($i=0;$i<50;$i++){
    imagesetpixel($image,mt_rand(0,$width),mt_rand(0,$height),getRandColor($image));
}
//绘制线段做干扰元素
for($i=1;$i<=3;$i++){
    imageline($image,mt_rand(0,$width),mt_rand(0,$height),mt_rand(0,$width),mt_rand(0,$height),getRandColor($image));
}
//绘制圆弧做干扰元素
for($i=1;$i<=2;$i++){
    imagearc($image,mt_rand(0,$width),mt_rand(0,$height),mt_rand(0,$width/2),mt_rand(0,$height/2)
        ,mt_rand(0,360),mt_rand(0,360),getRandColor($image));
}
header('content-type:image/png');
imagepng($image);





