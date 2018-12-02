$('#btn-arbitraria').click(function(){
    
    var x1 = $('#numx1').val();
    var y1 = $('#numy1').val();
    var x2 = $('#numx2').val();
    var y2 = $('#numy2').val();

    var metodo = $('#metodoLinea').val();

    if (metodo == 0){
        alertify.error('Elija un Metodo');
    }else if (metodo == 'MD'){
        alertify.message('Metodo Directo');
    }else if (metodo == 'ADDS'){
        alertify.message('ADD Simple');
    }else if (metodo == 'ADDE'){
        alertify.message('ADD Entero');
    }

})