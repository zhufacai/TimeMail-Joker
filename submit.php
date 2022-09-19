<?php
require_once('./config.php');
$time = $_POST['deliverTime'];
$content = $_POST['content'];
$email = $_POST['email'];
$topic = $_POST['title'];
//获取传值
$time = str_replace('📅 ','',$time);
$time = str_replace('年','-',$time);
$time = str_replace('月','-',$time);
$timex = str_replace('日','',$time);

$time = strtotime($timex);
if (empty($time) || empty($content) || empty($email) || empty($topic)) {
  echo "请检查表单是否填写完整!";
  exit();
}
$timereal = $timenow = time();
//判断收信时间与当前时间先后
$code = null;
$str = "17hj0q5rtyzxcv89bn34o6sdfguiwepa2klm";
$max = strlen($str)-1;
for ($i = 0;$i < 50; $i++) {
    $code.= $str[rand(0,$max)];
}
$urll = URL . "check.php?c=$code";
$html = "
<h2>欢迎使用TimeMail - 时光邮局</h2>
&emsp;&emsp;我们发送这封验证邮件以防止他人滥用时光邮局,接下来请点击<a href='$urll'>立即激活</a>来激活您的时光邮件,链接1小时内有效。<br />
&emsp;&emsp;如果您无法点击,请直接访问:$urll <br />
&emsp;&emsp;“未来，在你的世界里，你终会顶天立地！”<br />
&emsp;&emsp;若您并没有在TimeMail发送过邮件,请忽略这封邮件,很抱歉对您的打扰。
";
$return = emailsend($email,"TimeMail邮箱验证",$html);
$sql1 = "INSERT INTO `check` VALUES(uuid(),'$code','$timereal')";
mysqli_query($conn,$sql1);

$selectuid = "select * from `check` where `code`='$code';";
$re = mysqli_query($conn,$selectuid);
$arr = mysqli_fetch_assoc($re);
$uid = $arr['uid'];
//获取uid，防止uid不同
if($result = 200){
  $sql = "INSERT INTO `checking` VALUES('$uid','$topic','$content','$email','$timenow','$time','$ip')";
  mysqli_query($conn,$sql);
  echo 200;
}else{
  echo("错误代码:emailapi error,请联系网站管理员处理!");
  exit();
}
?>