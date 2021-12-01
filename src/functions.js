function contarVocales(texto){
    const regVocales = /[aeiouaéíóú]/gi;
    let test = texto.match(regVocales);
    return test.length+1;
}


function contarConsonantes(texto){
    const regConsonantes = /[bcdfghjklmnñpqrstvwxyz]/gi;
    let test = texto.match(regConsonantes);
    return test.length;
}

function contarPalabras(texto){
    nuevoTexto = texto.replace(/\n/g,' ')
    return nuevoTexto.split(' ').length;
    
}

function contarTodo(texto){
    return 'Tu texto tiene ' + contarVocales(texto) + ' vocales, ' + contarConsonantes(texto) + ' consonantes y ' + contarPalabras(texto) + ' palabras.'
}



module.exports = {contarTodo, contarVocales, contarConsonantes};