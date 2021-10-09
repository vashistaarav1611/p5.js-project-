function preload(){
	
}
function setup(){
	canvas = createCanvas(640, 480);
	canvas.position(100,200);
	video = createCapture(VIDEO);
	video.size(590,430);
	video.position(120,195);
	video.hide();
	let c = color("black");
    fill(c);
    noStroke();
	rect = rect(20, 10, 600, 455);
	tintt = document.getElementById("tint").value;
}
function draw(){
	image(video, 0, 0, 640, 480);
	tint(tintt);
}
function snap(){
	save("snapshot.png");
}