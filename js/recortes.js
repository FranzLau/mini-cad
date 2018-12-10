var vector = new Array();
var var_dibujar = 0;
var i = 0;
// Graficar ventana de recorte
var xmin;
var ymin;
var xmax;
var ymax;

function cargarLienzo(){
	var c = document.getElementById("canvas");
	ctxlienzo = c.getContext("2d");
	ctxlienzo.lineWidth = 1;
	ctxlienzo.strokeStyle = "#ffffff";
	ctxlienzo.fillStyle = "#D0D0D0";

	//EJEX1
	ctxlienzo.beginPath();
	ctxlienzo.moveTo(400,150);
	ctxlienzo.lineTo(150,150);
	ctxlienzo.lineTo(150,350);
	ctxlienzo.lineTo(400,350);
	ctxlienzo.closePath();
	ctxlienzo.stroke();

	xmin = 150;
	ymin = 150;
	xmax = 400;
	ymax = 350;
}
function convert(y){
	y = Number(y);
	var yprima = 500 - y;
	return yprima;
}
function q(event){
	if (var_dibujar == 0){
		event = event || window.event;

		var canvas = document.getElementById('canvas');
		x = event.pageX - canvas.offsetLeft;
		y = event.pageY - canvas.offsetTop;
		y = convert(y);

		graficarPunto(x,y);

		vector[i+1] = x;
		vector[i+2] = y;

		i = i + 2;
	}
	else{
		alert("Para volver a dibujar, presione en el botón Limpiar");
	}
}
function graficarPunto(x,y){
	var c=document.getElementById("canvas");
	var ctx=c.getContext("2d");
	ctx.beginPath();
	ctx.strokeStyle = "white";
	ctx.arc(x,y,3,0,2*Math.PI);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();
}
// Funcion Dibujar
function dibujar(){
	var c = document.getElementById("canvas");
	ctx = c.getContext("2d");

	ctx.beginPath();
	ctx.lineWidth = 3;
	ctx.strokeStyle = "blue";
	ctx.fillStyle = "#D0D0D0";
	for (var j=2; j<=vector.length; j=j+2)
	{
		if (j==2)
		{
			ctx.moveTo(vector[j-1],vector[j]);
		}
		else
		{
			ctx.lineTo(vector[j-1],vector[j]);
		}
	}
	ctx.closePath();
	ctx.stroke();
	ctx.fill();

	cargarLienzo();

	var_dibujar = 1;
}

// Funcion limpiar 
function limpiar(){
	window.location.reload();
}