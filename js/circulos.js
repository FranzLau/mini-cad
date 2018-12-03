$('#btn-circulo').click(function(){
	var nxc = $('#xcentro').val();
    var nyc = $('#ycentro').val();
    var nrc = $('#radio').val();
	var metodoc = $('#met-circulo').val();
	
	if (metodoc==0) {
		alertify.error('Elija un Metodo');
	}else if (metodoc == 'IMP') { // ----------------------------Representación IMPLÍCITA --------------------
		var canvas = document.getElementById("canvas");
		var ctx = canvas.getContext("2d");
		ctx.fillStyle = "blue";
		var px,py,y;
		r = parseInt(nrc);
		xc = parseInt(nxc);
		yc = parseInt(nyc);
		for (var x = xc-r; x <= xc+r; x++) { // Primer FOR para parte superior del circulo
			y = yc + Math.pow(Math.pow(r,2)-Math.pow(x-xc,2),1/2);
			px=x+275;
			py=y+250;
			ctx.fillRect(px,py,1,1);
		};
	
		for (var x = xc-r; x <= xc+r; x++) { // Segundo FOR para la parte inferir de circulo
			y = yc - Math.pow(Math.pow(r,2)-Math.pow(x-xc,2),1/2);
			px=x+275;
			py=y+250;
			ctx.fillRect(px,py,1,1);
		};
		alertify.success('Representación Implícita');
	}else if (metodoc== 'POLAR'){ // ------------------ Representacion Parametrica POLAR ---------------
		var canvas = document.getElementById("canvas");
		var ctx = canvas.getContext("2d");
		ctx.fillStyle = "blue";
		var px,py;
		r = parseInt(nrc);
		xc = Number(nxc);
		yc = Number(nyc);

		for (var i = 0; i <= 360; i++) {
			// iniciamos e FOR desde un angulo 0 a 360
			var alpha = i*Math.PI/180; // valor del angulo a radianes
			var x = xc + r*Math.cos(alpha);
			var y = yc + r*Math.sin(alpha);
			px=x+275;
			py=y+250;
			ctx.fillRect(px,py,1,1);
		};
		alertify.success('Representación Paramétrica Polar');
	}else if (metodoc=='INC') { // -----------------------------Trazado INCREMENTAL -----------------
		var canvas = document.getElementById("canvas");
		var ctx = canvas.getContext("2d");
		ctx.fillStyle = "blue";

		r = Number(nrc);
		xc = Number(nxc);
		yc = Number(nyc);
		var alfa,cos,sen;
		alfa=1/r; // Valor del angulo
		cos=Math.cos(alfa);
		sen=Math.sin(alfa);
		var x=0;
		var y=r;

		while (y>x) {
			// pintamos los puntos en las diferentes coordenadas
			ctx.fillRect(xc+x+275,yc+y+250,1,1);
			ctx.fillRect(xc-x+275,yc+y+250,1,1);
			ctx.fillRect(xc+x+275,yc-y+250,1,1);
			ctx.fillRect(xc-x+275,yc-y+250,1,1);
			ctx.fillRect(xc+x+275,yc+y+250,1,1);
			ctx.fillRect(xc-x+275,yc+y+250,1,1);
			ctx.fillRect(xc+x+275,yc-y+250,1,1);
			ctx.fillRect(xc-x+275,yc-y+250,1,1);
			// obtenemos nuestros nuevos valores de x,y
			x=(x*cos-y*sen);
			y=(y*cos+x*sen);
			
		}
		alertify.success('Trazado Incremental');
	}else if (metodoc=='SEG') {
		alertify.error('Union de Segmentos');
	}else if (metodoc=='BRES') {
		alertify.error('Metodo Bresenham');
	}
})