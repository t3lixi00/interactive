var canvas = document.getElementById("drawing");
var context = canvas.getContext('2d');
var count = 0;
var score = document.getElementById("number");

//draw small rectangle
context.beginPath();
var x= Math.floor((Math.random()*750));
var y= Math.floor((Math.random()*350));
context.fillStyle="#ffffaa";
context.rect(x,y,50,50);
context.fill();
context.closePath();

canvas.onmousemove= function( e ){
var canvas = e.target;
var context = canvas.getContext('2d');

        var mouseXY = RGraph.getMouseXY(e);
        var mouseX  = mouseXY[0];
        var mouseY  = mouseXY[1];

        context.beginPath();
        context.rect(x,y,100,100);

if( context.isPointInPath( mouseX , mouseY )){

    canvas.onclick =function click(){
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        var x= Math.floor((Math.random()*750));
        var y= Math.floor((Math.random()*350));
        context.fillStyle="#ffffaa";
        context.rect(x,y,50,50);
        context.fill();
        context.closePath();
        count++;
    };
}
 score.innerHTML="Score:  " + count;
  };

var seconds_left = 10;
var interval = setInterval(function() {
    document.getElementById('timer_div').innerHTML ='Time left: ' + --seconds_left;

    if (seconds_left <= 0)
    {
        document.getElementById('timer_div').innerHTML = 'Game over! Your score is: ' + count;
        clearInterval(interval);
    }
}, 1000);