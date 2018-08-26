/*<div id="selectme"><p>Some text goes here!</p><p>Moar text!</p></div>
<p>Click me!</p>

function SelectText(element) {
    var doc = document
        , text = doc.getElementById(element)
        , range, selection
    ;    
    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();        
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}

$(function() {
    $('p').click(function() {
        SelectText('selectme');
    });
});




/*<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html lang='en' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
  <head>
    <meta charset='utf-8'/>
    <meta content='width=device-width, initial-scale=1.0' name='viewport'/>
    <meta content='' name='description'/>
    <meta content='' name='author'/>

<title><b:if cond='data:blog.pageType == &quot;index&quot;'><data:blog.pageTitle/>
 <b:else/><b:if cond='data:blog.pageType != &quot;error_page&quot;'><data:blog.pageName/> | <data:blog.title/>
 <b:else/>404 | <data:blog.title/></b:if></b:if></title>

    <script src='https://code.jquery.com/jquery-1.10.2.min.js'/>
    <link href='https://fonts.googleapis.com/css?family=Vollkorn|Exo|Open+Sans|Roboto|Ubuntu|Josefin+Sans|Rubik:500i|Droid+Serif:400i' rel='stylesheet'/>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prettify/r298/prettify.min.css"/>
    <script type='text/javascript' src="https://cdnjs.cloudflare.com/ajax/libs/prettify/r298/prettify.min.js"></script>
    <script type='text/javascript' src="https://cdnjs.cloudflare.com/ajax/libs/prettify/r298/lang-css.min.js"></script>

    <link crossorigin='anonymous' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' integrity='sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u' rel='stylesheet'/>
    <link href='https://cdnjs.cloudflare.com/ajax/libs/jasny-bootstrap/3.1.3/css/jasny-bootstrap.min.css' rel='stylesheet'/>

    <!-- Bootstrap core JavaScript================================================== -->
    <script crossorigin='anonymous' integrity='sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa' src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'/>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jasny-bootstrap/3.1.3/js/jasny-bootstrap.min.js'/>

<!--link href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/superhero/bootstrap.min.css" rel="stylesheet" integrity="sha384-Xqcy5ttufkC3rBa8EdiAyA1VgOGrmel2Y+wxm4K3kI3fcjTWlDWrlnxyD6hOi3PF" crossorigin="anonymous"/-->
<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
   
<b:skin><![CDATA[


html, body {height: 100%;}
* a{text-decoration:none; color:#ff8c00;}
* a:hover{text-decoration:none:}
.navbar-toggle {float: left;margin-left: 15px;}
.navmenu {z-index: 1;font-family: 'Ubuntu', sans-serif;}
.canvas {position: relative;left: 0;z-index: 2;min-height: 100%;min-width:100%;padding: 50px 0 0 0;background: wheat;font-family: 'Roboto', sans-serif;box-shadow:-25px 0px 30px rgba(0,0,0,0.30); -webkit-box-shadow:-25px 0px 20px rgba (0,0,0,0.30);}
.canvas-slid:after,
.canvas-sliding:after{content:"";width:100%;height:100%;position:fixed;top:0;left:300px;
z-index:9999;background:rgba(0,0,0,0)!important;}
.canvas .container-fluid{display:block;top:0px;position:relative;box-shadow:0 -80px 0 #F44336;background-color:#F44336;color:#fff; padding-bottom:20px,padding-top:150px; border-top:60px solid #F44336;}
.fullpage{padding:10px;background:#333}
.navbar {left: 0px;-webkit-transition: -webkit-transform 1s cubic-bezier(0.86, 0, 0.07, 1), left 0.35s;
  -moz-transition: -moz-transform 1s cubic-bezier(0.86, 0, 0.07, 1), left 0.35s;
transition: transform 1s cubic-bezier(0.86, 0, 0.07, 1), left 0.35s; box-shadow:0 10px 20px rgba(0,0,0,0.30)}
.navbar.hid {-webkit-transform: translateY(-99%);-moz-transform: translateY(-100%);-ms-transform: translateY(-100%);
-o-transform: translateY(-99%); transform: translateY(-99%);}

.navbar-brand{ padding-left:25px;-webkit-box-shadow:inset #FF8C00 20px 0 0 0;box-shadow:inset #FF8C00 20px 0 0 0;-webkit-transition:-webkit-box-shadow;transition:box-shadow;-webkit-transition-duration:.5s;transition-duration:.5s}
.navbar-brand:focus, .navbar-brand:hover{-webkit-box-shadow:inset #FF8C00 200px 0 0 0;box-shadow:inset #FF8C00 200px 0 0 0}
.navbar-header a{ padding-left:25px;-webkit-box-shadow:inset #FF8C00 20px 0 0 0;box-shadow:inset #FF8C00 20px 0 0 0;
-webkit-transition:-webkit-box-shadow;transition:box-shadow;-webkit-transition-duration:.5s;transition-duration:.5s}
.navbar-header a:hover,.navbar-header a:focus{-webkit-box-shadow:inset #FF8C00 200px 0 0 0;box-shadow:inset #FF8C00 200px 0 0 0}

.region{background:white;border: solid 1px #333;border-radius:3px;padding:20px;box-shadow:0px 0px 20px 1px rgba(0,0,0,0.30);
margin:00px;}
.region .lead{font-family: 'Droid Serif', sans-serif;font-size:2em;}

#blog-pager a{display:block;position:fixed;width:250px;height:3em;background:rgba(0,0,0,0);
line-height:-3em;transition-duration: .35s;padding-top:-10px;font-family: 'Exo', sans-serif;Font-size:1.5em;
border-top:solid 1.6em rgba(0,0,0,0.25);border-bottom: solid 1.6em rgba(0,0,0,0.25);
border-left:solid 0.75em transparent;}
#blog-pager-newer-link a:hover{right:-10px;border-top:solid 1.6em rgba(0,150,255,0.95);
border-bottom:solid 1.6em rgba(0,150,255,0.95);border-left:solid 0.75em transparent;}
#blog-pager-older-link a:hover{right:-10px;border-top:solid 1.6em rgba(255,100,80,0.95);
border-bottom:solid 1.6em rgba(255,100,80,0.95);border-left:solid 0.75em transparent;}
#blog-pager-newer-link a{top:55%;right:-210px}
#blog-pager-older-link a{top:70%;right:-225px}
.home-link{display:none !important;}

.post-title{color:red;font-family: 'Ubuntu', sans-serif;font-size:5em;}
.date-header{color:#555;font-family:'Josefin Sans',sans-serif;font-size:1.5em;margin-bottom:-1em;}
#comment-Holder{background:#333;}

.vj-topscrl{ display:block;position:fixed;width:50px;height:50px;background:rgba(0,0,0,0.75);bottom:10px;right:10px;
 border-top-left-radius:50%;border-bottom-left-radius:50%;border-bottom-right-radius:50%;border-top-right-radius:8%;
  -webkit-transform:rotate(-45deg);transform:rotate(-45deg);z-index:1100}
.vj-topscrl .cd-read-more ul{list-style:none}


.codeblock{display:block;width:100%; background:rgba(0,0,0,0.40)}
.codeblock a{ background:#000; color:aqua; box-shadow:none;}
.codeblock a:hover,.codeblock a:focus{ background:#FF7E00 !important; color:green; box-shadow:none;}
.vj-codebox{ height:300px !important;overflow:scroll;}
/* Pretty printing styles. Used with prettify.js. *//*
.linenums{ color:#eee;}
.str { color: #3a73a9; }
.kwd { color: #f18973; }
.com { color: #65737E; }
.typ { color: #80ced6; }
.lit { color: #5b9aa0; }
.pun { color: #CDD3DE;}
.pln { color: #C594C5;}
.tag { color: #E75D65;}
.atn { color: #93C08F;}
.atv { color: #FAC863; }
.dec { color: #B89D9E;}
pre.prettyprint { padding: 0px; border: 1px solid #000 }

ol.linenums { margin-top: 0; margin-bottom: 0;background: #1B2B34;}
li.L0,
li.L1,
li.L2,
li.L3,
li.L5,
li.L6,
li.L7,
li.L8 { list-style-type: none;background: #1B2B34; }
li.L1,
li.L3,
li.L5,
li.L7,
li.L9 { background: #1B2B34; }

@media print {
  .str { color: #060; }
  .kwd { color: #006; font-weight: bold; }
  .com { color: #600; font-style: italic; }
  .typ { color: #404; font-weight: bold; }
  .lit { color: #044; }
  .pun { color: #440; }
  .pln { color: #000; }
  .tag { color: #006; font-weight: bold; }
  .atn { color: #404; }
  .atv { color: #060; }
}

/* -------------------------------- Articles -------------------------------- *//*
.cd-articles {position:relative;display:inline-block;float:left;}
.archlist {display:block;position:relative;float:right;}
 
.cd-articles::before {/* never visible - this is used in jQuery to check the current MQ *//*
  content:'mobile';display:none}
.cd-articles article {padding:3em 0;border-bottom:1px solid #e6e6e6}
.cd-articles article:last-of-type {border-bottom:none}
.cd-articles p:last-of-type {padding-bottom:0}
/*-------------------------------- Aside --------------------------------*//*
.cd-read-more{display:block;height:50px;
  width:50px;background-color:transparent;z-index:1050}
.cd-read-more ul li{ list-style:none}
.cd-read-more a{display:block;position:relative;padding:0}
.cd-read-more a::before, .cd-read-more a::after {position:absolute}
.cd-read-more a::before{/* article number *//*
content:'';top:50%;bottom:auto;
-webkit-transform:translateY(-7%) translateX(-133%);
  -moz-transform:translateY(-7%) translateX(-133%);-ms-transform:translateY(-7%) translateX(-133%);
  -o-transform:translateY(-7%) translateX(-133%);transform:translateY(-7%) translateX(-133%);
left:1.1em;width:36px;height:36px;line-height:50px;border-radius:50%;color:transparent;
  font-family:Georgia, serif;text-align:center;box-shadow:inset 0 0 0 4px #555/*#d9d9d9*//*;
  -webkit-transition:background-color 0.3s, color 0.3s;
  -moz-transition:background-color 0.3s, color 0.3s;transition:background-color 0.3s, color 0.3s}
.cd-read-more a.read::before{background-color:transparent;border:solid 4px #EE7C00;
 box-shadow:0 0 20px #777,inset 0 0 15px #777}
.cd-read-more a.reading svg{display:block}
.cd-read-more a.reading::before{background-color:transparent;color:transparent}
.cd-read-more li:last-of-type a::after{display:none}
.cd-read-more svg{/* this is the filling circle around the article number *//*
  display:none;position:absolute;top:50%;bottom:auto;-webkit-transform:translateY(-7%) translateX(-133%);
  -moz-transform:translateY(-7%) translateX(-133%);-ms-transform:translateY(-7%) translateX(-133%);-o-transform:translateY(-7%) translateX(-133%);transform:translateY(-7%) translateX(-133%);left:1.1em;stroke:#FF8C00}
.cd-articles {max-width:none;margin-bottom:5em}
  .cd-articles::before {/* never visible - this is used in jQuery to check the current MQ *//*
    content:'desktop'}



ul {list-style: none;}
.generic-anchor {color: #8DB9ED;}
.generic-anchor:visited {color: #8DB9ED;}
.generic-anchor:hover {color: #ccc;}
.flex-rw {display: -webkit-box;display: -ms-flexbox;display: flex;-ms-flex-flow: row wrap;flex-flow: row wrap;}
footer {background: #373737;margin-top: auto;width: 100%;}
.footer-list-top {width: 33.333%;}
.footer-list-top > li {text-align: center;padding-bottom: 10px;}
.footer-list-header {padding: 10px 0 5px 0;color: #fff;font: 2.3vw "Oswald", sans-serif;}
.footer-list-anchor {font: 1.3em "Open Sans", sans-serif;}
.footer-social-section {width: 100%;-webkit-box-align: center;-ms-flex-align: center;align-items: center;
  -ms-flex-pack: distribute;justify-content: space-around;position: relative;margin-top: 5px;}
.footer-social-section::after {content: "";position: absolute;z-index: 1;top: 50%;left: 10px;
border-top: 1px solid #ccc;width: calc(100% - 20px);}
.footer-social-overlap {position: relative;z-index: 2;background: #373737;padding: 0 20px;}
.footer-social-connect {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-align: center;
      -ms-flex-align: center;align-items: center;font: 3.5em "Oswald", sans-serif;color: #fff;}
.footer-social-small {font-size: 0.6em;padding: 0px 20px;}
.footer-social-overlap > a {font-size: 3em;}
.footer-social-overlap > a:not(:first-child) {margin-left: 0.38em;}
.footer-bottom-section {width: 100%;padding: 10px;border-top: 1px solid #ccc;margin-top: 10px;}
.footer-bottom-section > div:first-child {margin-right: auto;}
.footer-bottom-wrapper {font-size: 1.5em;color: #fff;}
.footer-address {display: inline;font-style: normal;}
@media only screen and (max-width: 768px) {
.footer-list-header {font-size: 2em;}
.footer-list-anchor {font-size: 1.1em;}
  .footer-social-connect {font-size: 2.5em;}
  .footer-social-overlap > a {font-size: 2.24em;}
  .footer-bottom-wrapper {font-size: 1.3em;}
}
@media only screen and (max-width: 568px) {
  main {font-size: 5em;}.footer-list-top {width: 100%;}
  .footer-list-header {font-size: 3em;}
  .footer-list-anchor {font-size: 1.5em;}
  .footer-social-section {-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;}
  .footer-social-section::after {top: 25%;}
  .footer-social-connect {margin-bottom: 10px;padding: 0 10px;}
  .footer-social-overlap {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-pack: center;
        -ms-flex-pack: center;justify-content: center;}
  .footer-social-icons-wrapper {width: 100%;padding: 0;}
  .footer-social-overlap > a:not(:first-child) {margin-left: 20px;}
  .footer-bottom-section {padding: 0 5px 10px 5px;}
  .footer-bottom-wrapper {text-align: center;width: 100%;margin-top: 10px;}
}
@media only screen and (max-width: 480px) {
.footer-social-overlap > a {margin: auto;}
  .footer-social-overlap > a:not(:first-child) {margin-left: 0;}
  .footer-bottom-rights {display: block;}
}
@media only screen and (max-width: 320px) {
.footer-list-header {font-size: 2.2em;}
  .footer-list-anchor {font-size: 1.2em;}
  .footer-social-connect {font-size: 2.4em;}
  .footer-social-overlap > a {font-size: 2.24em;}
  .footer-bottom-wrapper {font-size: 1.3em;}
}



@media (min-width: 0) {
.navbar-toggle {display: block; /* force showing the toggle *//*}
}
@media (min-width: 992px) {
body {padding: 0;}
.canvas {padding: 0;}
}


.logo {font: 84px 'Vollkorn',serif;color: #fefefe;text-transform: uppercase;letter-spacing: -4px;}

.logo span {position: relative;}
.logo span:before,
.logo span:after {content: '';position: absolute;border-width: 32px;
  border-style: solid;border-color: transparent;height: 0;z-index: 10;}
.logo .word1 {color: #dc006c;margin-right: -38px;transform: rotateY(180deg);
  display: inline-block;
  z-index: 10;}
.logo .word1:before {right: -0px;top: -9px;border-top-color: red;border-right-color: red;}
.logo .word1:after {
  left: 17px;
  bottom: -15px;border-bottom-color: red;border-left-color: red;}

.logo .word2 {z-index: 0;}
.logo .word2:before {left: -4px;top: -6px;border-top-color:#F44336;border-left-color:#F44336;}
.logo .word2:after {right: -8px;bottom: 10px;border-bottom-color:#F44336;border-right-color:#F44336;}



/*html {
    overflow: auto;
}
.region {width:50%;height:300px;padding:0px;overflow-y: scroll;overflow-x: scroll;}*//*

::-webkit-scrollbar {width: 5px;height:3px;}
::-webkit-scrollbar * {background:transparent;}
::-webkit-scrollbar-track {background-image: none;background-position-x: none;background-position-y: none;
    background-size: none;background-repeat-x: none;background-repeat-y: none;background-attachment: none;
    background-origin: none;background-clip: none;background-color: none;}
::-webkit-scrollbar-thumb {background: rgba(0,130,255,0.6);}
::-webkit-scrollbar-thumb:hover {background: rgba(0,130,255,1);}
::-webkit-scrollbar-thumb:window-inactive {background: rgba(0,130,255,0.4);}
::-webkit-scrollbar-button{height:20px;width: 20px;}
::-webkit-scrollbar-button:horizontal:increment {background:green}
::-webkit-scrollbar-button:horizontal:decrement {background:red}
::-webkit-scrollbar-button:vertical:increment {background:green}
::-webkit-scrollbar-button:vertical:decrement {background:red}
::-webkit-scrollbar-track-piece { background:transparent }
::-webkit-scrollbar-corner       { background:orange}
::-webkit-resizer                { background:black }


]]></b:skin>

</head>

  <body onLoad="prettyPrint()">
    <div class='navmenu navmenu-default navmenu-fixed-left'>
      <a class='navmenu-brand' href='#'>Project name</a>
      <ul class='nav navmenu-nav'>
        <li><a href='../navmenu/'>Slide in</a></li>
        <li><a href='../navmenu-push/'>Push</a></li>
        <li class='active'><a href='./'>Reveal</a></li>
        <li><a href='../navbar-offcanvas/'>Off canvas navbar</a></li>
      </ul>
      <ul class='nav navmenu-nav'>
        <li><a href='#'>Link</a></li>
        <li><a href='#'>Link</a></li>
        <li><a href='#'>Link</a></li>
        <li class='dropdown'>
          <a class='dropdown-toggle' data-toggle='dropdown' href='#'>Dropdown <b class='caret'/></a>
          <ul class='dropdown-menu navmenu-nav'>
            <li><a href='#'>Action</a></li>
            <li><a href='#'>Another action</a></li>
            <li><a href='#'>Something else here</a></li>
            <li class='divider'/>
            <li class='dropdown-header'>Nav header</li>
            <li><a href='#'>Separated link</a></li>
            <li><a href='#'>One more separated link</a></li>
          </ul>
        </li>
      </ul>
    </div>

  <div class='canvas'>
      <div class='navbar navbar-inverse navbar-fixed-top'>
        <button class='navbar-toggle' data-canvas='.canvas' data-recalc='false' data-target='.navmenu' data-toggle='offcanvas' onclick='openOverlay()' type='button'>
          <span class='icon-bar'/>
          <span class='icon-bar'/>
          <span class='icon-bar'/>
        </button>
		<a class='navbar-brand' href='#'>NerdyNotes</a>
      </div>
      <div class='vj-topscrl'>
         <aside class='cd-read-more'>
              <ul>
                  <li>
                      <a href='#article'>
                          <svg height='36px' viewBox='0 0 36 36' width='36px' x='0px' y='0px'>
                            <circle cx='18' cy='18' fill='none' r='16' stroke-dasharray='100 100' stroke-dashoffset='100' stroke-width='3' transform='rotate(-45 18 18)'>
                            </circle>
                          </svg>
                      </a>
                  </li>
              </ul>
          </aside> <!-- .cd-read-more -->
      </div>
      <div class='container-fluid'>
        <h1 class='logo'>
          <!--span class="word1">The</span-->
          <span class='word2'>Leonardo</span>
        </h1>
        <h3>Fixed (sticky) navbar on scroll</h3>
        <p>Scroll this page to see how the navbar behaves with data-spy=&quot;affix&quot;.</p>
        <p>The navbar is attached to the top of the page after you have scrolled a specified amount of pixels.</p>
      </div>
      
        <div class='cd-articles col-lg-10'>
          <article>
            <b:section class='main' id='main' preferred='yes' showaddelement='yes'>
              <b:widget id='Blog1' locked='true' title='Blog Posts' type='Blog' version='1' visible='true'>
                <b:includable id='main' var='top'>
                  <b:if cond='!data:mobile'>
                    <!-- posts -->
                    <div class='blog-posts hfeed'>

                      <b:include data='top' name='status-message'/>

                      <b:loop values='data:posts' var='post'>
                        <b:if cond='data:post.isDateStart and not data:post.isFirstPost'>
                          &lt;/div&gt;&lt;/div&gt;
                        </b:if>
                        <b:if cond='data:post.isDateStart'>
                          &lt;div class=&quot;date-outer&quot;&gt;
                        </b:if>
                        <b:if cond='data:post.dateHeader'>
                          <h2 class='date-header'><span><data:post.dateHeader/></span></h2>
                        </b:if>
                        <b:if cond='data:post.isDateStart'>
                          &lt;div class=&quot;date-posts&quot;&gt;
                        </b:if>
                        <div class='post-outer'>
                          <b:include data='post' name='post'/>
                          <b:include cond='data:blog.pageType in {&quot;static_page&quot;,&quot;item&quot;}' data='post' name='comment_picker'/>
                        </div>

                        <!-- Ad -->
                        <b:if cond='data:post.includeAd'>
                          <div class='inline-ad'>
                            <data:adCode/>
                          </div>
                        </b:if>
                      </b:loop>
                      <b:if cond='data:numPosts != 0'>
                        &lt;/div&gt;&lt;/div&gt;
                      </b:if>
                    </div>

                    <!-- navigation -->
                    <b:include name='nextprev'/>

                    <!-- feed links -->
                    <b:include name='feedLinks'/>

                    <b:else/>
                    <b:include name='mobile-main'/>
                  </b:if>

                  <b:if cond='data:top.showPlusOne'>
                    <data:top.googlePlusBootstrap/>
                  </b:if>

                </b:includable>
                <b:includable id='backlinkDeleteIcon' var='backlink'>
                  <span expr:class='&quot;item-control &quot; + data:backlink.adminClass'>
                    <a expr:href='data:backlink.deleteUrl' expr:title='data:top.deleteBacklinkMsg'>
                      <img src='https://resources.blogblog.com/img/icon_delete13.gif'/>
                    </a>
                  </span>
                </b:includable>
                <b:includable id='backlinks' var='post'>
                  <a name='links'/><h4><data:post.backlinksLabel/></h4>
                  <b:if cond='data:post.numBacklinks != 0'>
                    <dl class='comments-block' id='comments-block'>
                      <b:loop values='data:post.backlinks' var='backlink'>
                        <div class='collapsed-backlink backlink-control'>
                          <dt class='comment-title'>
                            <span class='backlink-toggle-zippy'>&#160;</span>
                            <a expr:href='data:backlink.url' rel='nofollow'><data:backlink.title/></a>
                            <b:include data='backlink' name='backlinkDeleteIcon'/>
                          </dt>
                          <dd class='comment-body collapseable'>
                            <data:backlink.snippet/>
                          </dd>
                          <dd class='comment-footer collapseable'>
                            <span class='comment-author'><data:post.authorLabel/> <data:backlink.author/></span>
                            <span class='comment-timestamp'><data:post.timestampLabel/> <data:backlink.timestamp/></span>
                          </dd>
                        </div>
                      </b:loop>
                    </dl>
                  </b:if>
                  <p class='comment-footer'>
                    <a class='comment-link' expr:href='data:post.createLinkUrl' expr:id='data:widget.instanceId + &quot;_backlinks-create-link&quot;' target='_blank'><data:post.createLinkLabel/></a>
                  </p>
                </b:includable>
                <b:includable id='comment-form' var='post'>
                  <div class='comment-form'>
                    <a name='comment-form'/>
                    <b:if cond='data:mobile'>
                      <h4 id='comment-post-message'>
                        <a expr:id='data:widget.instanceId + &quot;_comment-editor-toggle-link&quot;' href='javascript:void(0)'><data:postCommentMsg/></a></h4>
                      <p><data:blogCommentMessage/></p>
                      <data:blogTeamBlogMessage/>
                      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
                      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight' frameborder='0' id='comment-editor' name='comment-editor' src='' style='display: none' width='100%'/>
                      <b:else/>
                      <h4 id='comment-post-message'><data:postCommentMsg/></h4>
                      <p><data:blogCommentMessage/></p>
                      <data:blogTeamBlogMessage/>
                      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
                      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight' frameborder='0' id='comment-editor' name='comment-editor' src='' width='100%'/>
                    </b:if>
                    <data:post.cmtfpIframe/>
                    <script type='text/javascript'>
                      BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);
                    </script>
                  </div>
                </b:includable>
                <b:includable id='commentDeleteIcon' var='comment'>
                  <span expr:class='&quot;item-control &quot; + data:comment.adminClass'>
                    <b:if cond='data:showCmtPopup'>
                      <div class='goog-toggle-button'>
                        <div class='goog-inline-block comment-action-icon'/>
                      </div>
                      <b:else/>
                      <a class='comment-delete' expr:href='data:comment.deleteUrl' expr:title='data:top.deleteCommentMsg'>
                        <img src='https://resources.blogblog.com/img/icon_delete13.gif'/>
                      </a>
                    </b:if>
                  </span>
                </b:includable>
                <b:includable id='comment_count_picker' var='post'>
                  <b:if cond='data:post.commentSource == 1'>
                    <span class='cmt_count_iframe_holder' expr:data-count='data:post.numComments' expr:data-onclick='data:post.addCommentOnclick' expr:data-post-url='data:post.url' expr:data-url='data:post.url.canonical.http'>
                    </span>
                    <b:else/>
                    <a class='comment-link' expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'>
                      <data:post.commentLabelFull/>:
                    </a>
                  </b:if>
                </b:includable>
                <b:includable id='comment_picker' var='post'>
                  <b:if cond='data:post.commentSource == 1'>
                    <b:include data='post' name='iframe_comments'/>
                    <b:elseif cond='data:post.showThreadedComments'/>
                    <b:include data='post' name='threaded_comments'/>
                    <b:else/>
                    <b:include data='post' name='comments'/>
                  </b:if>
                </b:includable>
                <b:includable id='comments' var='post'>
                  <div class='comments' id='comments'>
                    <a name='comments'/>
                    <b:if cond='data:post.allowComments'>
                      <h4><data:post.commentLabelFull/>:</h4>

                      <b:if cond='data:post.commentPagingRequired'>
                        <span class='paging-control-container'>
                          <b:if cond='data:post.hasOlderLinks'>
                            <a expr:class='data:post.oldLinkClass' expr:href='data:post.oldestLinkUrl'><data:post.oldestLinkText/></a>
                            &#160;
                            <a expr:class='data:post.oldLinkClass' expr:href='data:post.olderLinkUrl'><data:post.olderLinkText/></a>
                            &#160;
                          </b:if>

                          <data:post.commentRangeText/>

                          <b:if cond='data:post.hasNewerLinks'>
                            &#160;
                            <a expr:class='data:post.newLinkClass' expr:href='data:post.newerLinkUrl'><data:post.newerLinkText/></a>
                            &#160;
                            <a expr:class='data:post.newLinkClass' expr:href='data:post.newestLinkUrl'><data:post.newestLinkText/></a>
                          </b:if>
                        </span>
                      </b:if>

                      <div expr:id='data:widget.instanceId + &quot;_comments-block-wrapper&quot;'>
                        <dl expr:class='data:post.avatarIndentClass' id='comments-block'>
                          <b:loop values='data:post.comments' var='comment'>
                            <dt expr:class='&quot;comment-author &quot; + data:comment.authorClass' expr:id='data:comment.anchorName'>
                              <b:if cond='data:comment.favicon'>
                                <img expr:src='data:comment.favicon' height='16px' style='margin-bottom:-2px;' width='16px'/>
                              </b:if>
                              <a expr:name='data:comment.anchorName'/>
                              <b:if cond='data:blog.enabledCommentProfileImages'>
                                <data:comment.authorAvatarImage/>
                              </b:if>
                              <b:if cond='data:comment.authorUrl'>
                                <a expr:href='data:comment.authorUrl' rel='nofollow'><data:comment.author/></a>
                                <b:else/>
                                <data:comment.author/>
                              </b:if>
                              <data:commentPostedByMsg/>
                            </dt>
                            <dd class='comment-body' expr:id='data:widget.instanceId + data:comment.cmtBodyIdPostfix'>
                              <b:if cond='data:comment.isDeleted'>
                                <span class='deleted-comment'><data:comment.body/></span>
                                <b:else/>
                                <p>
                                  <data:comment.body/>
                                </p>
                              </b:if>
                            </dd>
                            <dd class='comment-footer'>
                              <span class='comment-timestamp'>
                                <a expr:href='data:comment.url' title='comment permalink'>
                                  <data:comment.timestamp/>
                                </a>
                                <b:include data='comment' name='commentDeleteIcon'/>
                              </span>
                            </dd>
                          </b:loop>
                        </dl>
                      </div>

                      <b:if cond='data:post.commentPagingRequired'>
                        <span class='paging-control-container'>
                          <a expr:class='data:post.oldLinkClass' expr:href='data:post.oldestLinkUrl'>
                            <data:post.oldestLinkText/>
                          </a>
                          <a expr:class='data:post.oldLinkClass' expr:href='data:post.olderLinkUrl'>
                            <data:post.olderLinkText/>
                          </a>
                          &#160;
                          <data:post.commentRangeText/>
                          &#160;
                          <a expr:class='data:post.newLinkClass' expr:href='data:post.newerLinkUrl'>
                            <data:post.newerLinkText/>
                          </a>
                          <a expr:class='data:post.newLinkClass' expr:href='data:post.newestLinkUrl'>
                            <data:post.newestLinkText/>
                          </a>
                        </span>
                      </b:if>

                      <p class='comment-footer'>
                        <b:if cond='data:post.embedCommentForm'>
                          <b:if cond='data:post.allowNewComments'>
                            <b:include data='post' name='comment-form'/>
                            <b:else/>
                            <data:post.noNewCommentsText/>
                          </b:if>
                          <b:elseif cond='data:post.allowComments'/>
                          <a expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'><data:postCommentMsg/></a>
                        </b:if>
                      </p>
                    </b:if>
                    <b:if cond='data:showCmtPopup'>
                      <div id='comment-popup'>
                        <iframe allowtransparency='true' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'>
                        </iframe>
                      </div>
                    </b:if>

                    <div id='backlinks-container'>
                      <div expr:id='data:widget.instanceId + &quot;_backlinks-container&quot;'>
                        <b:include cond='data:post.showBacklinks' data='post' name='backlinks'/>
                      </div>
                    </div>
                  </div>
                </b:includable>
                <b:includable id='feedLinks'>
                  <b:if cond='data:blog.pageType != &quot;item&quot;'> <!-- Blog feed links -->
                    <b:if cond='data:feedLinks'>
                      <div class='blog-feeds'>
                        <b:include data='feedLinks' name='feedLinksBody'/>
                      </div>
                    </b:if>

                    <b:else/> <!--Post feed links -->
                    <div class='post-feeds'>
                      <b:loop values='data:posts' var='post'>
                        <b:include cond='data:post.allowComments and data:post.feedLinks' data='post.feedLinks' name='feedLinksBody'/>
                      </b:loop>
                    </div>
                  </b:if>
                </b:includable>
                <b:includable id='feedLinksBody' var='links'>
                  <div class='feed-links'>
                    <data:feedLinksMsg/>
                    <b:loop values='data:links' var='f'>
                      <a class='feed-link' expr:href='data:f.url' expr:type='data:f.mimeType' target='_blank'><data:f.name/> (<data:f.feedType/>)</a>
                    </b:loop>
                  </div>
                </b:includable>
                <b:includable id='iframe_comments' var='post'>

                  <b:if cond='data:post.allowIframeComments'>
                    <script expr:src='data:post.iframeCommentSrc' type='text/javascript'/>
                    <div class='cmt_iframe_holder' expr:data-href='data:post.url.canonical' expr:data-viewtype='data:post.viewType'/>

                    <b:if cond='data:post.embedCommentForm == &quot;false&quot;'>
                      <a expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'><data:postCommentMsg/></a>
                    </b:if>
                  </b:if>
                </b:includable>
                <b:includable id='mobile-index-post' var='post'>
                  <div class='mobile-date-outer date-outer'>
                    <b:if cond='data:post.dateHeader'>
                      <div class='date-header'>
                        <span><data:post.dateHeader/></span>
                      </div>
                    </b:if>

                    <div class='mobile-post-outer'>
                      <a expr:href='data:post.url'>
                        <h3 class='mobile-index-title entry-title' itemprop='name'>
                          <data:post.title/>
                        </h3>

                        <div class='mobile-index-arrow'>&amp;rsaquo;</div>

                        <div class='mobile-index-contents'>
                          <b:if cond='data:post.thumbnailUrl'>
                            <div class='mobile-index-thumbnail'>
                              <div class='Image'>
                                <img expr:src='data:post.thumbnailUrl'/>
                              </div>
                            </div>
                          </b:if>

                          <div class='post-body'>
                            <b:if cond='data:post.snippet'><data:post.snippet/></b:if>
                          </div>
                        </div>

                        <div style='clear: both;'/>
                      </a>

                      <div class='mobile-index-comment'>
                        <b:include cond='data:blog.pageType != &quot;static_page&quot;                          and data:post.allowComments                          and data:post.numComments != 0' data='post' name='comment_count_picker'/>
                      </div>
                    </div>
                  </div>
                </b:includable>
                <b:includable id='mobile-main' var='top'>
                  <!-- posts -->
                  <div class='blog-posts hfeed'>

                    <b:include data='top' name='status-message'/>

                    <b:if cond='data:blog.pageType == &quot;index&quot;'>
                      <b:loop values='data:posts' var='post'>
                        <b:include data='post' name='mobile-index-post'/>
                      </b:loop>
                      <b:else/>
                      <b:loop values='data:posts' var='post'>
                        <b:include data='post' name='mobile-post'/>
                      </b:loop>
                    </b:if>
                  </div>

                  <b:include name='mobile-nextprev'/>
                </b:includable>
                <b:includable id='mobile-nextprev'>
                  <div class='blog-pager' id='blog-pager'>
                    <b:if cond='data:newerPageUrl'>
                      <div class='mobile-link-button' id='blog-pager-newer-link'>
                        <a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:newerPageTitle'>&amp;lsaquo;</a>
                      </div>
                    </b:if>

                    <b:if cond='data:olderPageUrl'>
                      <div class='mobile-link-button' id='blog-pager-older-link'>
                        <a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:olderPageTitle'>&amp;rsaquo;</a>
                      </div>
                    </b:if>

                    <div class='mobile-link-button' id='blog-pager-home-link'>
                      <a class='home-link' expr:href='data:blog.homepageUrl'><data:homeMsg/></a>
                    </div>

                    <div class='mobile-desktop-link'>
                      <a class='home-link' expr:href='data:desktopLinkUrl'><data:desktopLinkMsg/></a>
                    </div>

                  </div>
                  <div class='clear'/>
                </b:includable>
                <b:includable id='mobile-post' var='post'>
                  <div class='date-outer'>
                    <b:if cond='data:post.dateHeader'>
                      <h2 class='date-header'><span><data:post.dateHeader/></span></h2>
                    </b:if>
                    <div class='date-posts'>
                      <div class='post-outer'>

                        <div class='post hentry uncustomized-post-template' itemscope='itemscope' itemtype='http://schema.org/BlogPosting'>
                          <b:if cond='data:post.thumbnailUrl'>
                            <meta expr:content='data:post.thumbnailUrl' itemprop='image_url'/>
                          </b:if>
                          <meta expr:content='data:blog.blogId' itemprop='blogId'/>
                          <meta expr:content='data:post.id' itemprop='postId'/>

                          <a expr:name='data:post.id'/>
                          <b:if cond='data:post.title'>
                            <h3 class='post-title entry-title' itemprop='name'>
                              <b:if cond='data:post.link'>
                                <a expr:href='data:post.link'><data:post.title/></a>
                                <b:elseif cond='data:post.url and data:blog.url != data:post.url'/>
                                <a expr:href='data:post.url'><data:post.title/></a>
                                <b:else/>
                                <data:post.title/>
                              </b:if>
                            </h3>
                          </b:if>

                          <div class='post-header'>
                            <div class='post-header-line-1'/>
                          </div>

                          <div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id' itemprop='articleBody'>
                            <data:post.body/>
                            <div style='clear: both;'/> <!-- clear for photos floats -->
                          </div>

                          <div class='post-footer'>
                            <div class='post-footer-line post-footer-line-1'>
                              <span class='post-author vcard'>
                                <b:if cond='data:top.showAuthor'>
                                  <b:if cond='data:post.authorProfileUrl'>
                                    <span class='fn' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
                                      <meta expr:content='data:post.authorProfileUrl' itemprop='url'/>
                                      <a expr:href='data:post.authorProfileUrl' rel='author' title='author profile'>
                                        <span itemprop='name'><data:post.author/></span>
                                      </a>
                                    </span>
                                    <b:else/>
                                    <span class='fn' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
                                      <span itemprop='name'><data:post.author/></span>
                                    </span>
                                  </b:if>
                                </b:if>
                              </span>

                              <span class='post-timestamp'>
                                <b:if cond='data:top.showTimestamp'>
                                  <data:top.timestampLabel/>
                                  <b:if cond='data:post.url'>
                                    <meta expr:content='data:post.url.canonical' itemprop='url'/>
                                    <a class='timestamp-link' expr:href='data:post.url' rel='bookmark' title='permanent link'><abbr class='published' expr:title='data:post.timestampISO8601' itemprop='datePublished'><data:post.timestamp/></abbr></a>
                                  </b:if>
                                </b:if>
                              </span>

                              <span class='post-comment-link'>
                                <b:include cond='data:blog.pageType not in {&quot;item&quot;,&quot;static_page&quot;}                                  and data:post.allowComments' data='post' name='comment_count_picker'/>
                              </span>
                            </div>

                            <div class='post-footer-line post-footer-line-2'>
                              <b:if cond='data:top.showMobileShare'>
                                <div class='mobile-link-button goog-inline-block' id='mobile-share-button'>
                                  <a href='javascript:void(0);'><data:shareMsg/></a>
                                </div>
                              </b:if>
                              <b:if cond='data:top.showDummy'>
                                <div class='goog-inline-block dummy-container'><data:post.dummyTag/></div>
                              </b:if>
                            </div>

                          </div>
                        </div>

                        <b:include cond='data:blog.pageType in {&quot;static_page&quot;,&quot;item&quot;}' data='post' name='comment_picker'/>
                      </div>
                    </div>
                  </div>
                </b:includable>
                <b:includable id='nextprev'>
                  <div class='blog-pager' id='blog-pager'>
                    <b:if cond='data:newerPageUrl'>
                      <span id='blog-pager-newer-link'>
                        <a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:newerPageTitle'><data:newerPageTitle/></a>
                      </span>
                    </b:if>

                    <b:if cond='data:olderPageUrl'>
                      <span id='blog-pager-older-link'>
                        <a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:olderPageTitle'><data:olderPageTitle/></a>
                      </span>
                    </b:if>

                    <a class='home-link' expr:href='data:blog.homepageUrl'><data:homeMsg/></a>

                    <b:if cond='data:mobileLinkUrl'>
                      <div class='blog-mobile-link'>
                        <a expr:href='data:mobileLinkUrl'><data:mobileLinkMsg/></a>
                      </div>
                    </b:if>

                  </div>
                  <div class='clear'/>
                </b:includable>
                <b:includable id='post' var='post'>
                  <div class='post hentry uncustomized-post-template' itemprop='blogPost' itemscope='itemscope' itemtype='http://schema.org/BlogPosting'>
                    <b:if cond='data:post.firstImageUrl'>
                      <meta expr:content='data:post.firstImageUrl' itemprop='image_url'/>
                    </b:if>
                    <meta expr:content='data:blog.blogId' itemprop='blogId'/>
                    <meta expr:content='data:post.id' itemprop='postId'/>

                    <a expr:name='data:post.id'/>
                    <b:if cond='data:post.title'>
                      <h3 class='post-title entry-title' itemprop='name'>
                        <b:if cond='data:post.link or (data:post.url and data:blog.url != data:post.url)'>
                          <a expr:href='data:post.link ? data:post.link : data:post.url'><data:post.title/></a>
                          <b:else/>
                          <data:post.title/>
                        </b:if>
                      </h3>
                    </b:if>

                    <div class='post-header'>
                      <div class='post-header-line-1'/>
                    </div>

                    <!-- Then use the post body as the schema.org description, for good G+/FB snippeting. -->
                    <div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id' expr:itemprop='(data:blog.metaDescription ? &quot;&quot; : &quot;description &quot;) + &quot;articleBody&quot;'>
                      <data:post.body/>
                      <div style='clear: both;'/> <!-- clear for photos floats -->
                    </div>

                    <b:if cond='data:post.hasJumpLink'>
                      <div class='jump-link'>
                        <a expr:href='data:post.url + &quot;#more&quot;' expr:title='data:post.title'><data:post.jumpText/></a>
                      </div>
                    </b:if>

                    <div class='post-footer'>
                      <div class='post-footer-line post-footer-line-1'>
                        <span class='post-author vcard'>
                          <b:if cond='data:top.showAuthor'>
                            <data:top.authorLabel/>
                            <b:if cond='data:post.authorProfileUrl'>
                              <span class='fn' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
                                <meta expr:content='data:post.authorProfileUrl' itemprop='url'/>
                                <a class='g-profile' expr:href='data:post.authorProfileUrl' rel='author' title='author profile'>
                                  <span itemprop='name'><data:post.author/></span>
                                </a>
                              </span>
                              <b:else/>
                              <span class='fn' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
                                <span itemprop='name'><data:post.author/></span>
                              </span>
                            </b:if>
                          </b:if>
                        </span>

                        <span class='post-timestamp'>
                          <b:if cond='data:top.showTimestamp'>
                            <data:top.timestampLabel/>
                            <b:if cond='data:post.url'>
                              <meta expr:content='data:post.url.canonical' itemprop='url'/>
                              <a class='timestamp-link' expr:href='data:post.url' rel='bookmark' title='permanent link'><abbr class='published' expr:title='data:post.timestampISO8601' itemprop='datePublished'><data:post.timestamp/></abbr></a>
                            </b:if>
                          </b:if>
                        </span>

                        <span class='reaction-buttons'>
                          <b:if cond='data:top.showReactions'>
                            <table border='0' cellpadding='0' cellspacing='0' width='100%'><tr>
                              <td class='reactions-label-cell' nowrap='nowrap' valign='top' width='1%'>
                                <span class='reactions-label'>
                                  <data:top.reactionsLabel/></span>&#160;</td>
                              <td><iframe allowtransparency='true' class='reactions-iframe' expr:src='data:post.reactionsUrl' frameborder='0' name='reactions' scrolling='no'/></td>
                              </tr></table>
                          </b:if>
                        </span>

                        <span class='post-comment-link'>
                          <b:include cond='data:blog.pageType not in {&quot;item&quot;,&quot;static_page&quot;}                          and data:post.allowComments' data='post' name='comment_count_picker'/>
                        </span>

                        <!-- backlinks -->
                        <span class='post-backlinks post-comment-link'>
                          <b:if cond='data:blog.pageType not in {&quot;item&quot;,&quot;static_page&quot;}                      and data:post.showBacklinks'>
                            <a class='comment-link' expr:href='data:post.url + &quot;#links&quot;'><data:top.backlinkLabel/></a>
                          </b:if>
                        </span>

                        <span class='post-icons'>
                          <!-- email post links -->
                          <b:if cond='data:post.emailPostUrl'>
                            <span class='item-action'>
                              <a expr:href='data:post.emailPostUrl' expr:title='data:top.emailPostMsg'>
                                <img alt='' class='icon-action' height='13' src='https://resources.blogblog.com/img/icon18_email.gif' width='18'/>
                              </a>
                            </span>
                          </b:if>

                          <!-- quickedit pencil -->
                          <b:include data='post' name='postQuickEdit'/>
                        </span>

                        <!-- share buttons -->
                        <div class='post-share-buttons goog-inline-block'>
                          <b:include cond='data:post.sharePostUrl' data='post' name='shareButtons'/>
                        </div>

                      </div>

                      <div class='post-footer-line post-footer-line-2'>
                        <span class='post-labels'>
                          <b:if cond='data:top.showPostLabels and data:post.labels'>
                            <data:postLabelsLabel/>
                            <b:loop values='data:post.labels' var='label'>
                              <a expr:href='data:label.url' rel='tag'><data:label.name/></a><b:if cond='not data:label.isLast'>,</b:if>
                            </b:loop>
                          </b:if>
                        </span>
                      </div>

                      <div class='post-footer-line post-footer-line-3'>
                        <span class='post-location'>
                          <b:if cond='data:top.showLocation and data:post.location'>
                            <data:postLocationLabel/>
                            <a expr:href='data:post.location.mapsUrl' target='_blank'><data:post.location.name/></a>
                          </b:if>
                        </span>
                      </div>
                      <b:if cond='data:post.authorAboutMe'>
                        <div class='author-profile' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
                          <b:if cond='data:post.authorPhoto.url'>
                            <img expr:src='data:post.authorPhoto.url' itemprop='image' width='50px'/>
                          </b:if>
                          <div>
                            <a class='g-profile' expr:href='data:post.authorProfileUrl' itemprop='url' rel='author' title='author profile'>
                              <span itemprop='name'><data:post.author/></span>
                            </a>
                          </div>
                          <span itemprop='description'><data:post.authorAboutMe/></span>
                        </div>
                      </b:if>
                    </div>
                  </div>
                </b:includable>
                <b:includable id='postQuickEdit' var='post'>
                  <b:if cond='data:post.editUrl'>
                    <span expr:class='&quot;item-control &quot; + data:post.adminClass'>
                      <a expr:href='data:post.editUrl' expr:title='data:top.editPostMsg'>
                        <img alt='' class='icon-action' height='18' src='https://resources.blogblog.com/img/icon18_edit_allbkg.gif' width='18'/>
                      </a>
                    </span>
                  </b:if>
                </b:includable>
                <b:includable id='shareButtons' var='post'>
                  <b:if cond='data:top.showEmailButton'><a class='goog-inline-block share-button sb-email' expr:href='data:post.sharePostUrl + &quot;&amp;target=email&quot;' expr:title='data:top.emailThisMsg' target='_blank'><span class='share-button-link-text'><data:top.emailThisMsg/></span></a></b:if><b:if cond='data:top.showBlogThisButton'><a class='goog-inline-block share-button sb-blog' expr:href='data:post.sharePostUrl + &quot;&amp;target=blog&quot;' expr:onclick='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=270,width=475\&quot;); return false;&quot;' expr:title='data:top.blogThisMsg' target='_blank'><span class='share-button-link-text'><data:top.blogThisMsg/></span></a></b:if><b:if cond='data:top.showTwitterButton'><a class='goog-inline-block share-button sb-twitter' expr:href='data:post.sharePostUrl + &quot;&amp;target=twitter&quot;' expr:title='data:top.shareToTwitterMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToTwitterMsg/></span></a></b:if><b:if cond='data:top.showFacebookButton'><a class='goog-inline-block share-button sb-facebook' expr:href='data:post.sharePostUrl + &quot;&amp;target=facebook&quot;' expr:onclick='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=430,width=640\&quot;); return false;&quot;' expr:title='data:top.shareToFacebookMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToFacebookMsg/></span></a></b:if><b:if cond='data:top.showPinterestButton'><a class='goog-inline-block share-button sb-pinterest' expr:href='data:post.sharePostUrl + &quot;&amp;target=pinterest&quot;' expr:title='data:top.shareToPinterestMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToPinterestMsg/></span></a></b:if><b:if cond='data:top.showPlusOne'><div class='goog-inline-block google-plus-share-container'><data:post.googlePlusShareTag/></div></b:if>
                </b:includable>
                <b:includable id='status-message'>
                  <b:if cond='data:navMessage'>
                    <div class='status-msg-wrap'>
                      <div class='status-msg-body'>
                        <data:navMessage/>
                      </div>
                      <div class='status-msg-border'>
                        <div class='status-msg-bg'>
                          <div class='status-msg-hidden'><data:navMessage/></div>
                        </div>
                      </div>
                    </div>
                    <div style='clear: both;'/>
                  </b:if>
                </b:includable>
                <b:includable id='threaded-comment-form' var='post'>
                  <div class='comment-form'>
                    <a name='comment-form'/>
                    <b:if cond='data:mobile'>
                      <p><data:blogCommentMessage/></p>
                      <data:blogTeamBlogMessage/>
                      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
                      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight' frameborder='0' id='comment-editor' name='comment-editor' src='' style='display: none' width='100%'/>
                      <b:else/>
                      <p><data:blogCommentMessage/></p>
                      <data:blogTeamBlogMessage/>
                      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
                      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight' frameborder='0' id='comment-editor' name='comment-editor' src='' width='100%'/>
                    </b:if>
                    <data:post.cmtfpIframe/>
                    <script type='text/javascript'>
                      BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);
                    </script>
                  </div>
                </b:includable>
                <b:includable id='threaded_comment_js' var='post'>
                  <script async='async' expr:src='data:post.commentSrc' type='text/javascript'/>

                  <script type='text/javascript'>
                    (function() {
                      var items = <data:post.commentJso/>;
                      var msgs = <data:post.commentMsgs/>;
                      var config = <data:post.commentConfig/>;

                      // <![CDATA[
                      var cursor = null;
                      if (items && items.length > 0) {
                        cursor = parseInt(items[items.length - 1].timestamp) + 1;
                      }

                      var bodyFromEntry = function(entry) {
                        if (entry.gd$extendedProperty) {
                          for (var k in entry.gd$extendedProperty) {
                            if (entry.gd$extendedProperty[k].name == 'blogger.contentRemoved') {
                              return '<span class="deleted-comment">' + entry.content.$t + '</span>';
                            }
                          }
                        }
                        return entry.content.$t;
                      }

                      var parse = function(data) {
                        cursor = null;
                        var comments = [];
                        if (data && data.feed && data.feed.entry) {
                          for (var i = 0, entry; entry = data.feed.entry[i]; i++) {
                            var comment = {};
                            // comment ID, parsed out of the original id format
                            var id = /blog-(\d+).post-(\d+)/.exec(entry.id.$t);
                            comment.id = id ? id[2] : null;
                            comment.body = bodyFromEntry(entry);
                            comment.timestamp = Date.parse(entry.published.$t) + '';
                            if (entry.author && entry.author.constructor === Array) {
                              var auth = entry.author[0];
                              if (auth) {
                                comment.author = {
                                  name: (auth.name ? auth.name.$t : undefined),
                                  profileUrl: (auth.uri ? auth.uri.$t : undefined),
                                  avatarUrl: (auth.gd$image ? auth.gd$image.src : undefined)
                                };
                              }
                            }
                            if (entry.link) {
                              if (entry.link[2]) {
                                comment.link = comment.permalink = entry.link[2].href;
                              }
                              if (entry.link[3]) {
                                var pid = /.*comments\/default\/(\d+)\?.*//*varunvarunvarun.exec(entry.link[3].href);
                                if (pid && pid[1]) {
                                  comment.parentId = pid[1];
                                }
                              }
                            }
                            comment.deleteclass = 'item-control blog-admin';
                            if (entry.gd$extendedProperty) {
                              for (var k in entry.gd$extendedProperty) {
                                if (entry.gd$extendedProperty[k].name == 'blogger.itemClass') {
                                  comment.deleteclass += ' ' + entry.gd$extendedProperty[k].value;
                                } else if (entry.gd$extendedProperty[k].name == 'blogger.displayTime') {
                                  comment.displayTime = entry.gd$extendedProperty[k].value;
                                }
                              }
                            }
                            comments.push(comment);
                          }
                        }
                        return comments;
                      };

                      var paginator = function(callback) {
                        if (hasMore()) {
                          var url = config.feed + '?alt=json&v=2&orderby=published&reverse=false&max-results=50';
                          if (cursor) {
                            url += '&published-min=' + new Date(cursor).toISOString();
                          }
                          window.bloggercomments = function(data) {
                            var parsed = parse(data);
                            cursor = parsed.length < 50 ? null
                            : parseInt(parsed[parsed.length - 1].timestamp) + 1
                            callback(parsed);
                            window.bloggercomments = null;
                          }
                          url += '&callback=bloggercomments';
                          var script = document.createElement('script');
                          script.type = 'text/javascript';
                          script.src = url;
                          document.getElementsByTagName('head')[0].appendChild(script);
                        }
                      };
                      var hasMore = function() {
                        return !!cursor;
                      };
                      var getMeta = function(key, comment) {
                        if ('iswriter' == key) {
                          var matches = !!comment.author
                          && comment.author.name == config.authorName
                          && comment.author.profileUrl == config.authorUrl;
                          return matches ? 'true' : '';
                        } else if ('deletelink' == key) {
                          return config.baseUri + '/delete-comment.g?blogID='
                          + config.blogId + '&postID=' + comment.id;
                        } else if ('deleteclass' == key) {
                          return comment.deleteclass;
                        }
                        return '';
                      };

                      var replybox = null;
                      var replyUrlParts = null;
                      var replyParent = undefined;

                      var onReply = function(commentId, domId) {
                        if (replybox == null) {
                          // lazily cache replybox, and adjust to suit this style:
                          replybox = document.getElementById('comment-editor');
                          if (replybox != null) {
                            replybox.height = '250px';
                            replybox.style.display = 'block';
                            replyUrlParts = replybox.src.split('#');
                          }
                        }
                        if (replybox && (commentId !== replyParent)) {
                          replybox.src = '';
                          document.getElementById(domId).insertBefore(replybox, null);
                          replybox.src = replyUrlParts[0]
                          + (commentId ? '&parentID=' + commentId : '')
                          + '#' + replyUrlParts[1];
                          replyParent = commentId;
                        }
                      };

                      var hash = (window.location.hash || '#').substring(1);
                      var startThread, targetComment;
                      if (/^comment-form_/.test(hash)) {
                        startThread = hash.substring('comment-form_'.length);
                      } else if (/^c[0-9]+$/.test(hash)) {
                        targetComment = hash.substring(1);
                      }

                      // Configure commenting API:
                      var configJso = {
                        'maxDepth': config.maxThreadDepth
                      };
                      var provider = {
                        'id': config.postId,
                        'data': items,
                        'loadNext': paginator,
                        'hasMore': hasMore,
                        'getMeta': getMeta,
                        'onReply': onReply,
                        'rendered': true,
                        'initComment': targetComment,
                        'initReplyThread': startThread,
                        'config': configJso,
                        'messages': msgs
                      };

                      var render = function() {
                        if (window.goog && window.goog.comments) {
                          var holder = document.getElementById('comment-holder');
                          window.goog.comments.render(holder, provider);
                        }
                      };

                      // render now, or queue to render when library loads:
                      if (window.goog && window.goog.comments) {
                        render();
                      } else {
                        window.goog = window.goog || {};
                        window.goog.comments = window.goog.comments || {};
                        window.goog.comments.loadQueue = window.goog.comments.loadQueue || [];
                        window.goog.comments.loadQueue.push(render);
                      }
                    })();
                    // ]]>
                  </script>
                </b:includable>
                <b:includable id='threaded_comments' var='post'>
                  <div class='comments' id='comments'>
                    <a name='comments'/>
                    <h4><data:post.commentLabelFull/>:</h4>

                    <div class='comments-content'>
                      <b:include cond='data:post.embedCommentForm' data='post' name='threaded_comment_js'/>
                      <div id='comment-holder'>
                        <data:post.commentHtml/>
                      </div>
                    </div>

                    <p class='comment-footer'>
                      <b:if cond='data:post.allowNewComments'>
                        <b:include data='post' name='threaded-comment-form'/>
                        <b:else/>
                        <data:post.noNewCommentsText/>
                      </b:if>
                    </p>

                    <b:if cond='data:showCmtPopup'>
                      <div id='comment-popup'>
                        <iframe allowtransparency='true' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'>
                        </iframe>
                      </div>
                    </b:if>

                    <div id='backlinks-container'>
                      <div expr:id='data:widget.instanceId + &quot;_backlinks-container&quot;'>
                        <b:include cond='data:post.showBacklinks' data='post' name='backlinks'/>
                      </div>
                    </div>
                  </div>
                </b:includable>
              </b:widget>
            </b:section>
          </article>
        </div>

        <aside class='col-md-2 '>
          <b:section class='sidebar' id='sidebar' preferred='yes' showaddelement='yes'>
            <b:widget id='BlogArchive1' locked='false' mobile='yes' title='Blog Archive' type='BlogArchive' version='1' visible='true'>
              <b:includable id='main'>
                <b:if cond='data:title != &quot;&quot;'>
                  <h2><data:title/></h2>
                </b:if>
                <div class='widget-content'>
                  <div id='ArchiveList'>
                    <div expr:id='data:widget.instanceId + &quot;_ArchiveList&quot;'>
                      <b:include cond='data:style == &quot;HIERARCHY&quot;' data='data' name='interval'/>
                      <b:include cond='data:style == &quot;FLAT&quot;' data='data' name='flat'/>
                      <b:include cond='data:style == &quot;MENU&quot;' data='data' name='menu'/>
                    </div>
                  </div>
                  <b:include name='quickedit'/>
                </div>
              </b:includable>
              <b:includable id='flat' var='data'>
                <ul class='flat'>
                  <b:loop values='data:data' var='i'>
                    <li class='archivedate'>
                      <a expr:href='data:i.url'><data:i.name/></a> (<data:i.post-count/>)
                    </li>
                  </b:loop>
                </ul>
              </b:includable>
              <b:includable id='interval' var='intervalData'>
                <b:loop values='data:intervalData' var='interval'>
                  <ul class='hierarchy'>
                    <li expr:class='&quot;archivedate &quot; + data:interval.expclass'>
                      <b:include cond='data:interval.toggleId' data='interval' name='toggle'/>
                      <a class='post-count-link' expr:href='data:interval.url'>
                        <data:interval.name/>
                      </a>
                      <span class='post-count' dir='ltr'>(<data:interval.post-count/>)</span>
                      <b:include cond='data:interval.data' data='interval.data' name='interval'/>
                      <b:include cond='data:interval.posts' data='interval.posts' name='posts'/>
                    </li>
                  </ul>
                </b:loop>
              </b:includable>
              <b:includable id='menu' var='data'>
                <select expr:id='data:widget.instanceId + &quot;_ArchiveMenu&quot;'>
                  <option value=''><data:title/></option>
                  <b:loop values='data:data' var='i'>
                    <option expr:value='data:i.url'><data:i.name/> (<data:i.post-count/>)</option>
                  </b:loop>
                </select>
              </b:includable>
              <b:includable id='posts' var='posts'>
                <ul class='posts'>
                  <b:loop values='data:posts' var='post'>
                    <li><a expr:href='data:post.url'><data:post.title/></a></li>
                  </b:loop>
                </ul>
              </b:includable>
              <b:includable id='toggle' var='interval'>
                <a class='toggle' href='javascript:void(0)'>
                  <span expr:class='&quot;zippy&quot; + (data:interval.expclass == &quot;expanded&quot; ? &quot; toggle-open&quot; : &quot;&quot;)'>
                    <b:if cond='data:interval.expclass == &quot;expanded&quot;'>
                      &#9660;&#160;
                      <b:elseif cond='data:blog.languageDirection == &quot;rtl&quot;'/>
                      &#9668;&#160;
                      <b:else/>
                      &#9658;&#160;
                    </b:if>
                  </span>
                </a>
              </b:includable>
            </b:widget>
          </b:section>
        </aside>
      


    <footer class='flex-rw'>

      <ul class='footer-list-top'>
        <li>
          <h4 class='footer-list-header'>About Pavilion</h4></li>
        <li><a class='generic-anchor footer-list-anchor' href='/shop/about-mission' itemprop='significantLink'>GET TO KNOW US</a></li>
        <li><a class='generic-anchor footer-list-anchor' href='/promos.html' itemprop='significantLink'>PROMOS</a></li>
        <li><a class='generic-anchor footer-list-anchor' href='/retailers/new-retailers.html' itemprop='significantLink'>BECOME A RETAILER</a></li>

        <li><a class='generic-anchor footer-list-anchor' href='/job-openings.html' itemprop='significantLink'>JOB OPENINGS</a></li>

        <li><a class='generic-anchor footer-list-anchor' href='/shop/about-show-schedule' itemprop='significantLink'>EVENTS</a></li>
      </ul>
      <ul class='footer-list-top'>
        <li>
          <h4 class='footer-list-header'>The Gift Selection</h4></li>


        <li><a class='generic-anchor footer-list-anchor' href='/Angels/cat/id/70'>ANGEL FIGURINES</a></li>
        <li><a class='generic-anchor footer-list-anchor' href='/Home-Decor/cat/id/64'>HOME DECOR</a></li>
        <li><a class='generic-anchor footer-list-anchor' href='/Mugs/cat/id/32'>MUGS</a></li>
        <li><a class='generic-anchor footer-list-anchor' href='/Pet-Lover/cat/id/108'>PET LOVER</a></li>
        <li><a class='generic-anchor footer-list-anchor' href='/Ladies-Accessories/cat/id/117' target='_blank'>HANDBAGS n JEWELRY</a></li>
      </ul>
      <ul class='footer-list-top'>
        <li id='help'>
          <h4 class='footer-list-header'>Please Help Me</h4></li>
        <li><a class='generic-anchor footer-list-anchor' href='/shop/about-contact' itemprop='significantLink'>CONTACT</a></li>
        <li><a class='generic-anchor footer-list-anchor' href='/faq.html' itemprop='significantLink'>FAQ</a></li>
        <li id='find-a-store'><a class='generic-anchor footer-list-anchor' href='/shop/store-locator' itemprop='significantLink'>STORE LOCATOR</a></li>
        <li id='user-registration'><a class='generic-anchor footer-list-anchor' href='/shop/user-registration?URL=' itemprop='significantLink'>NEW USERS</a></li>
        <li id='order-tracking'><a class='generic-anchor footer-list-anchor' href='/shop/order-status' itemprop='significantLink'>ORDER STATUS</a></li>
      </ul>
      <section class='footer-social-section flex-rw'>
        <span class='footer-social-overlap footer-social-connect'>
          CONNECT <span class='footer-social-small'>with</span> US
        </span>
        <span class='footer-social-overlap footer-social-icons-wrapper'>
          <a class='generic-anchor' href='http://www.pinterest.com/paviliongift/' itemprop='significantLink' target='_blank' title='Pinterest'><i class='fa fa-pinterest'/></a>
          <a class='generic-anchor' href='https://www.facebook.com/paviliongift' itemprop='significantLink' target='_blank' title='Facebook'><i class='fa fa-facebook'/></a>
          <a class='generic-anchor' href='https://twitter.com/PavilionGiftCo' itemprop='significantLink' target='_blank' title='Twitter'><i class='fa fa-twitter'/></a>
          <a class='generic-anchor' href='http://instagram.com/paviliongiftcompany' itemprop='significantLink' target='_blank' title='Instagram'><i class='fa fa-instagram'/></a>
          <a class='generic-anchor' href='https://www.youtube.com/channel/UCYgUODvd0qXbu_LkUWpTVEg' itemprop='significantLink' target='_blank' title='Youtube'><i class='fa fa-youtube'/></a>
          <a class='generic-anchor' href='https://plus.google.com/+Paviliongift/posts' itemprop='significantLink' target='_blank' title='Google Plus'><i class='fa fa-google-plus'/></a>
        </span>
      </section>
      <section class='footer-bottom-section flex-rw'>
        <div class='footer-bottom-wrapper'>   
          <i class='fa fa-copyright' role='copyright'>

          </i> 2015 Pavilion in <address class='footer-address' role='company address'>Bergen, NY</address><span class='footer-bottom-rights'> - All Rights Reserved - </span>
        </div>
        <div class='footer-bottom-wrapper'>
          <a class='generic-anchor' href='/terms-of-use.html' rel='nofollow'>Terms</a> | <a class='generic-anchor' href='/privacy-policy.html' rel='nofollow'>Privacy</a>
        </div>
      </section>
    </footer>

   </div><!-- /.canvas -->



    <script type='text/javascript'>
      //<![CDATA[
      var prev = 0;
      var $window = $(window);
      var nav = $('.navbar');

      $window.on('scroll', function(){
        var scrollTop = $window.scrollTop();
        nav.toggleClass('hid', scrollTop > prev);
        prev = scrollTop;
      });

      //]]>
    </script>
    <script type='text/javascript'>
      //<![CDATA[
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
jQuery(document).ready(function($){
	var articlesWrapper = $('.cd-articles');
	if( articlesWrapper.length > 0 ){
		// cache jQuery objects
		var windowHeight = $(window).height(),
			articles = articlesWrapper.find('article'),
			aside = $('.cd-read-more'),
			articleSidebarLinks = aside.find('li');
		// initialize variables
		var	scrolling = false,
			sidebarAnimation = false,
			resizing = false,
			mq = checkMQ(),
			svgCircleLength = parseInt(Math.PI*(articleSidebarLinks.eq(0).find('circle').attr('r')*2));
		// check media query and bind corresponding events
		if( mq == 'desktop' ) {
			$(window).on('scroll', checkRead);
			$(window).on('scroll', checkSidebar);}
		$(window).on('resize', resetScroll);
		updateArticle();updateSidebarPosition();
		aside.on('click', 'a', function(event){
			event.preventDefault();
			var selectedArticle = articles.eq($(this).parent('li').index()),
				selectedArticleTop = selectedArticle.offset().top;
			$(window).off('scroll', checkRead);
			$('body,html').animate(
				{'scrollTop': selectedArticleTop + 2}, 
				300, function(){checkRead();
					$(window).on('scroll', checkRead);
				});});}
	function checkRead(){
		if( !scrolling ){
			scrolling = true;
			(!window.requestAnimationFrame) ? setTimeout(updateArticle, 300) : window.requestAnimationFrame(updateArticle);}}
	function checkSidebar(){
		if( !sidebarAnimation){sidebarAnimation = true;
			(!window.requestAnimationFrame) ? setTimeout(updateSidebarPosition, 300) : window.requestAnimationFrame(updateSidebarPosition);}}
	function resetScroll(){if( !resizing ){resizing = true;
			(!window.requestAnimationFrame) ? setTimeout(updateParams, 300) : window.requestAnimationFrame(updateParams);}}
	function updateParams(){windowHeight = $(window).height();mq = checkMQ();
		$(window).off('scroll', checkRead);
		$(window).off('scroll', checkSidebar);
		if( mq == 'desktop'){
			$(window).on('scroll', checkRead);
			$(window).on('scroll', checkSidebar);
		}resizing = false;}
	function updateArticle(){
		var scrollTop = $(window).scrollTop();
		articles.each(function(){
			var article = $(this),
				articleTop = article.offset().top,
				articleHeight = article.outerHeight(),
				articleSidebarLink = articleSidebarLinks.eq(article.index()).children('a');
			if( article.is(':last-of-type') ) articleHeight = articleHeight - windowHeight;
			if( articleTop > scrollTop){articleSidebarLink.removeClass('read reading');}
			else if( scrollTop >= articleTop && articleTop + articleHeight > scrollTop){
				var dashoffsetValue = svgCircleLength*( 1 - (scrollTop - articleTop)/articleHeight);
				articleSidebarLink.addClass('reading').removeClass('read').find('circle').attr({ 'stroke-dashoffset': dashoffsetValue });
				changeUrl(articleSidebarLink.attr('href'));}
				else{articleSidebarLink.removeClass('reading').addClass('read');}});scrolling = false;}
	function updateSidebarPosition(){
		var articlesWrapperTop = articlesWrapper.offset().top,
			articlesWrapperHeight = articlesWrapper.outerHeight(),
			scrollTop = $(window).scrollTop();
		if( scrollTop < articlesWrapperTop){aside.removeClass('fixed').attr('style', '');}
		else if( scrollTop >= articlesWrapperTop && scrollTop < articlesWrapperTop + articlesWrapperHeight - windowHeight){aside.addClass('fixed').attr('style', '');}
		else{var articlePaddingTop = Number(articles.eq(1).css('padding-top').replace('px', ''));
			if( aside.hasClass('fixed') ) aside.removeClass('fixed').css('top', articlesWrapperHeight + articlePaddingTop - windowHeight + 'px');}sidebarAnimation =  false;}
	function changeUrl(link) {
		var pageArray = location.pathname.split('/'),
        	actualPage = pageArray[pageArray.length - 1] ;
        if( actualPage != link && history.pushState ) window.history.pushState({path: link},'',link);}
	function checkMQ() {
		return window.getComputedStyle(articlesWrapper.get(0), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "");}});

      //]]>
    </script>
    <script type='text/javascript'>
      //<![CDATA[
////////////////	Newer posts older posts named links		//////////////////////////
$(document).ready(function(){ 
var newerLink = $("a.blog-pager-newer-link").attr("href"); 
$("a.blog-pager-newer-link").load(newerLink+" .post-title:first", function() { 
var newerLinkTitle = $("a.blog-pager-newer-link").text(); 
$("a.blog-pager-newer-link").text("<< " + newerLinkTitle); 
}); 
var olderLink = $("a.blog-pager-older-link").attr("href"); 
$("a.blog-pager-older-link").load(olderLink+" .post-title:first", function() { 
var olderLinkTitle = $("a.blog-pager-older-link").text(); 
$("a.blog-pager-older-link").text(olderLinkTitle + " >>");
}); 
}); 

      //]]>
    </script>

  </body>
</html>*/
















// Copyright (C) 2009 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.



/**
 * @fileoverview
 * Registers a language handler for CSS.
 *
 *
 * To use, include prettify.js and this file in your HTML page.
 * Then put your code in an HTML tag like
 *      <pre class="prettyprint lang-css"></pre>
 *
 *
 * http://www.w3.org/TR/CSS21/grammar.html Section G2 defines the lexical
 * grammar.  This scheme does not recognize keywords containing escapes.
 *
 * @author mikesamuel@gmail.com
 */

PR.registerLangHandler(
    PR.createSimpleLexer(
        [
         // The space production <s>
         [PR.PR_PLAIN,       /^[ \t\r\n\f]+/, null, ' \t\r\n\f']
        ],
        [
         // Quoted strings.  <string1> and <string2>
         [PR.PR_STRING,
          /^\"(?:[^\n\r\f\\\"]|\\(?:\r\n?|\n|\f)|\\[\s\S])*\"/, null],
         [PR.PR_STRING,
          /^\'(?:[^\n\r\f\\\']|\\(?:\r\n?|\n|\f)|\\[\s\S])*\'/, null],
         ['lang-css-str', /^url\(([^\)\"\']*)\)/i],
         [PR.PR_KEYWORD,
          /^(?:url|rgb|\!important|@import|@page|@media|@charset|inherit)(?=[^\-\w]|$)/i,
          null],
         // A property name -- an identifier followed by a colon.
         ['lang-css-kw', /^(-?(?:[_a-z]|(?:\\[0-9a-f]+ ?))(?:[_a-z0-9\-]|\\(?:\\[0-9a-f]+ ?))*)\s*:/i],
         // A C style block comment.  The <comment> production.
         [PR.PR_COMMENT, /^\/\*[^*]*\*+(?:[^\/*][^*]*\*+)*\//],
         // Escaping text spans
         [PR.PR_COMMENT, /^(?:<!--|-->)/],
         // A number possibly containing a suffix.
         [PR.PR_LITERAL, /^(?:\d+|\d*\.\d+)(?:%|[a-z]+)?/i],
         // A hex color
         [PR.PR_LITERAL, /^#(?:[0-9a-f]{3}){1,2}/i],
         // An identifier
         [PR.PR_PLAIN,
          /^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i],
         // A run of punctuation
         [PR.PR_PUNCTUATION, /^[^\s\w\'\"]+/]
        ]),
    ['css']);
PR.registerLangHandler(
    PR.createSimpleLexer([],
        [
         [PR.PR_KEYWORD,
          /^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i]
        ]),
    ['css-kw']);
PR.registerLangHandler(
    PR.createSimpleLexer([],
        [
         [PR.PR_STRING, /^[^\)\"\']+/]
        ]),
    ['css-str']);
