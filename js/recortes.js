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
function limpiarGrafico()
{
	var c= document.getElementById("canvas");
	var ctx = c.getContext("2d");
	ctx.clearRect(0,0,c.width,c.height);
	cargarLienzo();
}

var vector_recorte1 = new Array();
var vector_recorte2 = new Array();
var vector_recorte3 = new Array();
var vector_recorte4 = new Array();

function recortar1() // en xmin
{

	var i = 0;

	limpiarGrafico();

	for (var j=2; j<=vector.length; j=j+2)
	{

		var num_ax;
		var num_ay;
		var num_bx;
		var num_by;

		if (j==vector.length-1)
		{
			num_ax = vector[j-1];
			num_ay = vector[j];
			num_bx = vector[1];
			num_by = vector[2];

			if (num_ax >= xmin && num_bx >= xmin)
			{
				vector_recorte1[i+1] = num_bx;
				vector_recorte1[i+2] = num_by;
				i = i + 2;
			}

			else if (num_ax >= xmin && num_bx < xmin)
			{
				var m = (num_by-num_ay) / (num_bx-num_ax);
				var nuevo_x = xmin;
				var nuevo_y = m * (nuevo_x - num_ax) + num_ay;
				vector_recorte1[i+1] = nuevo_x;
				vector_recorte1[i+2] = nuevo_y;
				i = i + 2;
			}

			else if (num_ax < xmin && num_bx >=xmin)
			{
				var m = (num_by-num_ay) / (num_bx-num_ax);
				var nuevo_x = xmin;
				var nuevo_y = m * (nuevo_x - num_ax) + num_ay;
				vector_recorte1[i+1] = nuevo_x;
				vector_recorte1[i+2] = nuevo_y;
				vector_recorte1[i+3] = num_bx;
				vector_recorte1[i+4] = num_by;
				i = i + 4;
			}
		}

		else
		{
			num_ax = vector[j-1];
			num_ay = vector[j];
			num_bx = vector[j+1];
			num_by = vector[j+2];

			if (num_ax >= xmin && num_bx >= xmin)
			{
				vector_recorte1[i+1] = num_bx;
				vector_recorte1[i+2] = num_by;
				i = i + 2;
			}

			else if (num_ax >= xmin && num_bx < xmin)
			{
				var m = (num_by-num_ay) / (num_bx-num_ax);
				var nuevo_x = xmin;
				var nuevo_y = m * (nuevo_x - num_ax) + num_ay;
				vector_recorte1[i+1] = nuevo_x;
				vector_recorte1[i+2] = nuevo_y;
				i = i + 2;
			}

			else if (num_ax < xmin && num_bx >=xmin)
			{
				var m = (num_by-num_ay) / (num_bx-num_ax);
				var nuevo_x = xmin;
				var nuevo_y = m * (nuevo_x - num_ax) + num_ay;
				vector_recorte1[i+1] = nuevo_x;
				vector_recorte1[i+2] = nuevo_y;
				vector_recorte1[i+3] = num_bx;
				vector_recorte1[i+4] = num_by;
				i = i + 4;
			}
		}
	}

}

function recortar2() // en ymax
{

	var i = 0;

	limpiarGrafico();

	for (var j=2; j<=vector_recorte1.length; j=j+2)
	{

		var num_ax;
		var num_ay;
		var num_bx;
		var num_by;

		if (j==vector_recorte1.length-1)
		{
			num_ax = vector_recorte1[j-1];
			num_ay = vector_recorte1[j];
			num_bx = vector_recorte1[1];
			num_by = vector_recorte1[2];

			if (num_ay <= ymax && num_by <= ymax)
			{
				vector_recorte2[i+1] = num_bx;
				vector_recorte2[i+2] = num_by;
				i = i + 2;
			}

			else if (num_ay <= ymax && num_by > ymax)
			{
				var m = (num_by-num_ay) / (num_bx-num_ax);
				var nuevo_y = ymax;
				var nuevo_x = (1/m) * (nuevo_y - num_ay) + num_ax;
				vector_recorte2[i+1] = nuevo_x;
				vector_recorte2[i+2] = nuevo_y;
				i = i + 2;
			}

			else if (num_ay > ymax && num_by <=ymax)
			{
				var m = (num_by-num_ay) / (num_bx-num_ax);
				var nuevo_y = ymax;
				var nuevo_x = (1/m) * (nuevo_y - num_ay) + num_ax;
				vector_recorte2[i+1] = nuevo_x;
				vector_recorte2[i+2] = nuevo_y;
				vector_recorte2[i+3] = num_bx;
				vector_recorte2[i+4] = num_by;
				i = i + 4;
			}
		}

		else
		{
			num_ax = vector_recorte1[j-1];
			num_ay = vector_recorte1[j];
			num_bx = vector_recorte1[j+1];
			num_by = vector_recorte1[j+2];

			if (num_ay <= ymax && num_by <= ymax)
			{
				vector_recorte2[i+1] = num_bx;
				vector_recorte2[i+2] = num_by;
				i = i + 2;
			}

			else if (num_ay <= ymax && num_by > ymax)
			{
				var m = (num_by-num_ay) / (num_bx-num_ax);
				var nuevo_y = ymax;
				var nuevo_x = (1/m) * (nuevo_y - num_ay) + num_ax;
				vector_recorte2[i+1] = nuevo_x;
				vector_recorte2[i+2] = nuevo_y;
				i = i + 2;
			}

			else if (num_ay > ymax && num_by <=ymax)
			{
				var m = (num_by-num_ay) / (num_bx-num_ax);
				var nuevo_y = ymax;
				var nuevo_x = (1/m) * (nuevo_y - num_ay) + num_ax;
				vector_recorte2[i+1] = nuevo_x;
				vector_recorte2[i+2] = nuevo_y;
				vector_recorte2[i+3] = num_bx;
				vector_recorte2[i+4] = num_by;
				i = i + 4;
			}
		}

	}

}

function recortar3() // en xmax
{

	var i = 0;

	limpiarGrafico();

	for (var j=2; j<=vector_recorte2.length; j=j+2)
	{

		var num_ax;
		var num_ay;
		var num_bx;
		var num_by;

		if (j==vector_recorte2.length-1)
		{
			num_ax = vector_recorte2[j-1];
			num_ay = vector_recorte2[j];
			num_bx = vector_recorte2[1];
			num_by = vector_recorte2[2];

			if (num_ax <= xmax && num_bx <= xmax)
			{
				vector_recorte3[i+1] = num_bx;
				vector_recorte3[i+2] = num_by;
				i = i + 2;
			}

			else if (num_ax <= xmax && num_bx > xmax)
			{
				var m = (num_by-num_ay) / (num_bx-num_ax);
				var nuevo_x = xmax;
				var nuevo_y = m * (nuevo_x - num_ax) + num_ay;
				vector_recorte3[i+1] = nuevo_x;
				vector_recorte3[i+2] = nuevo_y;
				i = i + 2;
			}

			else if (num_ax > xmax && num_bx <=xmax)
			{
				var m = (num_by-num_ay) / (num_bx-num_ax);
				var nuevo_x = xmax;
				var nuevo_y = m * (nuevo_x - num_ax) + num_ay;
				vector_recorte3[i+1] = nuevo_x;
				vector_recorte3[i+2] = nuevo_y;
				vector_recorte3[i+3] = num_bx;
				vector_recorte3[i+4] = num_by;
				i = i + 4;
			}
		}

		else
		{
			num_ax = vector_recorte2[j-1];
			num_ay = vector_recorte2[j];
			num_bx = vector_recorte2[j+1];
			num_by = vector_recorte2[j+2];

			if (num_ax <= xmax && num_bx <= xmax)
			{
				vector_recorte3[i+1] = num_bx;
				vector_recorte3[i+2] = num_by;
				i = i + 2;
			}

			else if (num_ax <= xmax && num_bx > xmax)
			{
				var m = (num_by-num_ay) / (num_bx-num_ax);
				var nuevo_x = xmax;
				var nuevo_y = m * (nuevo_x - num_ax) + num_ay;
				vector_recorte3[i+1] = nuevo_x;
				vector_recorte3[i+2] = nuevo_y;
				i = i + 2;
			}

			else if (num_ax > xmax && num_bx <=xmax)
			{
				var m = (num_by-num_ay) / (num_bx-num_ax);
				var nuevo_x = xmax;
				var nuevo_y = m * (nuevo_x - num_ax) + num_ay;
				vector_recorte3[i+1] = nuevo_x;
				vector_recorte3[i+2] = nuevo_y;
				vector_recorte3[i+3] = num_bx;
				vector_recorte3[i+4] = num_by;
				i = i + 4;
			}
		}
	}

}

function recortar4() // en ymin
{

	var i = 0;

	limpiarGrafico();

	for (var j=2; j<=vector_recorte3.length; j=j+2)
	{

		var num_ax;
		var num_ay;
		var num_bx;
		var num_by;

		if (j==vector_recorte3.length-1)
		{
			num_ax = vector_recorte3[j-1];
			num_ay = vector_recorte3[j];
			num_bx = vector_recorte3[1];
			num_by = vector_recorte3[2];

			if (num_ay >= ymin && num_by >= ymin)
			{
				vector_recorte4[i+1] = num_bx;
				vector_recorte4[i+2] = num_by;
				i = i + 2;
			}

			else if (num_ay >= ymin && num_by < ymin)
			{
				var m = (num_by-num_ay) / (num_bx-num_ax);
				var nuevo_y = ymin;
				var nuevo_x = (1/m) * (nuevo_y - num_ay) + num_ax;
				vector_recorte4[i+1] = nuevo_x;
				vector_recorte4[i+2] = nuevo_y;
				i = i + 2;
			}

			else if (num_ay < ymin && num_by >= ymin)
			{
				var m = (num_by-num_ay) / (num_bx-num_ax);
				var nuevo_y = ymin;
				var nuevo_x = (1/m) * (nuevo_y - num_ay) + num_ax;
				vector_recorte4[i+1] = nuevo_x;
				vector_recorte4[i+2] = nuevo_y;
				vector_recorte4[i+3] = num_bx;
				vector_recorte4[i+4] = num_by;
				i = i + 4;
			}
		}

		else
		{
			num_ax = vector_recorte3[j-1];
			num_ay = vector_recorte3[j];
			num_bx = vector_recorte3[j+1];
			num_by = vector_recorte3[j+2];

			if (num_ay >= ymin && num_by >= ymin)
			{
				vector_recorte4[i+1] = num_bx;
				vector_recorte4[i+2] = num_by;
				i = i + 2;
			}

			else if (num_ay >= ymin && num_by < ymin)
			{
				var m = (num_by-num_ay) / (num_bx-num_ax);
				var nuevo_y = ymin;
				var nuevo_x = (1/m) * (nuevo_y - num_ay) + num_ax;
				vector_recorte4[i+1] = nuevo_x;
				vector_recorte4[i+2] = nuevo_y;
				i = i + 2;
			}

			else if (num_ay < ymin && num_by >= ymin)
			{
				var m = (num_by-num_ay) / (num_bx-num_ax);
				var nuevo_y = ymin;
				var nuevo_x = (1/m) * (nuevo_y - num_ay) + num_ax;
				vector_recorte4[i+1] = nuevo_x;
				vector_recorte4[i+2] = nuevo_y;
				vector_recorte4[i+3] = num_bx;
				vector_recorte4[i+4] = num_by;
				i = i + 4;
			}
		}

	}

	var c = document.getElementById("canvas");
	ctx = c.getContext("2d");

	ctx.beginPath();
	ctx.lineWidth = 3;
	ctx.strokeStyle = "blue";
	ctx.fillStyle = "#D0D0D0";
	for (var j=2; j<=vector_recorte4.length; j=j+2)
	{
		if (j==2)
		{
			ctx.moveTo(vector_recorte4[j-1],vector_recorte4[j]);
		}
		else
		{
			ctx.lineTo(vector_recorte4[j-1],vector_recorte4[j]);
		}
	}
	ctx.closePath();
	ctx.stroke();
	ctx.fill();

	cargarLienzo();
}

function recortar()
{
	recortar1();
	recortar2();
	recortar3();
	recortar4();
}