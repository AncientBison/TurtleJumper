/*import turtle
import time
t = turtle.Turtle()
b = turtle.Turtle()
b.shape("square")
wn = turtle.Screen()
up_until = time.time()
Stopped = False
t.pu()
t.width(10)
def u():
	global up_until
	curr_time = time.time() + 0.5
	if time.time() > up_until:
		up_until = curr_time  +  1
def esc():
	Stopped = True

wn.onkey(u,"Up")
wn.onkey(esc,"esc")
wn.listen()
wn.mainloop()

while (not Stopped):
	curr_time = time.time()
	t.setx(t.xcor()+1)
	if up_until > curr_time:
		t.sety(50)
	else:
		t.sety(0)*/

var canvas = document.getElementById("turtlepipe");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#006400";
stop = false
x = 100
tps = 30
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
	if (e.code == "Space") {
		x = 50;
	}
	if (e.code == "Escape") {
		stop = true;
	}
}
function tick() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillRect(100, x, 40, 40);
}
gameLoop();