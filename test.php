<?php 
require_once 'config.php';
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} 
 
$sql = "SELECT topic, content, email  FROM waiting";
$result = $conn->query($sql);
 
if ($result->num_rows > 0) {
    // 输出数据
    while($row = $result->fetch_assoc()) { 
        echo "标题: " . $row["topic"]. " - 内容: " . $row["content"]. " - 邮箱:  " . $row["email"]. "<br>";
    }
} else {
    echo "0 结果";
}
$conn->close();
?>