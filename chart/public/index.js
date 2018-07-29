const canvasWidth = 800;
const canvasHeight = 600;


let canvas = document.getElementById('canvas');

let context = canvas.getContext('2d');

canvas.width = canvasWidth;
canvas.height = canvasHeight;

let image = new Image();

let radius = 50;
let clippingRegion = {x:400,y:200,r:radius};
image.src = 'image/chart.jpg';

//image或许很大，加载需要时间
image.onload = function (e) {
    initCanvas();
};

function initCanvas(){
    clippingRegion = {x:Math.random()*(canvas.width-2*radius)+radius,
        y:Math.random()*(canvas.height-2*radius)+50,
        r:radius};

    draw(image,clippingRegion);
}

function setClippingRegion(clippingRegion) {

    context.beginPath();
    context.arc(clippingRegion.x,clippingRegion.y,clippingRegion.r,0,Math.PI*2,false);
    context.clip();

}

function draw(image,clippingRegion) {

    context.clearRect(0,0,canvas.width,canvas.height);

    context.save();
    setClippingRegion( clippingRegion);
    context.drawImage(image,0,0);
    context.restore();
}

function reset() {
    initCanvas();
}
function show() {
    // clippingRegion.r = 1000;
    //
    // draw(image,clippingRegion);

    //添加动画
   let theAnimation = setInterval(function () {
        clippingRegion.r += 20;

        if(clippingRegion.r>1000){
            clearInterval(theAnimation);
        }

        draw(image,clippingRegion);
    },30)
}