<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 18/1/8 008
 * Time: 下午 7:23
 */
include ("demo06.php");
$litterAnimate = new Dag(200,40);
$litterAnimate->huyuqiang();
$litterAnimate->bb();
mysql_close($litterAnimate);