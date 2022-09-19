<?php 
require_once 'config.php';
class Row {
  public function __construct($conn) {
    $this->sql = $conn;
  }

  public function getRow($tablename) {
    $this->commed = mysqli_fetch_assoc(mysqli_query($this->sql,"select * from `TABLES` where `TABLE_NAME`='$tablename'"));
    $this->num = $this->commed['TABLE_ROWS'];
    //所有数据
    echo $this->num;
  }
}

class status {
  var $conn;
  var $seconds;
  
  function __construct($conn) {
    $this->sql = $conn;
  }
  function getRuntime() {
    $this->Starttime = strtotime("2020-11-28");  //开始时间
    $this->Nowtime = strtotime(date("Y-m-d"));
    $this->diff = $this->Nowtime - $this->Starttime;
    $this->Runtime = abs(round($this->diff / 86400));
    echo $this->Runtime;
  }

// 服务是否在运行 | 已发送  | 未发送 | 发送时间段 | 累计运行时间段
}
$status = new status($conn);
$row = new Row($conns);

?>
<!DOCTYPE html>
<html lang="zh-cmn-Hans">
    
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
        <link rel="apple-touch-icon" sizes="57x57" href="/static/image/apple-touch-icon-57x57.f67d52e2.png">
        <link rel="apple-touch-icon" sizes="60x60" href="/static/image/apple-touch-icon-60x60.41eef56a.png">
        <link rel="apple-touch-icon" sizes="72x72" href="/static/image/apple-touch-icon-72x72.4cd64ca4.png">
        <link rel="apple-touch-icon" sizes="76x76" href="/static/image/apple-touch-icon-76x76.ff563df9.png">
        <link rel="apple-touch-icon" sizes="114x114" href="/static/image/apple-touch-icon-114x114.139be801.png">
        <link rel="apple-touch-icon" sizes="120x120" href="/static/image/apple-touch-icon-120x120.d4a2d62a.png">
        <link rel="apple-touch-icon" sizes="144x144" href="/static/image/apple-touch-icon-144x144.a45e4468.png">
        <link rel="apple-touch-icon" sizes="152x152" href="/static/image/apple-touch-icon-152x152.c08fcb31.png">
        <link rel="apple-touch-icon" sizes="180x180" href="/static/image/apple-touch-icon-180x180.6e5ccc8c.png">
        <link rel="icon" type="image/png" sizes="192x192" href="/static/image/android-icon-192x192.715c9d3b.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/static/image/favicon-32x32.179d04d1.png">
        <link rel="icon" type="image/png" sizes="96x96" href="/static/image/favicon-96x96.2ea41869.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/static/image/favicon-16x16.1ac0e6bd.png">
        <meta name="msapplication-TileColor" content="#ffffff"><meta name="msapplication-TileImage" content="/static/image/apple-touch-icon-144x144.a45e4468.png">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="/apple-touch-icon-144x144.a45e4468.png">
        <meta name="theme-color" content="#ffffff">
        <title><?php echo TITLE ?></title>
        <meta name="description" content="时光邮局可以给未来的自己或Ta写一封信，当数年过后收到来信时，仍然可以沿着时光的记忆，去遇见曾经的自己。">
        <meta name="keywords" content="TimeMail，时光邮局,给未来写一封信,写给未来的信">
        <meta name="baidu-site-verification" content="code-zsFidPfnaE" />
        <meta name="baidu-site-verification" content="code-n0smg9OGNG" />
        <link rel="stylesheet" href="static/css/src.0044f4c7.css">
    <script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?ad7bf829c64837efdf0f7209ce509b63";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
</head>
    
    <body class="landing-page js-controller" data-controller="LandingPageController">
        <header class="header-desktop js-nav-desktop js-nav js-header">
            <div class="nav-wrapper">
                <a href="" class="logo-wrap js-logo-wrap">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewbox="0 0 112 33" class="logo-main js-logo-main">
                        <g fill="none" fill-rule="evenodd">
                            <path fill="#0680FE" d="M14.378.16L32.84 18.622c.342.341.1.925-.383.925H13.453V.543c0-.483.584-.724.925-.383"></path>
                            <path fill="#000" fill-opacity=".1" d="M19.384 13.48l6.059 6.06h-6.06z"></path>
                            <path fill="#64D0FF" d="M18.622 32.713L.16 14.25a.542.542 0 01.383-.924h18.462c.3 0 .542.242.542.541V32.33a.542.542 0 01-.925.383"></path>
                        </g>
                    </svg> <a href="" class="logo-txt">时光邮局</a> 
                    <div class="badge">Beta</div>
                    <div class="nav-links">
                        <ul>
                            <li class="nav-link additional"> <a class="js-nav-link js-write" href="javascript:;">开始写信</a> 
                            </li>
                        </ul>
                    </div>
            </div>
        </header>
        <header class="header-mobile js-nav-mobile js-nav js-header js-controller" data-controller="PageHeaderController">
            <div class="nav-wrapper">
                <a href="" class="logo-wrap js-logo-wrap">
                    <svg xmlns="http://www.w3.org/2000/svg" width="112" height="33" class="logo-main js-logo-main">
                        <g fill="none" fill-rule="evenodd">
                            <path fill="#0680FE" d="M14.378.16L32.84 18.622c.342.341.1.925-.383.925H13.453V.543c0-.483.584-.724.925-.383"></path>
                            <path fill="#000" fill-opacity=".1" d="M19.384 13.48l6.059 6.06h-6.06z"></path>
                            <path fill="#64D0FF" d="M18.622 32.713L.16 14.25a.542.542 0 01.383-.924h18.462c.3 0 .542.242.542.541V32.33a.542.542 0 01-.925.383"></path>
                        </g>
                    </svg> <a href="" class="logo-txt">时光邮局</a> 
                    <div class="badge">Beta</div>
                    <div class="nav-links"> <a class="js-nav-link js-write" href="javascript:;">开始写信</a> 
                    </div>
            </div>
        </header>
        <div class="wrapper js-doc">
            <div class="pattern-container"></div>
            <div class="content">
                <div class="circle-blue">
                    <div class="pattern"></div>
                </div>
                <section id="get-started">
                    <div class="circle-wrap">
                        <div class="circle-blue">
                            <div class="pattern"></div>
                        </div>
                    </div>
                    <div class="content-section section-top">
                        <div class="circle-grey"></div>
                        <div class="title-block">
                             <h1 class="main-title"> 给未来写封信 </h1> 
                            <p class="description">多年以后，愿你不负所期</p>
                        </div>
                        <div class="statistic-block">
                            <div class="button-wrap"> <a class="button ga-l-get-started js-write" href="javascript:;">开始写信</a> 
                            </div>
                            <div class="statistic">
                                <div class="section">
                                    <div class="count spincrement"><?php $row->getRow("waiting");?></div>
                                    <p class="description">封信件待投递</p>
                                </div>
                                <div class="section">
                                    <div class="count spincrement"><?php $row->getRow("sent");?></div>
                                    <p class="description">封信件已投递</p>
                                </div>
                                <div class="section">
                                    <div class="count spincrement"><?php $status->getRuntime();?></div>
                                    <p class="description">天已持续</p>
                                </div>
                            </div>
                        </div>
                        <div class="screen-block">
                            <img class="animated fadeInRightBig" src="static/picture/banner.f22b71eb.jpeg" alt="Banner">
                        </div>
                        <div class="integration-block-mobile">
                            <img src="static/picture/feature.cc2cae90.png" alt="Feature" class="feature-banner-mobile animated fadeInRightBig">
                        </div>
                    </div>
                </section>
                <section id="features">
                    <div class="content-section section-features">
                         <h1 class="section-title"> 箴言 </h1> 
                        <div class="uikit-title-line"></div>
                        <ul class="features">
                            <li class="feature js-feature-block">
                                <div class="description">
                                     <h2 class="title"> “长风破浪会有时，直挂云帆济沧海” </h2> 
                                    <p class="text">－－ 李白</p>
                                </div>
                            </li>
                            <li class="feature js-feature-block">
                                <div class="description">
                                     <h2 class="title"> “抛弃时间的人，时间也抛弃他” </h2> 
                                    <p class="text">－－ 莎士比亚</p>
                                </div>
                            </li>
                            <li class="feature js-feature-block">
                                <div class="description">
                                     <h2 class="title"> “人生中你所经历的一切，都取决于你自己” </h2> 
                                    <p class="text">－－ 高尔基</p>
                                </div>
                            </li>
                            <li class="feature js-feature-block">
                                <div class="description">
                                     <h2 class="title"> “天可补，海可填，南山可移，日月既往，不可复追” </h2> 
                                    <p class="text">－－ 曾国藩</p>
                                </div>
                            </li>
                            <li class="feature js-feature-block">
                                <div class="description">
                                     <h2 class="title"> “未来，在你的世界里，你终会顶天立地” </h2> 
                                    <p class="text">－－ 拉迪亚德·吉卜林</p>
                                </div>
                            </li>
                            <li class="feature js-feature-block">
                                <div class="description">
                                     <h2 class="title"> “所谓自由，不是随心所欲，而是自我主宰” </h2> 
                                    <p class="text">－－ 康德</p>
                                </div>
                            </li>
                        </ul>
                        <div class="integration-block">
                            <img src="static/picture/feature.cc2cae90.png" alt="Feature" class="feature-banner">
                        </div>
                    </div>
                </section>
                <section id="about">
                    <div class="content-section section-about">
                         <h1 class="section-title"> 关于 </h1> 
                        <div class="uikit-title-line"></div>
                        <div class="info-blocks-wrap">
                            <div class="info-block">
                                <div class="icon">
                                    <svg xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <use xlink:href="#l-circle-blue"></use>
                                    </svg>
                                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="upper js-icon">
                                        <use xlink:href="#l-rocket"></use>
                                    </svg>
                                </div>
                                <div class="description">
                                     <h2 class="title"> 为什么要给未来写信？ </h2> 
                                    <p class="text">时间是让人猝不及防的东西，岁月是一场有去无回的旅行。我们永远无法预见未来会发生什么，也无法拾起已逝去的时光。<br>即使回忆消散，岁月漫长。<br>我们可以趁现在给未来的自己或Ta写一封信，当数年过后收到来信时，仍然可以沿着时光的记忆，去遇见曾经的自己。</p>
                                </div>
                            </div>
                            <div class="info-block">
                                <div class="icon">
                                    <svg xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <use xlink:href="#l-circle-blue"></use>
                                    </svg>
                                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="upper js-icon">
                                        <use xlink:href="#l-flag"></use>
                                    </svg>
                                </div>
                                <div class="description">
                                     <h2 class="title"> 可以给任何人写信吗？ </h2> 
                                    <p class="text">为了防止骚扰和营销邮件，每次写信后都会往您填写的收件箱发送一封验证邮件，点击了验证邮件确认后，未来才会收到写的信。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <footer class="footer">
                <div class="wrap">
                    <div class="footer-row first">
                        <div class="items"><a class="item active" a href="mailto:post@timemail.me" target="_blank">联系邮差：post@timemail.me </a>
                                           <a class="item active" href="https://commerce.coinbase.com/checkout/f0c094c6-502b-45c5-8aed-7bb83d73ca00" target="_blank">赞助邮局：Donate TimeMail</a>
                        </div> <span class="copyright"> &copy <?php echo date("Y") ?> 时光邮局丨<a class="item active" a href="https://www.joker.cc/" target="_blank">Joker</a>提供维护和技术支持</span>
                    </div>
                </div>
            </footer>
        </div>
        <section id="editor-container">
            <div class="editor-outer">
                <div class="header">
                    <input type="text" class="title-input J_title" value="一封来自" placeholder="信件标题">
                </div>
                <div class="editor J_editor">
                    <p>你好，未来的我………</p>
                </div>
                <div class="deliver-info">
                    <div class="deliver-hd">投递时间</div>
                    <div class="deliver-c">
                        <input type="text" id='tmex' placeholder="📅 2028年07月10日" class="deliver-time J_deliverTime">
                    </div>
                    <br>
                    <div class="deliver-hd">收信邮箱</div>
                    <div class="deliver-c">
                        <input type="email" placeholder="✉️ post@timemail.me" class="deliver-email J_deliverEmail">
                    </div>
                    <div class="deliver-c">
                        <p class="warning J_warning"></p>
                    </div>
                    <div class="deliver-c3"> <a href="javascript:;" onclick='send()l' class="deliver-btn">投递</a> 
                    </div>
                </div>
                <div class="success-info">
                    <p>恭喜你，投递成功！！！</p>
                    <p>为了时光邮局不被滥用，请前往您的邮箱激活您投递的邮件。</p>
                    <p>只有激活的邮件，才会投递哦~~</p>
                    <br>
                    <p>Tips:</p>
                    <p>有时候，时光邮局的邮件会被放入垃圾箱~~</p>
                    <p>为了以后能及时收到邮件，强烈建议你把我们的邮箱post@timemail.me 加入白名单~~</p>
                </div>
            </div>
        </section>
        <section id="loading">
            <div class="loading-part loading-part1"></div>
            <div class="loading-part loading-part2"></div>
            <div class="loading-part loading-part3"></div>
        </section>
        <div>
            <svg xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                    <symbol id="l-plus" viewbox="0 0 40 40">
                        <defs>
                            <rect id="path-1" x="0" y="0" width="40" height="40" rx="8"></rect>
                        </defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Group">
                                <mask id="mask-2" fill="#fff">
                                    <use xlink:href="#path-1"></use>
                                </mask>
                                <rect id="path-1" stroke="#B9C2C8" stroke-width="4" fill="#FFF" fill-rule="nonzero" stroke-dasharray="4" mask="url(#mask-2)" x="0" y="0" width="40" height="40" rx="8"></rect>
                                <path d="M22 18v-4a2 2 0 10-4 0v4h-4a2 2 0 100 4h4v4a2 2 0 104 0v-4h4a2 2 0 100-4h-4z" id="Combined-Shape" fill="#B9C2C8" fill-rule="nonzero" mask="url(#mask-2)"></path>
                            </g>
                        </g>
                    </symbol>
                    <symbol id="l-man" viewbox="0 0 40 40">
                        <g fill="none" fill-rule="evenodd">
                            <path fill="#B9C2C8" d="M0 0h40v40H0z"></path>
                            <path fill="#FFF" d="M18 18c-2.208 0-4-1.792-4-4s1.792-4 4-4 4 1.792 4 4-1.792 4-4 4zm10 2h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3zm-8 6a2 2 0 012 2v2H12a2 2 0 01-2-2v-2c0-2 5.372-4 8-4v2a2 2 0 002 2z"></path>
                        </g>
                    </symbol>
                    <symbol id="l-up-grey" viewbox="0 0 40 40">
                        <g fill="none" fill-rule="evenodd">
                            <path fill="#B9C2C8" d="M0 0h40v40H0z"></path>
                            <path fill="#FFF" d="M20 14h-.042l.02-.02L20 14zm-5.416 4.979L18 15.816v12.182a2 2 0 004 0V15.816l3.416 3.163a1.6 1.6 0 002.142 0 1.33 1.33 0 000-1.982L20 10l-7.556 6.997a1.328 1.328 0 000 1.982 1.597 1.597 0 002.14 0z"></path>
                        </g>
                    </symbol>
                    <symbol id="l-down-grey" viewbox="0 0 40 40">
                        <g fill="none" fill-rule="evenodd">
                            <path fill="#B9C2C8" d="M0 0h40v40H0z"></path>
                            <path fill="#FFF" d="M20 26h.042l-.02.02L20 26zm5.416-4.979L22 24.184V12.002a2 2 0 00-4 0v12.182l-3.416-3.163a1.6 1.6 0 00-2.142 0 1.331 1.331 0 000 1.982L20 30l7.556-6.997a1.328 1.328 0 000-1.982 1.597 1.597 0 00-2.14 0z"></path>
                        </g>
                    </symbol>
                    <symbol id="l-update" viewbox="0 0 40 40">
                        <g fill="none" fill-rule="evenodd">
                            <path fill="#B9C2C8" d="M0 0h40v40H0z"></path>
                            <path fill="#FFF" d="M18.977 7.174l-5.227 5.194 5.227 5.195A.6.6 0 0020 17.137V13.61c4.137 0 7.5 3.34 7.5 7.452s-3.363 7.453-7.5 7.453c-4.137 0-7.5-3.341-7.5-7.453H10C10 26.553 14.475 31 20 31s10-4.447 10-9.937c0-5.49-4.475-9.937-10-9.937V7.6a.6.6 0 00-1.023-.426z"></path>
                        </g>
                    </symbol>
                    <symbol id="l-circles-grey" viewbox="0 0 40 40">
                        <g fill="none" fill-rule="evenodd">
                            <path fill="#B9C2C8" d="M0 0h40v40H0z"></path>
                            <path fill="#FFF" d="M24.964 21.796a7.508 7.508 0 00-6.76-6.76C18.848 12.713 20.976 11 23.5 11c3.032 0 5.5 2.467 5.5 5.5 0 2.525-1.713 4.652-4.036 5.296m-6.937-4.769a5.508 5.508 0 014.947 4.946 5.507 5.507 0 01-4.947-4.946M17.5 28a5.506 5.506 0 01-5.5-5.5c0-2.525 1.713-4.652 4.036-5.296a7.508 7.508 0 006.76 6.76C22.152 26.287 20.025 28 17.5 28m6-19c-3.668 0-6.723 2.648-7.369 6.131C12.648 15.777 10 18.832 10 22.5c0 4.136 3.364 7.5 7.5 7.5 3.668 0 6.723-2.647 7.369-6.131C28.353 23.223 31 20.168 31 16.5c0-4.136-3.364-7.5-7.5-7.5"></path>
                        </g>
                    </symbol>
                    <symbol id="l-play" viewbox="0 0 8 10">
                        <path fill-rule="evenodd" d="M0 0v10l7.857-5z"></path>
                    </symbol>
                    <symbol id="l-hotkey-n" viewbox="0 0 60 30">
                        <g fill="none" fill-rule="evenodd">
                            <path stroke="#99AAB4" stroke-width="2" d="M1 4v22a3 3 0 003.007 3h51.986A3.004 3.004 0 0059 26V4a3 3 0 00-3.007-3H4.007A3.004 3.004 0 001 4z"></path>
                            <path fill="#99AAB4" d="M16.62 10.028L16.596 10 12 13.857l.643.766 3.977-3.337 3.976 3.337.643-.766L16.643 10l-.023.028z"></path>
                            <text fill="#99AAB4" font-family="HelveticaNeue, Helvetica Neue" font-size="14">
                                <tspan x="38" y="20">N</tspan>
                            </text>
                            <path fill="#99AAB4" d="M33 16h-1v-2h1a2 2 0 10-2-2v1h-2v-1a2 2 0 10-2 2h1v2h-1a2 2 0 102 2v-1h2v1a2 2 0 102-2zm-1-4a1.001 1.001 0 012 0c0 .551-.449 1-1 1h-1v-1zm-5 1a1.001 1.001 0 010-2c.551 0 1 .449 1 1v1h-1zm1 5a1.001 1.001 0 01-2 0c0-.551.449-1 1-1h1v1zm1-2v-2h2v2h-2zm4 3c-.551 0-1-.448-1-1v-1h1a1.001 1.001 0 010 2z"></path>
                        </g>
                    </symbol>
                    <symbol id="l-hotkey-u" viewbox="0 0 60 30">
                        <g fill="none" fill-rule="evenodd">
                            <path stroke="#99AAB4" stroke-width="2" d="M1 4v22a3 3 0 003.007 3h51.986A3.004 3.004 0 0059 26V4a3 3 0 00-3.007-3H4.007A3.004 3.004 0 001 4z"></path>
                            <path fill="#99AAB4" d="M16.62 10.028L16.596 10 12 13.857l.643.766 3.977-3.337 3.976 3.337.643-.766L16.643 10l-.023.028z"></path>
                            <text fill="#99AAB4" font-family="HelveticaNeue, Helvetica Neue" font-size="14">
                                <tspan x="38" y="20">U</tspan>
                            </text>
                            <path fill="#99AAB4" d="M33 16h-1v-2h1a2 2 0 10-2-2v1h-2v-1a2 2 0 10-2 2h1v2h-1a2 2 0 102 2v-1h2v1a2 2 0 102-2zm-1-4a1.001 1.001 0 012 0c0 .551-.449 1-1 1h-1v-1zm-5 1a1.001 1.001 0 010-2c.551 0 1 .449 1 1v1h-1zm1 5a1.001 1.001 0 01-2 0c0-.551.449-1 1-1h1v1zm1-2v-2h2v2h-2zm4 3c-.551 0-1-.448-1-1v-1h1a1.001 1.001 0 010 2z"></path>
                        </g>
                    </symbol>
                    <symbol id="l-hotkey-s" viewbox="0 0 60 30">
                        <g fill="none" fill-rule="evenodd">
                            <path stroke="#99AAB4" stroke-width="2" d="M1 4v22a3 3 0 003.007 3h51.986A3.004 3.004 0 0059 26V4a3 3 0 00-3.007-3H4.007A3.004 3.004 0 001 4z"></path>
                            <path fill="#99AAB4" d="M16.62 10.028L16.596 10 12 13.857l.643.766 3.977-3.337 3.976 3.337.643-.766L16.643 10l-.023.028z"></path>
                            <text fill="#99AAB4" font-family="HelveticaNeue, Helvetica Neue" font-size="14">
                                <tspan x="38" y="20">S</tspan>
                            </text>
                            <path fill="#99AAB4" d="M33 16h-1v-2h1a2 2 0 10-2-2v1h-2v-1a2 2 0 10-2 2h1v2h-1a2 2 0 102 2v-1h2v1a2 2 0 102-2zm-1-4a1.001 1.001 0 012 0c0 .551-.449 1-1 1h-1v-1zm-5 1a1.001 1.001 0 010-2c.551 0 1 .449 1 1v1h-1zm1 5a1.001 1.001 0 01-2 0c0-.551.449-1 1-1h1v1zm1-2v-2h2v2h-2zm4 3c-.551 0-1-.448-1-1v-1h1a1.001 1.001 0 010 2z"></path>
                        </g>
                    </symbol>
                    <symbol id="l-hotkey-l" viewbox="0 0 60 30">
                        <g fill="none" fill-rule="evenodd">
                            <path stroke="#99AAB4" stroke-width="2" d="M1 4v22a3 3 0 003.007 3h51.986A3.004 3.004 0 0059 26V4a3 3 0 00-3.007-3H4.007A3.004 3.004 0 001 4z"></path>
                            <path fill="#99AAB4" d="M16.62 10.028L16.596 10 12 13.857l.643.766 3.977-3.337 3.976 3.337.643-.766L16.643 10l-.023.028z"></path>
                            <text fill="#99AAB4" font-family="HelveticaNeue, Helvetica Neue" font-size="14">
                                <tspan x="38" y="20">L</tspan>
                            </text>
                            <path fill="#99AAB4" d="M33 16h-1v-2h1a2 2 0 10-2-2v1h-2v-1a2 2 0 10-2 2h1v2h-1a2 2 0 102 2v-1h2v1a2 2 0 102-2zm-1-4a1.001 1.001 0 012 0c0 .551-.449 1-1 1h-1v-1zm-5 1a1.001 1.001 0 010-2c.551 0 1 .449 1 1v1h-1zm1 5a1.001 1.001 0 01-2 0c0-.551.449-1 1-1h1v1zm1-2v-2h2v2h-2zm4 3c-.551 0-1-.448-1-1v-1h1a1.001 1.001 0 010 2z"></path>
                        </g>
                    </symbol>
                    <symbol id="l-hotkey-r" viewbox="0 0 60 30">
                        <g fill="none" fill-rule="evenodd">
                            <path stroke="#99AAB4" stroke-width="2" d="M1 4v22a3 3 0 003.007 3h51.986A3.004 3.004 0 0059 26V4a3 3 0 00-3.007-3H4.007A3.004 3.004 0 001 4z"></path>
                            <path fill="#99AAB4" d="M16.62 10.028L16.596 10 12 13.857l.643.766 3.977-3.337 3.976 3.337.643-.766L16.643 10l-.023.028z"></path>
                            <text fill="#99AAB4" font-family="HelveticaNeue, Helvetica Neue" font-size="14">
                                <tspan x="38" y="20">R</tspan>
                            </text>
                            <path fill="#99AAB4" d="M33 16h-1v-2h1a2 2 0 10-2-2v1h-2v-1a2 2 0 10-2 2h1v2h-1a2 2 0 102 2v-1h2v1a2 2 0 102-2zm-1-4a1.001 1.001 0 012 0c0 .551-.449 1-1 1h-1v-1zm-5 1a1.001 1.001 0 010-2c.551 0 1 .449 1 1v1h-1zm1 5a1.001 1.001 0 01-2 0c0-.551.449-1 1-1h1v1zm1-2v-2h2v2h-2zm4 3c-.551 0-1-.448-1-1v-1h1a1.001 1.001 0 010 2z"></path>
                        </g>
                    </symbol>
                    <symbol id="l-circle-blue" viewbox="0 0 60 60">
                        <circle cx="40" cy="40" r="30" fill="#1688FE" fill-rule="evenodd" transform="translate(-10 -10)"></circle>
                    </symbol>
                    <symbol id="l-flag" viewbox="0 0 60 60">
                        <g fill="none" fill-rule="evenodd">
                            <circle cx="30" cy="30" r="30" fill="#1084fe"></circle>
                            <path fill="#FFF" d="M38.876 24.29a3.097 3.097 0 00-.864 3.486l1.773 4.518h-18.07l4.424-11.273a1.49 1.49 0 011.393-.962h16.323l-4.98 4.232zm7.801-5.273c-.435-1.225-1.54-2.017-2.82-2.017H27.532c-1.852 0-3.491 1.132-4.18 2.885l-4.867 12.41H13.5c-.83 0-1.5.684-1.5 1.529 0 .844.67 1.53 1.5 1.53h3.785l-2.178 5.548a1.542 1.542 0 00.837 1.99 1.486 1.486 0 001.949-.854l2.622-6.685h19.27c.997 0 1.926-.502 2.484-1.344.559-.84.672-1.907.301-2.851l-1.773-4.518 4.98-4.23a3.068 3.068 0 00.9-3.393z"></path>
                        </g>
                    </symbol>
                    <symbol id="l-rocket" viewbox="0 0 60 60">
                        <g fill="none" fill-rule="evenodd">
                            <circle cx="30" cy="30" r="30" fill="#1084fe"></circle>
                            <path fill="#FFF" d="M34.45 40.055l-1.512-2.52a87.575 87.575 0 003.391-3.762 10.177 10.177 0 01-1.878 6.282m7.499-21.977c-.44 2.577-2.452 8.176-10.896 17.123l-6.255-6.254c9.004-8.496 14.613-10.457 17.15-10.869m-15.71 5.594a87.436 87.436 0 00-3.773 3.39l-2.521-1.513a10.19 10.19 0 016.293-1.877m18.53-8.438s2.033 4.772-5.932 15.4c.243.782 2.07 7.406-3.543 13.017L33.946 45l-4.044-6.74-8.162-8.16L15 26.055l1.349-1.349c5.632-5.634 12.283-3.771 13.024-3.54C36.39 15.91 40.862 15 43.08 15c1.138 0 1.688.234 1.688.234zM20.123 37.772a1.487 1.487 0 012.105 0 1.487 1.487 0 010 2.105l-2.105 2.106a1.49 1.49 0 01-2.106 0 1.49 1.49 0 010-2.104l2.106-2.107zm15.815-12.22a1.488 1.488 0 100-2.977 1.488 1.488 0 000 2.977"></path>
                        </g>
                    </symbol>
                    <symbol id="l-down-white" viewbox="0 0 60 60">
                        <g fill="none" fill-rule="evenodd">
                            <circle cx="30" cy="30" r="30" fill="#1084fe"></circle>
                            <path fill="#FFF" d="M30 45.96c-8.8 0-15.96-7.16-15.96-15.96S21.2 14.04 30 14.04 45.96 21.2 45.96 30 38.8 45.96 30 45.96M30 11c-10.493 0-19 8.507-19 19s8.507 19 19 19 19-8.507 19-19-8.507-19-19-19m2.725 18.685l-1.205 1.206v-6.4a1.52 1.52 0 10-3.04 0v6.4l-1.205-1.206a1.518 1.518 0 00-2.15 0 1.518 1.518 0 000 2.15L30 36.709l4.875-4.874a1.518 1.518 0 000-2.15 1.518 1.518 0 00-2.15 0"></path>
                        </g>
                    </symbol>
                    <symbol id="l-dialog" viewbox="0 0 60 60">
                        <g fill="none" fill-rule="evenodd">
                            <circle cx="30" cy="30" r="30" fill="#1084fe"></circle>
                            <path fill="#FFF" d="M45.96 42.037l-3.04-2.96a3.098 3.098 0 00-2.15-.868H29.24c-.839 0-1.52-.665-1.52-1.481v-2.961h3.04c2.514 0 4.56-1.993 4.56-4.442v-2.961h9.12c.839 0 1.52.665 1.52 1.48v14.193zM32.28 26.364v2.961c0 .816-.681 1.48-1.52 1.48h-3.04v-2.96c0-.816.681-1.481 1.52-1.481h3.04zm-13.05 4.442c-.8 0-1.585.315-2.15.867l-3.04 2.961V20.442c0-.816.681-1.481 1.52-1.481h15.2c.839 0 1.52.665 1.52 1.48v2.962h-3.04c-2.514 0-4.56 1.993-4.56 4.442v2.96h-5.45zm25.21-7.403h-9.12v-2.961c0-2.45-2.046-4.442-4.56-4.442h-15.2C13.046 16 11 17.993 11 20.442v14.192c0 1.203.736 2.276 1.876 2.737a3.13 3.13 0 001.167.226c.789 0 1.563-.3 2.146-.869l3.04-2.961h5.451v2.961c0 2.449 2.046 4.442 4.56 4.442h11.53l3.04 2.96c.584.57 1.358.87 2.147.87a3.11 3.11 0 001.167-.227c1.14-.46 1.876-1.533 1.876-2.736V27.845c0-2.45-2.046-4.442-4.56-4.442z"></path>
                        </g>
                    </symbol>
                    <symbol id="l-facebook" viewbox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12.82 24H1.324A1.325 1.325 0 010 22.675V1.325C0 .593.593 0 1.325 0h21.35C23.407 0 24 .593 24 1.325v21.35c0 .732-.593 1.325-1.325 1.325H16.56v-9.294h3.12l.466-3.622H16.56V8.77c0-1.048.29-1.763 1.795-1.763h1.918v-3.24c-.332-.045-1.47-.143-2.795-.143-2.766 0-4.659 1.688-4.659 4.788v2.67H9.692v3.623h3.127V24z"></path>
                    </symbol>
                    <symbol id="l-twitter" viewbox="0 0 24 20">
                        <path fill-rule="evenodd" d="M24 2.368a9.617 9.617 0 01-2.827.794A5.038 5.038 0 0023.338.37a9.698 9.698 0 01-3.129 1.223A4.856 4.856 0 0016.616 0c-2.718 0-4.922 2.26-4.922 5.049 0 .396.042.78.126 1.15C7.728 5.988 4.1 3.979 1.67.922a5.14 5.14 0 00-.666 2.54c0 1.751.87 3.297 2.19 4.203a4.834 4.834 0 01-2.23-.63v.062c0 2.447 1.697 4.488 3.95 4.95a4.695 4.695 0 01-1.296.178c-.317 0-.627-.03-.927-.09.626 2.006 2.444 3.466 4.599 3.505A9.722 9.722 0 010 17.733 13.71 13.71 0 007.548 20c9.058 0 14.01-7.692 14.01-14.365 0-.22-.005-.439-.013-.654A10.1 10.1 0 0024 2.368"></path>
                    </symbol>
                    <symbol id="l-medium" viewbox="0 0 24 20">
                        <path fill-rule="evenodd" d="M2.846 3.887a.93.93 0 00-.303-.784L.303.403V0H7.26l5.379 11.795L17.367 0H24v.403L22.084 2.24a.56.56 0 00-.213.538v13.497a.56.56 0 00.213.538l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537V5.32l-5.39 13.688h-.727L4.28 5.32v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404H0v-.404l2.521-3.058c.27-.279.39-.67.325-1.052V3.887z"></path>
                    </symbol>
                    <symbol id="l-404" viewbox="0 0 47 47">
                        <path fill="#B9C2C8" fill-rule="evenodd" d="M26.665 23.5L42.524 7.64v31.72L26.664 23.5zM23.5 26.665l15.86 15.859H7.64l15.86-15.86zM7.64 4.476h31.72L23.5 20.336 7.64 4.475zM4.477 7.641L20.336 23.5 4.475 39.36V7.64zM40.286 0H6.714A6.722 6.722 0 000 6.714v33.572A6.722 6.722 0 006.714 47h33.572A6.722 6.722 0 0047 40.286V6.714A6.722 6.722 0 0040.286 0z"></path>
                    </symbol>
                    <symbol id="l-check-blue" viewbox="0 0 18 13">
                        <g id="Desktop_PlantHome_ComparePlansExpanded" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(-1146 -3406)">
                            <polygon id="Shape-Copy-8" fill="#1688FE" points="1151.72727 3416.28358 1147.43182 3412.20896 1146 3413.56716 1151.72727 3419 1164 3407.35821 1162.56818 3406"></polygon>
                        </g>
                    </symbol>
                    <symbol id="l-cross" viewbox="0 0 14 14">
                        <g id="Desktop_PlantHome_ComparePlansExpanded" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(-1148 -3506)">
                            <polygon id="Shape-Copy" fill="#B9C2C8" points="1162 3507.41 1160.59 3506 1155 3511.59 1149.41 3506 1148 3507.41 1153.59 3513 1148 3518.59 1149.41 3520 1155 3514.41 1160.59 3520 1162 3518.59 1156.41 3513"></polygon>
                        </g>
                    </symbol>
                    <symbol id="l-combined" viewbox="0 0 50 46">
                        <path fill-rule="evenodd" d="M14 30H2a2 2 0 110-4h12a2 2 0 110 4zm21.9-13.071l-8.486 8.486c-.782.78-2.048.78-2.828 0a1.998 1.998 0 010-2.828L33.07 14.1a2 2 0 112.83 2.828zM20 37.999H8a2 2 0 110-4h12a2 2 0 110 4zm30-15.135c.072 12.406-9.738 22.554-22 23.084V46H14a2 2 0 110-4h13c11.416 0 20.514-10.122 18.79-21.862-1.088-7.404-6.634-13.61-13.874-15.502A19.047 19.047 0 009.738 15.044c-.422.914-1.496 1.324-2.446.988a2.015 2.015 0 01-1.144-2.752A23.041 23.041 0 0131.252.392C41.956 2.374 49.936 11.98 50 22.864z"></path>
                    </symbol>
                    <symbol id="l-visual" viewbox="0 0 46 42">
                        <path fill-rule="evenodd" d="M4 31.907V36a2 2 0 002 2h36-2a2 2 0 002-2V22.283l-13.373 7.471a10.009 10.009 0 01-9.26.166l-4.11-2.054a6.009 6.009 0 00-6.012.374L4 31.907zm0-4.879l3.027-2.116a10.019 10.019 0 0110.02-.624l4.108 2.054a5.994 5.994 0 005.558-.1L42 17.702V6a2 2 0 00-2-2H6a2 2 0 00-2 2v21.028zM4 0h36c3.308 0 6 2.692 6 6v30c0 3.308-2.692 6-6 6H6c-3.308 0-6-2.692-6-6V6c0-3.308.692-6 4-6zm12 11.962c0-2.208-1.792-4-4-4s-4 1.792-4 4 1.792 4 4 4 4-1.792 4-4z"></path>
                    </symbol>
                    <symbol id="l-light" viewbox="0 0 35 52">
                        <path fill-rule="evenodd" d="M21.52 44c0 2.209-1.801 4-4.02 4-2.219 0-4.02-1.791-4.02-4v-6.58c0-1.28-.63-2.478-1.69-3.208-3.065-2.112-4.9-5.868-4.184-9.984.683-3.934 3.798-7.178 7.723-8C21.813 14.87 27.55 19.78 27.55 26c0 4.934-3.61 9.044-8.337 9.856-.98.166-1.712.978-1.712 1.968 0 1.212 1.081 2.188 2.285 1.992.593-.096 1.17-.242 1.735-.41V44zm10.049-18c0 4.756-2.386 8.958-6.03 11.488V44c0 4.679-4.033 8.417-8.829 7.963-4.18-.396-7.25-4.128-7.25-8.307v-6.19c-4.312-2.996-6.867-8.322-5.778-14.154 1.031-5.508 5.465-9.968 10.992-11.038C23.682 10.53 31.57 17.348 31.57 26zM17.5 8a2.004 2.004 0 01-2.01-2V2c0-1.104.899-2 2.01-2 1.111 0 2.01.896 2.01 2v4c0 1.104-.899 2-2.01 2zm11.227 2.828a1.99 1.99 0 010-2.828l2.842-2.828a2.015 2.015 0 012.842 0 1.99 1.99 0 010 2.828l-2.842 2.828a2.015 2.015 0 01-2.842 0zm-22.454 0a2.015 2.015 0 01-2.842 0L.59 8a1.99 1.99 0 010-2.828 2.015 2.015 0 012.842 0L6.273 8a1.99 1.99 0 010 2.828z"></path>
                    </symbol>
                    <symbol id="l-logo-main-light" viewbox="0 0 138 40">
                        <g fill="none" fill-rule="evenodd">
                            <path fill="#0780FE" d="M18 0l23 23c.223.284-.074 1-1 1H17V1c0-.926.716-1.223 1-1"></path>
                            <path fill="#000" fill-opacity=".1" d="M24 17l7 7h-7z"></path>
                            <path fill="#64D0FF" d="M22.865 39.804L.196 17.135A.665.665 0 01.666 16h22.669c.367 0 .665.298.665.665v22.669a.665.665 0 01-1.135.47"></path>
                            <path fill="#FFF" d="M60.364 19.563c2.829 0 4.491-1.761 4.5-4.478.008-2.457-2.053-4.446-4.572-4.446h-3.9a.597.597 0 00-.604.59v7.744c0 .326.27.59.604.59h3.972zM50.909 7.135c0-.326.27-.59.605-.59h9.757c5.03 0 8.547 3.43 8.547 8.519s-3.517 8.629-8.547 8.629h-4.879a.597.597 0 00-.604.589v7.856c0 .325-.27.59-.605.59h-3.67a.597.597 0 01-.604-.59V7.135zm23.099-.59h3.257c.305 0 .553.264.553.59v25.003c0 .325-.248.59-.553.59h-3.257c-.306 0-.553-.265-.553-.59V7.135c0-.326.247-.59.553-.59zm20.865 14.701c.014-.387.445-3.567-3.6-3.567-1.66 0-3.35.606-4.784 1.46a.604.604 0 01-.844-.231l-1.226-2.328a.58.58 0 01.189-.753c1.662-1.113 4.464-2.009 7.077-2.009 4.988 0 7.951 2.721 7.951 7.465v11.143a.594.594 0 01-.6.587H95.81a.593.593 0 01-.6-.587v-.994c-2.144 1.581-3.412 2.023-6 2.023-3.45 0-6.3-2.207-6.3-5.627 0-7.108 6.93-6.582 11.963-6.582zm-4.544 8.396c-1.912 0-2.966-1.306-2.966-2.556 0-2.871 3.556-2.64 7.548-2.64 0 .52.01 5.196-4.582 5.196zm14.275-15.388h3.403c.334 0 .604.27.604.602v2.071c1.075-1.66 2.809-3.109 6.156-3.109 4.271 0 7.415 2.206 7.415 7.288v11.747c0 .332-.27.602-.604.602h-3.593a.603.603 0 01-.604-.602V22.085c0-2.334-1.275-3.878-3.694-3.878-2.786 0-4.886 2.786-4.886 6.25v8.396c0 .332-.27.602-.604.602h-3.593a.603.603 0 01-.604-.602V14.856c0-.333.27-.602.604-.602zm23.05 3.883h-1.25a.594.594 0 01-.586-.601v-2.598c0-.333.263-.602.587-.602h1.36c.323 0 .586-.27.586-.602V7.147c0-.332.263-.602.587-.602h3.378c.324 0 .587.27.587.602v6.587c0 .333.262.602.587.602h3.084c.324 0 .587.27.587.602v2.598a.594.594 0 01-.587.601h-3.084a.594.594 0 00-.587.602v6.888c0 3.161 2.422 3.612 3.707 3.612.08 0 .157 0 .236-.002.332-.01.609.26.609.601v2.966a.595.595 0 01-.524.598 8.145 8.145 0 01-.908.053c-2.606 0-7.782-.79-7.782-7.226v-7.49a.594.594 0 00-.587-.602z"></path>
                        </g>
                    </symbol>
                </defs>
            </svg>
        </div>
        <script type="text/javascript" src="static/js/src.05c3b67b.js"></script>
    </body>

</html>