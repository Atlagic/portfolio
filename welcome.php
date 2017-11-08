<!DOCTYPE html>
<html lang ="en">
 <head>
  <meta charset = "utf-8">
  <link rel = "stylesheet" href = "style.css">
 </head>

 <body>

 <div class = "preload" id = "preload">
  <div class ="logo">
   <img src="pictures/arbnEhO.png" width="300px" height="200px" style="top:100px" alt="logo"/>
  </div>
   <div class = "loader-frame">
    <div class = "loader1" id = "loader1"></div>
    <div class = "loader2" id = "loader2"></div>
   </div>
 </div>

 <script src = "script .js"></script>
 </body>
</html>

<style>
<base {box-sizing: border-box;}
body {
 margin: 0;
 padding: 0;
 font-family: monospace;
}
.preload{
 width: 100%;
 height: 100%;
 background: #252525;
 position: fixed;
 top: 0;
 left: 0;
 z-index: 1;
 background-image:url('pictures/projects.jpg');
 background-size: cover;
}
.logo {
 width: 300px;
 height: 70px;
 margin: 266px auto 50px auto;
 font-size: 50px;
 text-shadow: -1px 2px 2px #000;
 text-align: center;
 color: azure;
}
.logo img{
 margin-top: -36px;
}
.loader-frame {
 width: 70px;
 height: 70px;
 margin: auto;
 position: relative;
}
.loader1, .loader2 {
 position: absolute;
 border: 5px solid transparent;
 border-radius: 50%;
}
.loader1 {
 width: 70px;
 height: 70px;
 border-top: 5px solid azure;
 border-bottom: 5px solid azure;
 animation: clockwisespin 2s linear 3;
}
.loader2 {
 width: 60px;
 height: 60px;
 border-left: 5px solid #ff100e;
 border-right: 5px solid #ff100e;
 top: 5px; left: 5px;
 animation: anticlockwisespin 2s linear 3;
}


@keyframes clockwisespin {
 from {transform: rotate(0deg);}
 to {transform: rotate(360deg);}
}
@keyframes anticlockwisespin {
 from {transform: rotate(0deg);}
 to {transform: rotate(-360deg);}
}
@keyframes fadeout {
 from {opacity: 1;}
 to {opacity: 0;}
}
</style>
<script>
//scripts.js code
(function(){
 
 var preload = document.getElementById("preload");
 var loading = 0;
 var id = setInterval(frame, 20);

 function frame(){
  if(loading == 100) {
   clearInterval(id);
   window.open("index.php", "_self");
  }
  else {
   loading = loading + 1;
   if(loading == 90) {
    preload.style.animation = "fadeout 1s ease";
   }
  }
 }


})();
</script>