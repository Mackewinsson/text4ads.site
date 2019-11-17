// FUNCIONALIDAD PARA GENERAR LINK

const buttonGenerateWaLink = document.getElementById('generar__link');

buttonGenerateWaLink.addEventListener('click',() => {

        // 1. Declaramos las variables con las preguntas

        var link;
        var codigo;
        var numero;
        var texto;
        var pregCodigo = ('¿Cual es el codigo pais? Ejemplo: 56');
        var pregNum = ('¿Cual es tu numero de telefono? Ejemplo: 955555555 (9 digitos)');
        var pregText = ('Escribe el mensaje automatico que estara escrito en la conversación Ejemplo: Quiero mas informacion de...');
    
        // 2. Generamos la funcion que preguntará (PENDIENTE)
    
        // 3. Llamamos a la funcion 3 veces
    
        codigo = prompt(pregCodigo);
        numero = prompt(pregNum);
        texto = prompt(pregText);
    
        // 4. Construir LINK
    
        link = ('api.whatsapp.com/send?phone=' + codigo + numero + '&text=' + texto);
    
        // 5. Insertar LINK en elemento HTML texto__link
    
        const textLink = document.getElementById("texto__link");
        textLink.value = link;

});

// FUNCIONALIDAD PARA HACER COPIAR EL LINK

const copyLink = document.getElementById('copiar__link')

copyLink.addEventListener('click',() => {

   // Selecciona el texto
   document.getElementById('texto__link').select();
   // Lo copia en el portapapeles
   document.execCommand('Copy');

});

// FUNCIONALIDAD PARA BORRAR TODO

const clearText = document.getElementById('clearText');


clearText.addEventListener('click', () => {

    const textLink = document.getElementById("texto__link");
    textLink.value = '';

});

// FUNCIONALIDAD PARA HACER COPIAR EL ANUNCIO

const copyAnuncio = document.getElementById('copiar__anuncio')

copyAnuncio.addEventListener('click',() => {

   // Selecciona el texto
   document.getElementById('texto__anuncio').select();
   // Lo copia en el portapapeles
   document.execCommand('Copy');

});
