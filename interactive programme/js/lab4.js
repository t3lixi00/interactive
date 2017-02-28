var canvas = document.getElementById("drawingCanvas");
var drawingContext = canvas.getContext('2d');
var paint;



canvas.onmousedown = function (e)
{
     paint=true;
     drawingContext.beginPath();
     drawingContext.moveTo(e.clientX,e.clientY);
};

canvas.onmousemove = function (e)
{
    if(paint){

        drawingContext.lineTo(e.clientX,e.clientY);
        drawingContext.stroke();
    }

};

canvas.onmouseup = function (){

    paint= false;
};
function clearCanvas()
{
    drawingContext.clearRect(0, 0, canvas.width, canvas.height);
}

