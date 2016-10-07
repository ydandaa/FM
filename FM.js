(function(){
     var linsten = document.getElementById('linsten');
     var homepage = document.getElementById('homepage');
     var song = document.getElementById('song-a');
     var click1 = document.getElementById('click1');
     var cli = document.getElementById('cli');
     var sidebar=document.getElementById('fm-sidebar');
     var showImg = document.getElementById('showImg');
     var nav1 = document.getElementById('nav1');
     var nav2 = document.getElementById('nav2');
     var nav3 = document.getElementById('nav3');
     var nav4 = document.getElementById('nav4');
     var nav5 = document.getElementById('nav5');
     var nav6 = document.getElementById('nav6');
     var fmShow = document.getElementById('fm-show-off');
     var ssIntro1 = document.getElementById('ss-intro1');
     var ssIntro2 = document.getElementById('ss-intro2');
     var ssIntro3 = document.getElementById('ss-intro3');
     var ssIntro4 = document.getElementById('ss-intro4');
     var ssIntro5 = document.getElementById('ss-intro5');
     var ssIntro6 = document.getElementById('ss-intro6');
     var personal = document.getElementById('personal');
     var red = document.getElementById('red');
     var pick = document.getElementById('pick');
     var meng = document.getElementById('meng');
     var aud = document.getElementById('aud');
     var time = document.getElementById('time');
     var xin = document.getElementById('xin');
     var start = document.getElementById('start');
     var btnStop = document.getElementById('btnStop');
     var gequ = document.getElementById('gequ');
     var nian = document.getElementById('nian');
     var huanGe = document.getElementById('huanGe');
     if (aud.paused) {
          aud.play(); 
     } else {
          aud.pause();
       }
      aud.ontimeupdate = function () {
      	 var minutes = Math.floor(aud.currentTime/60)+':';
    	    var second = parseInt(aud.currentTime%60);
    	    function c() {
                 if(second<10){
           	        second = '0'+parseInt(aud.currentTime%60);
           	        return second;
                 } else {
           	        second = parseInt(aud.currentTime%60);
           	        return second;
                   }
    	    }
    	 time.innerHTML = minutes+c(second);
      	 var sum = parseInt(aud.duration);
         var curr = parseInt(aud.currentTime);
         var inJinDu = document.getElementById('inJinDu');
         inJinDu.style.width = (curr/sum)*247+'px'; 
      }
      
     linsten.onmouseover = function () {
     	homepage.src = 'pic/white.png';
     	song.style.color = 'white';
     	linsten.style.background = '#60dcac';
     }
     linsten.onmouseout = function () {
     	homepage.src = 'pic/fm-homepage.png';
     	song.style.color = ' #58c299';
     	linsten.style.background = '#E1E8E5';
     }
     click1.onmouseover = function () {
     	click1.src = 'pic/click2.png';
     }
     click1.onmouseout = function () {
     	click1.src = 'pic/click1.png';
     }
     cli.onmouseover = function () {
     	cli.src = 'pic/click2.png';
     }
     cli.onmouseout = function () {
     	cli.src = 'pic/click1.png';
     }
     click1.onclick = function () {
        sidebar.style.display='block';
        return false;
     }
     var ziDong;
	 var i = 0;
	 var arr = ["pic/show2.jpg","pic/show3.jpg","pic/show4.jpg","pic/show5.jpg","pic/show6.jpg","pic/show1.jpg"];
	 function qieHuan() {
		showImg.style.width = '290px';
     	showImg.style.height = '276px';
     	showImg.style.background = 
		showImg.src = arr[i];
		i = (i+1)%6;
	 }
	 window.onload = function(){
		 zidong = window.setInterval(qieHuan, 2000);
	 }
     cli.onclick = function () {
     	sidebar.style.display='none';
     }
     nav1.onmouseover = function () {
     	showImg.src = 'pic/show1.jpg';
     	clearInterval(zidong);
     	ssIntro1.style.display='block';
     	ssIntro2.style.display='none';
     	ssIntro3.style.display='none';
     	ssIntro4.style.display='none';
     	ssIntro5.style.display='none';
     	ssIntro6.style.display='none';
     }
     nav2.onmouseover = function () {
     	showImg.src = 'pic/show2.jpg';
     	showImg.style.width = '290px';
     	showImg.style.height = '276px';
     	clearInterval(zidong);
     	ssIntro1.style.display='none';
     	ssIntro2.style.display='block';
     	ssIntro3.style.display='none';
     	ssIntro4.style.display='none';
     	ssIntro5.style.display='none';
     	ssIntro6.style.display='none';
     }
     nav3.onmouseover = function () {
     	showImg.src = 'pic/show3.jpg';
     	showImg.style.width = '290px';
     	showImg.style.height = '276px';
     	clearInterval(zidong);
     	ssIntro1.style.display='none';
     	ssIntro2.style.display='none';
     	ssIntro3.style.display='block';
     	ssIntro4.style.display='none';
     	ssIntro5.style.display='none';
     	ssIntro6.style.display='none';
     }
     nav4.onmouseover = function () {
     	showImg.src = 'pic/show4.jpg';
     	showImg.style.width = '290px';
     	showImg.style.height = '276px';
     	clearInterval(zidong);
     	ssIntro1.style.display='none';
     	ssIntro2.style.display='none';
     	ssIntro3.style.display='none';
     	ssIntro4.style.display='block';
     	ssIntro5.style.display='none';
     	ssIntro6.style.display='none';
     }
     nav5.onmouseover = function () {
     	showImg.src = 'pic/show5.jpg';
     	showImg.style.width = '290px';
     	showImg.style.height = '276px';
     	clearInterval(zidong);
     	ssIntro1.style.display='none';
     	ssIntro2.style.display='none';
     	ssIntro3.style.display='none';
     	ssIntro4.style.display='none';
     	ssIntro5.style.display='block';
     	ssIntro6.style.display='none';
     }
     nav6.onmouseover = function () {
     	showImg.src = 'pic/show6.jpg';
     	clearInterval(zidong);
     	ssIntro1.style.display='none';
     	ssIntro2.style.display='none';
     	ssIntro3.style.display='none';
     	ssIntro4.style.display='none';
     	ssIntro5.style.display='none';
     	ssIntro6.style.display='block';
     }
     nav1.onmouseout = function () {
     	 zidong = window.setInterval(qieHuan, 2000);
     }
     nav2.onmouseout = function () {
     	 zidong = window.setInterval(qieHuan, 2000);
     }
     nav3.onmouseout = function () {
     	 zidong = window.setInterval(qieHuan, 2000);
     }
     nav4.onmouseout = function () {
     	 zidong = window.setInterval(qieHuan, 2000);
     }
     nav5.onmouseout = function () {
     	 zidong = window.setInterval(qieHuan, 2000);
     }
     nav6.onmouseout = function () {
     	 zidong = window.setInterval(qieHuan, 2000);
     }
     personal.onmouseover = function () {
     	personal.style.background = '#c4cfc9';
     }
     personal.onmouseout = function () {
     	personal.style.background = '#D4DED9';
     }
     red.onmouseover = function () {
     	red.style.background = '#c4cfc9';
     }
     red.onmouseout = function () {
     	red.style.background = '#D4DED9';
     }
     pick.onmouseover = function () {
     	pick.style.background = '#c4cfc9';
     }
     pick.onmouseout = function () {
     	pick.style.background = '#D4DED9';
     }
     meng.onmouseover = function () {
     	meng.style.background = '#c4cfc9';
     }
     meng.onmouseout = function () {
     	meng.style.background = '#D4DED9';
     }
     xin.onclick = function () {
     	if (xin.src.match('pic/xin.png')) {
           xin.src = 'pic/hong.png';
           return false;
     	} else {
           xin.src = 'pic/xin.png';
     	 }
     }
     btnStop.onclick = function () {
     	 if (aud.paused) {
            aud.play(); 
         } else {
            aud.pause();
          }
          start.style.display = 'block';
          return false;
     }
     start.onclick = function () {
     	 if (aud.paused) {
            aud.play(); 
         } else {
            aud.pause();
          }
          start.style.display = 'none';
          return false;
     }
     huanGe.onclick = function () {
     	aud.src = 'music/王菲 - 致青春.mp3';
     	gequ.innerHTML = '<致我们终将逝去的青春电影主题曲>';
     	nian.innerHTML = '致青春';
     	if (aud.paused) {
          aud.play(); 
        } else {
          aud.pause();
          }
     	return false;
     }
}(window))