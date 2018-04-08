<?php
    class Dag{
        private $width;
        private $height;
        private $image;
        private $white;
        private $string;
        private $string1;
        private $length;
        private $randColor;
        private $size;
        private $angle;
        private $x;
        private $y;
        private $text;
        function __construct($width1,$height1)
        {
            $this->width=$width1;
            $this->height=$height1;
            $this->image=imagecreatetruecolor($width1,$height1);//创建画布
            $this->white = imagecolorallocate($this->image,255,255,255);//白色背景
            $this->string=join("",array_merge(range(0,9),range("a","z"),range("A","Z")));
            imagefilledrectangle($this->image,0,0,$this->width,$this->height,$this->white);//填充白色背景
            $this->string1="";
            $this->length = 4;
        }

        function huyuqiang(){
            session_start();

            for($i=0;$i<$this->length;$i++){
                $this->randColor = imagecolorallocate($this->image,mt_rand(0,255),mt_rand(0,255),mt_rand(0,255));
                $this->size=mt_rand(20,28);
                $this->angle=mt_rand(-15,15);
                $this->x=20+40*$i;
                $this->y=30;
                $this->text=substr(str_shuffle($this->string),0,1);
                $this->string1=$this->string1.$this->text;
                imagettftext($this->image,$this->size,$this->angle,$this->x,$this->y,$this->randColor,"c:\WINDOWS\Fonts\MingLiU.ttc",$this->text);//迷你简汉真广标 MingLiU
            }
            $_SESSION['code']=$this->string1;
            //echo $this->string1;
        }
        function bb(){
            header('content-type:image/png');
            imagepng($this->image);
            imagedestroy($this->image);
        }
    }

?>