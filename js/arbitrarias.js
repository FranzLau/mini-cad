$('#btn-arbitraria').click(function(){
    
    var nx1 = $('#numx1').val();
    var ny1 = $('#numy1').val();
    var nx2 = $('#numx2').val();
    var ny2 = $('#numy2').val();
    var metodo = $('#metodoLinea').val();

    if (metodo == 0){
        alertify.error('Elija un Metodo');
    }else if (metodo == 'MD'){ // -----------------------------METODO DIRECTO ---------------------------
        //Metodo Directo
        x1 = Number(nx1);
        y1 = Number(ny1);
        x2 = Number(nx2);
        y2 = Number(ny2);
        var canvas = document.getElementById("canvas");
        //para saber si esta dentro de la pizarra
        if (x1>=-275 && x1<=275 && y1>=-250 && y1<=250 && x2>=-275 && x2<=275 && y2>=-250 && y2<=250){
            var m = (y2-y1)/(x2-x1);//calculamos la pendiente
            if (x1<x2) { // intercambio de puntos 
                var b = (y1) - (m*x1);
                var i = 0;
                // Empezamos a obtener puntos y pintarlos
                while (x1+i<=x2){
                    var y = m*(x1+i)+b;
                    y = Math.round(y);
        
                    var ctx = canvas.getContext("2d");
                    ctx.fillStyle = "red";
                    var px=x1+i+275;
                    var py=y+250;
                    ctx.fillRect(px,py,1,1);  
                    i = i + 1;
                }
                alertify.message('No cambia puntos'); 
            }else {
                var x1c=x2;
                var y1c=y2;
                var x2c=x1;
                var y2c=y1;
                var b = (y1c) - (m*x1c);
                var i = 0;
                while (x1c+i<=x2c){
                    var y = m*(x1c+i)+b;
                    y = Math.round(y);
        
                    var ctx = canvas.getContext("2d");
                    ctx.fillStyle = "red";
                    var px=x1c+i+275;
                    var py=y+250;
                    ctx.fillRect(px,py,1,1);  
                    i = i + 1;
                }
                alertify.message('Cambio puntos');
            }
        }else {
            window.alert("Revise los valores ingresados, alguno no es válido.");
            document.getElementById("numx1").value = "";
            document.getElementById("numy1").value = "";
            document.getElementById("numx2").value = "";
            document.getElementById("numy2").value = "";
        }
        
        alertify.success('Metodo Directo');
    }else if (metodo == 'ADDS'){ // -----------------------------METODO ADD SIMPLE ---------------------------
        // Metodo ADD simple
        x1 = Number(nx1);
        y1 = Number(ny1);
        x2 = Number(nx2);
        y2 = Number(ny2);
        var canvas = document.getElementById("canvas");
        //para saber si esta dentro de la pizarra
        if (x1>=-275 && x1<=275 && y1>=-250 && y1<=250 && x2>=-275 && x2<=275 && y2>=-250 && y2<=250) {
            var m = (y2-y1)/(x2-x1);//calculamos la pendiente
            var mi = 1/m;
            i=0;
            if (Math.abs(m) < 1) {
                if (x1<x2) {
                    while (x1+i<=x2){
                        var y=y1+m;
                        y1 = y;
                        y = Math.round(y);
                        var ctx = canvas.getContext("2d");
                        ctx.fillStyle = "red";
                        var px = x1+i+275;
                        var py = y+250;
                        ctx.fillRect(px,py,1,1);
                        i=i+1;
                    }
                    alertify.message('No cambia puntos');
                }else {
                    //cambiar puntos
                    var x1c=x2;
                    var y1c=y2;
                    var x2c=x1;
                    var y2c=y1;
                    while (x1c+i<=x2c){ // repetimos el algoritmo
                        var y = y1c+m;
                        y1 = y;
                        y = Math.round(y);
                        var ctx = canvas.getContext("2d");
                        ctx.fillStyle = "red";
                        var px = x1c+i+275;
                        var py = y+250;
                        ctx.fillRect(px,py,1,1);
                        i=i+1;
                    }
                    alertify.message('Cambio puntos');
                }
                
            }else {
                if (y1<y2) {
                    while (y1+i<=y2) {
                        var x=x1+mi;
                        x1 = x;
                        x = Math.round(x);
                        
                        var ctx = canvas.getContext("2d");
                        ctx.fillStyle = "red";
                        var px = x+275;
                        var py = y1+i+250;
                        ctx.fillRect(px,py,1,1);
                        i=i+1;
                    }
                    alertify.message('No cambia puntos');
                }else {
                    // intercambiar puntos o extremos
                    var x1c=x2;
                    var y1c=y2;
                    var x2c=x1;
                    var y2c=y1;
                    while (y1c+i<=y2c){
                        var x=x1c+mi;
                        x1 = x;
                        x = Math.round(x);
                        var ctx = canvas.getContext("2d");
                        ctx.fillStyle = "red";
                        var px = x+275;
                        var py = y1c+i+250;
                        ctx.fillRect(px,py,1,1);
                        i=i+1;
                    }
                    alertify.message('Cambio puntos');
                }
            }
        }else {
            window.alert("Revise los valores ingresados, alguno no es válido.");
            document.getElementById("numx1").value = "";
            document.getElementById("numy1").value = "";
            document.getElementById("numx2").value = "";
            document.getElementById("numy2").value = "";
        }
        alertify.success('ADD Simple');
    }else if (metodo == 'ADDE'){ // -----------------------------METODO ADD ENTERO ---------------------------
        // ADD Entero
        alertify.success('ADD Entero');
    }

})