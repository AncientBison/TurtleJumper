var canvas = document.getElementById("turtlepipe");
var ctx = canvas.getContext("2d");
stop = false
x = 160
tps = 30
var m = 1000
var speed = 1
var points = 0
var onGroundTime = 3
dropping = false
var nextTick
ctx.fillRect(100, x, 40, 40);
function gameLoop() {
	if (!stop) {
		tick();
	}
	// Schedule game tick
	nextTick += 1000/tps;
	setTimeout(
		gameLoop,
	  Math.max(0, nextTick - new Date().getTime()));
}
document.addEventListener('keypress', keypress);
function keypress(e) {
	if (e.code == "Space" && x == 160 && onGroundTime >= 50) {
		x = 60;
		if (dropping == false)
		setTimeout(function() {
			x = 160
			dropping = true
		},750)
		
	}
	if (e.code == "Escape") {
		stop = true;
	}
}
function tick() {
	m -= speed
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "#006400";
	ctx.fillRect(100, x, 40, 40);
	ctx.fillStyle = "#000000"
	ctx.fillRect(m,120,40,80)
	if (x == 160) {
		dropping = false
		onGroundTime += 1
	}
	else {
		onGroundTime = 0
	}
	if (m <= -40) {
		m = 1000
	}
	if (m == 140 && x != 60) {
		console.log("You Lose!")
		stop = true
	}
}
gameLoop();