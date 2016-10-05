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
     cli.onclick = function () {
     	sidebar.style.display='none';
     }
     nav1.onmouseover = function () {
     	showImg.src = 'pic/show1.jpg';
     }
     nav2.onmouseover = function () {
     	showImg.src = 'pic/show2.jpg';
     	showImg.style.width = '290px';
     	showImg.style.height = '276px';
     }
     nav3.onmouseover = function () {
     	showImg.src = 'pic/show3.jpg';
     	showImg.style.width = '290px';
     	showImg.style.height = '276px';
     }
     nav4.onmouseover = function () {
     	showImg.src = 'pic/show4.jpg';
     	showImg.style.width = '290px';
     	showImg.style.height = '276px';
     }
     nav5.onmouseover = function () {
     	showImg.src = 'pic/show5.jpg';
     	showImg.style.width = '290px';
     	showImg.style.height = '276px';
     }
     nav6.onmouseover = function () {
     	showImg.src = 'pic/show6.jpg';
     }
}(window))