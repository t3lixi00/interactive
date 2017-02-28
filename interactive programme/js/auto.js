var x = document.getElementById("myAudio"); 

function playAudio() { 
    x.play(); 
} 

function stopAudio() { 
    x.pause(); 
} 


$(function(){
  $('#audio-player').mediaelementplayer({
    alwaysShowControls: true,
    features: ['playpause','progress','volume'],
    audioVolume: 'horizontal',
    audioWidth: 450,
    audioHeight: 70,
    iPadUseNativeControls: true,
    iPhoneUseNativeControls: true,
    AndroidUseNativeControls: true
  });
});
