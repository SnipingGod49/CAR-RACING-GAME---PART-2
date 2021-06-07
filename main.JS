
canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

car1_width=120;
 car1_height=90;
car1_x=10;
car1_y=10;

car2_width=120;
 car2_height=90;
car2_x=20;
car2_y=20;

background_img="racing.jpg";
car1_img="car1.png";
car2_img="car2.png";

function add() {
background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_img

car1_imgTag = new Image();
car1_imgTag.onload = uploadcar1;
car1_imgTag.src = car1_img;

car2_imgTag = new Image();
car2_imgTag.onload = uploadcar2;
car2_imgTag.src = car2_img;
}



function uploadBackground() {
ctx.drawImage(background_imgTag, 0, 0, canvas.width , canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
keyPressed = e.keyCode;
console.log(keyPressed);

if(keyPressed == "38")
{
up();
console.log("up");
}

if(keyPressed == "40")
{
down();
console.log("down");
}

if(keyPressed == "37")
{
left();
console.log("left");
}

if(keyPressed == "39")
{
right();
console.log("right");
}

}

function up()

{

    if(car1_y>=0)
    {
    car1_y -=10;
console.log("when up arrow is pressed="+ car1_x + " - "+car1_y)
uploadBackground()
uploadcar1()
    }
}


function down()

{

    if(car1_y<=500)
    {
    car1_y +=10;
console.log("When down arrow is pressed, x = "+ car1_x +" | y = " +car1_y)
uploadBackground()
uploadcar1()
    }
}

function left()

{

    if(car1_x>=5)
    {
    car1_x -=10;
console.log("When left arrow is pressed, x = "+ car1_x +" | y = " +car1_y)
uploadBackground()
uploadcar1()
    }
}

function right()

{

    if(car1_x<=650)
    {
    car1_x +=10;
console.log("When right arrow is pressed, x = "+ car1_x +" | y = " +car1_y)
uploadBackground()
uploadcar1()
    }
}













if(keyPressed == "87")
{
car2Up();
console.log("car2Up");
}

if(keyPressed == "83")
{
car2Down();
console.log("car2Down");
}

if(keyPressed == "65")
{
car2Left();
console.log("car2Left");
}

if(keyPressed == "68")
{
car2Right();
console.log("car2Right");
}

}

function car2Up()

{

    if(car2_y>=0)
    {
    car2_y -=10;
console.log("when up arrow is pressed="+ car2_x + " - "+car2_y)
uploadBackground()
uploadcar2()
    }
}

