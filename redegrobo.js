var n;
var bnl;
var v;
var r;


function setup(){
    createCanvas(700,700);
    background(0);
    
    n = 50;
    bnl = 50;
    r = 20;
    v = 5;
}

function draw(){
    background(0);
    for (var r=0; r < n; r++){
        beginShape(TRIANGLE_STRIP);
        for(var i = 0; i < bnl; i++){
            var cx = map(i, 0, bnl, -100, width + 100);
            var cy = map(r, 0, n, -100, height + 100);
            var distCentro = dist(cx, cy, width/2, height/2);
            var angulo = frameCount * v + distCentro*0.02 + i*0.1;
            var x = cx + r * cos(angulo);
            var y = cy + r * sin(angulo);
            fill (0,175,255);
            vertex(x,y);
            
        }
    }endShape();
    
    
}
