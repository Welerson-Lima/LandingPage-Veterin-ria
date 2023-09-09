let contador = 1; 
setInterval( function(){
    document.getElementById('imag' + contador).checked = true;
    contador ++;

    if( contador> 8) {
        contador = 1;
    }
}, 3000)