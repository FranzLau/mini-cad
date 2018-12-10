$('#btn-recta').click(function(){
	var nx1 = $('#lx1').val();
    var ny1 = $('#ly1').val();
    var nx2 = $('#lx2').val();
	var ny2 = $('#ly2').val();
	
	if (ny1 == ny2) {
		linea_horizontal(nx1,ny1,nx2);
		alertify.success('Linea Horizontal');
	}else if (nx1==nx2) {
		linea_vertical(nx1,ny1,ny2);
		alertify.success('Linea vertical');
	}else {
		linea_diagonal(nx1,ny1,nx2);
		alertify.success('Linea Diagonal');
	}
})
// ------------------metodos a usar para Linea
function linea_horizontal(nx1,ny1,nx2){
    x1 = Number(nx1);
    y1 = Number(ny1);
    x2 = Number(nx2);
    var canvas = document.getElementById("canvas");
    if (x1>=-275 && x1<=275 && y1>=-250 && y1<=250 && x2>=-275 && x2<=275){
        if (x1<x2) {
            for (var i=x1;i<=x2;i++){
                var ctx = canvas.getContext("2d");
                ctx.fillStyle = "white";
                var hi=i+275;
                var hy1=y1+250;
                ctx.fillRect(hi,hy1,1,1);
            }
        }
        else {
			//intercambio puntos
            var nx1 = x2;
            var nx2 = x1;
            for (var i=nx1;i<=nx2;i++){
                var ctx = canvas.getContext("2d");
                ctx.fillStyle = "white";
                var hi=i+275;
                var hy1=y1+250;
                ctx.fillRect(hi,hy1,1,1);
            }
        }
    }
    else {
        alert("Revise los valores ingresados, alguno no es válido.");
        $("#numx1").value = "";
        $("#numy1").value = "";
        $("#numx2").value = "";
    }
}
// Metodo para Linea Vertical
function linea_vertical(nx1,ny1,ny2){
    x1 = Number(nx1);
    y1 = Number(ny1);
    y2 = Number(ny2);
    var canvas = document.getElementById("canvas");
    if (x1>=-275 && x1<=275 && y1>=-250 && y1<=250 && y2>=-250 && y2<=250){
        if (y1<y2){
            for (var i=y1;i<=y2;i++){
                var ctx = canvas.getContext("2d");
                ctx.fillStyle = "white";
                var vi=i+250;
                var vx1=x1+275;
                ctx.fillRect(vx1,vi,1,1);
            }
        }
        else {
			// intercambio puntos
            var ny1 = y2;
            var ny2 = y1;
            for (var i=ny1;i<=ny2;i++)
            {
                var ctx = canvas.getContext("2d");
                ctx.fillStyle = "white";
                var vi=i+250;
                var vx1=x1+275;
                ctx.fillRect(vx1,vi,1,1);
            }
        }
    }
    else {
        window.alert("Revise los valores ingresados, alguno no es válido.");
        document.getElementById("numx1").value = "";
        document.getElementById("numy1").value = "";
        document.getElementById("numy2").value = "";
    }
}
//--------------
function linea_diagonal(nx1,ny1,nx2){
    x1 = Number(nx1);
    y1 = Number(ny1);
    x2 = Number(nx2);
    var canvas = document.getElementById("canvas");
    if (x1>=-275 && x1<=275 && y1>=-250 && y1<=250 && x2>=-275 && x2<=275){
        if (x1<x2){
            for (var i=x1;i<=x2;i++){
                var ctx = canvas.getContext("2d");
                ctx.fillStyle = "white";
                var dx1 = x1+i+275;
                var dy1 = y1+i+250;
                ctx.fillRect(dx1,dy1,1,1);
            }
        }
        else{
            //Intercambio: resta desde el punto inicial
            for (var i=x1;i>=x2;i--){
                var ctx = canvas.getContext("2d");
                ctx.fillStyle = "white";
                var dx1 = x1-i+275;
                var dy1 = y1+i+250;
                ctx.fillRect(dx1,dy1,1,1);
            }
           
        }
    }
    else {
        window.alert("Revise los valores ingresados, alguno no es válido.");
        document.getElementById("numx1").value = "";
        document.getElementById("numy1").value = "";
        document.getElementById("numx2").value = "";
        document.getElementById("numy2").value = "";
    }
}