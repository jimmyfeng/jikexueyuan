<?php

//上传文件类型列表
include('conn.php');

$uptypes=array(
    'image/jpg',
    'image/jpeg',
    'image/png',
    'image/pjpeg',
    'image/gif',
    'image/bmp',
    'image/x-png'
);


$max_file_size=5000000;     //上传文件大小限制, 单位BYTE
$destination_folder="../images/newsPic/"; //上传文件路径

if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
    if (!is_uploaded_file($_FILES["upfile"]['tmp_name']))
    //是否存在文件
    {
        echo "<script type='text/javascript'>alert('图片不存在!');history.go(-1);</script>";
         exit;
    }

    $file = $_FILES["upfile"];
    if($max_file_size < $file["size"])
    //检查文件大小
    {
        echo "<script type='text/javascript'>alert('文件太大!');history.go(-1);</script>";
        exit;
    }

    if(!in_array($file["type"], $uptypes))
    //检查文件类型
    {
        echo "<script type='text/javascript'>alert('文件类型不符!".$file["type"]."');history.go(-1);</script>";
        exit;
    }

    ///////获得注册id
    $mediacount_query = mysql_query("select count(*) from news");
    if ($mediaid_array = mysql_fetch_array($mediacount_query)) {
        $mediaid = $mediaid_array['count(*)'] + 1;
    }
    $filename = $file["tmp_name"];
    $pinfo = pathinfo($file["name"]);
    $ftype = $pinfo['extension'];
    $destination = $destination_folder.$mediaid.".".$ftype;
    // if (file_exists($destination) && $overwrite != true)
    // {
    //     // echo "同名文件已经存在了";
    //     header("refresh:0;url=../guanli.html");
    // }
    ///important 上传文件的一步
    if(!move_uploaded_file ($filename, $destination))
    {
        echo "移动文件出错";
        exit;
    }

    $pinfo=pathinfo($destination);
    $fname=$pinfo['basename'];
    // echo " <font color=red>已经成功上传</font><br>文件名:  <font color=blue>".$destination_folder.$fname."</font><br>";
    ///生成文件type

    //包含数据库连接文件
    ///////////////
    $media_url = $destination_folder.$fname;
    $media_url = substr($media_url, 3);
    $upload_time = date('Y-m-d',time());
    $media_id = $_POST['id'];
    $media_title = $_POST['title'];
    $media_detail = $_POST['detail'];
    $media_type = $_POST['type'];
    // echo($media_url.$upload_time.$media_title.$media_detail.$media_type);
    $sql = "UPDATE news SET title='$media_title',detail='$media_detail',date='$upload_time',pic_url='$media_url',news_type='$media_type' WHERE id='$media_id'";
    if(mysql_query($sql,$conn)){
        echo "<script type='text/javascript'>alert('修改成功');</script>";
        header("refresh:0;url=../guanli.html");
    } else {
        echo "<script type='text/javascript'>alert('抱歉！修改失败：',mysql_error(),'<br />');history.go(-1);</script>";
        echo '点击此处 <a href="javascript:history.back(-1);">返回</a> 重试<br />';
    }
}
?>