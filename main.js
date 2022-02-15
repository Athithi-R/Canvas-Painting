var mouse_event= "empty";
var last_position_of_x, last_position_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

colour="Black";
width_of_line=1;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouse_event="mousedown";
    colour=document.getElementById("colour").value;
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouse_event="mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouse_event="mouseup";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
 current_position_of_mouse_x= e.clientX-canvas.offsetLeft;
 current_position_of_mouse_y= e.clientY-canvas.offsetTop;
 if(mouse_event=="mousedown"){
     ctx.beginPath();
     ctx.strokeStyle= colour;
     ctx.lineWidth= width_of_line;

     console.log("last position of x and y coordinates=");
     console.log("x=" + last_position_of_x + "y=" + last_position_y);

     ctx.moveTo(last_position_of_x, last_position_y);

     console.log("current position of mouse_x and y=");
     console.log("x=" + current_position_of_mouse_x + "y=" + current_position_of_mouse_y);

     ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
     ctx.stroke();
 }
 last_position_of_x = current_position_of_mouse_x;
 last_position_y = current_position_of_mouse_y;
}