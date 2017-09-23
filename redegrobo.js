var n;
var bnl;
var v;
var ra;
var fundo;




function setup(){
    createCanvas(700,700);
    background(0);
    fundo = loadImage('australia.png');
    
    n = 20;
    bnl = 20;
    ra = 20;
    v = 5;
}

function draw(){
    background(0);
    for (var r=0; r < n; r++){
        fill(0,175,200);
        beginShape(TRIANGLE_STRIP);
        texture(fundo);
        for(var i = 0; i < bnl; i++){
            var cx = map(i, 0, bnl,0, width);
            var cy = map(r, 0, n,0, height);
            var nx = map(i, 0, bnl,0, width);
            var ny = map(r+1, 0, n,0, height);
            
            var distCentro = dist(cx, cy, width/2, height/2);
            var an = frameCount * v + distCentro*0.02 + i*0.1;
            var x = cx + ra * cos(an);
            var y = cy + ra * sin(an);
            vertex(x,y);
            
            var distCentro = dist(nx, ny, width/2, height/2);
            var an = frameCount * v + distCentro*0.02 + i*0.1;
            var x = nx + ra * cos(an);
            var y = ny + ra * sin(an);
            vertex(x,y);
        }
        endShape();
    }
    
    
}
