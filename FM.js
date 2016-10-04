(function(){
     var linsten=document.getElementById('linsten');
     var homepage=document.getElementById('homepage');
     var song=document.getElementById('song-a');
     linsten.onmouseover=function(){
     	homepage.src='pic/white.png';
     	song.style.color='white';
     	linsten.style.background='#60dcac';
     }
     linsten.onmouseout=function(){
     	homepage.src='pic/fm-homepage.png';
     	song.style.color=' #58c299';
     	linsten.style.background='#E1E8E5';
     }
}(window))