var sketchProc=function(processingInstance){ with (processingInstance){
size(400, 600); 
frameRate(60);


angleMode = "radian";
var oneDegree = 3.14/180;
var centerX = 200;
var centerY = 300;


noStroke();
fill(40, 176, 19);
rect(0, 0, 400, 600);
fill(34, 133, 16,100);
rect(0, 0, 30, 600);
for(var i=1; i<7; i++){
    rect(60*i, 0, 30, 600);
}


stroke(255, 255, 255);
noFill();
strokeWeight(2);
rect(5,10, 390, 580);
strokeWeight(1);
line(0, 300, 400, 300);
ellipse(200, 300, 100, 100);

rect(100, 10, 200, 100);
rect(150, 10, 100, 50);

rect(centerX - 100, centerY - 290, 200, 100);
rect(centerX - 50, centerY - 290, 100, 50);

rect(centerX - 100, centerY - 290, 200, 100);
rect(centerX - 50, centerY - 290, 100, 50);
	

rect(centerX - 100, centerY + 290, 200, -100);
rect(centerX - 50, centerY + 290, 100, -50);

arc(centerX, centerY-190, 50, 50, 0, oneDegree*180);
arc(centerX, centerY+190, 50, 50, 180, oneDegree*359);
}};
