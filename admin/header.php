<!DOCTYPE html>
<?php require_once "../config.php"; ?>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no">
  <meta http-equiv="Cache-Control" content="no-siteapp" />
  <meta name="description" content="时光邮局可以给未来的自己或Ta写一封信，当数年过后收到来信时，仍然可以沿着时光的记忆，去遇见曾经的自己。" />
  <meta name="keywords" content="TimeMail，时光邮局,给未来写一封信,写给未来的信" />
  <title><?php echo TITLE ?></title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/soxft/cdn@latest/mdui/css/mdui.min.css">
  <script src="https://cdn.jsdelivr.net/gh/soxft/cdn@latest/mdui/js/mdui.min.js"></script>
  <link rel="shortcut icon" type="image/x-icon" href="https://cdn.jsdelivr.net/gh/soxft/cdn@latest/time/img/favicon.ico" media="screen" />
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-159315608-3"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'UA-159315608-3');
  </script>
  <style>
    a {
      text-decoration:none
    }
    a:hover {
      text-decoration:none
    }
  </style>
</head>
<!-- header baota-->
<header class="mdui-appbar mdui-appbar-fixed">
  <body oncontextmenu = "return false" onselectstart = "return false" oncopy = "return false" background="https://cdn.jsdelivr.net/gh/soxft/cdn@latest/time/img/background.png" class="mdui-drawer-body-left mdui-appbar-with-toolbar">
    <div class="mdui-toolbar mdui-color-theme">
      <span class="mdui-btn mdui-btn-icon mdui-ripple" mdui-drawer="{target: '#main-drawer'}">
        <i class="mdui-icon material-icons">menu</i>
      </span>
      <a href="/" class="mdui-typo-title">TimeMail</a>
    </header>
    <div class="mdui-drawer" id="main-drawer">
      <div class="mdui-list" mdui-collapse="{accordion: true}" style="margin-bottom: 68px;">
        <div class="mdui-list">
          <a href="/admin" class="mdui-list-item">
            <i class="mdui-list-item-icon mdui-icon material-icons">filter_none</i>
            &emsp;后台首页
          </a>
          <a href="./sent.php" class="mdui-list-item">
            <i class="mdui-list-item-icon mdui-icon material-icons">mail_outline</i>
            &emsp;已投递邮件
          </a>
          <a href="./waiting.php" class="mdui-list-item">
            <i class="mdui-list-item-icon mdui-icon material-icons">settings</i>
            &emsp;待投递邮件
          </a>
           <a href="./checking.php" class="mdui-list-item">
            <i class="mdui-list-item-icon mdui-icon material-icons">settings</i>
            &emsp;待确认邮件
          </a>
        </div>
       
        </div>
      </div>
    </div>
    <br />