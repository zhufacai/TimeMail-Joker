<?php 
require_once '../config.php';
$sql = "SELECT * FROM sent";
$result = $conn->query($sql);
//把数据集合转化为二维数组
$arr = [];
while ($row = mysqli_fetch_assoc($result)){
    $arr[] = $row;
}
// print_r($arr);
?>
<?php
    require_once "header.php";
?>
<div class="mdui-container">
  <h2 style="font-weight:400">已投递邮件列表</h2>
      <ul class="nav"
        <?php
        foreach ($arr as $val){ ?>
            <li><?php echo $val['topic']?><?php echo $val['content']?><?php echo $val['email']?></li>
       <?php } ?>
      </ul>
</div>
   <?php require_once "footer.php"; ?>