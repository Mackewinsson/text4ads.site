// FUNCION PARA COPIAR EL ANUNCIO

const copyText = document.getElementById('copy__adtext');

copyText.addEventListener('click',() => {

   // Selecciona el texto
   document.getElementById('ad__text').select();
   // Lo copia en el portapapeles
   document.execCommand('Copy');

});

// FUNCIONALIDAD PARA BORRAR TODO

const botonBorrar = document.getElementById('clearText');

botonBorrar.addEventListener('click',() => {

   document.getElementById('ad__text').value = "";

});

// FUNCION PARA COPIAR EL LINK

const copyLinkText = document.getElementById('copy__linktext');

copyLinkText.addEventListener('click',() => {

   // Selecciona el texto
   document.getElementById('link__text').select();
   // Lo copia en el portapapeles
   document.execCommand('Copy');

});

// FUNCIONALIDAD PARA BORRAR TODO

const botonBorrarLink = document.getElementById('clearTextLink');

botonBorrarLink.addEventListener('click',() => {

   document.getElementById('link__text').value = "";

});

// FUNCION PARA GENERAR LINK

const generateLink = document.getElementById('generate__link');

generateLink.addEventListener('click',() => {

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
   
       const textLink = document.getElementById("link__text");
       textLink.value = link;

});






// // FUNCIONALIDAD PARA GENERAR LINK

// function linkgenerator () {
      
//    // 1. Declaramos las variables con las preguntas

//        var link;
//        var codigo;
//        var numero;
//        var texto;
//        var pregCodigo = ('¿Cual es el codigo pais? Ejemplo: 56');
//        var pregNum = ('¿Cual es tu numero de telefono? Ejemplo: 955555555 (9 digitos)');
//        var pregText = ('Escribe el mensaje automatico que estara escrito en la conversación Ejemplo: Quiero mas informacion de...');
   
//        // 2. Generamos la funcion que preguntará (PENDIENTE)
   
//        // 3. Llamamos a la funcion 3 veces
   
//        codigo = prompt(pregCodigo);
//        numero = prompt(pregNum);
//        texto = prompt(pregText);
   
//        // 4. Construir LINK
   
//        link = ('api.whatsapp.com/send?phone=' + codigo + numero + '&text=' + texto);
   
//        // 5. Insertar LINK en elemento HTML texto__link
   
//        const textLink = document.getElementById("texto__link");
//        textLink.value = link;
// };

// const buttonGenerateWaLink = document.getElementById('generar__link');

// buttonGenerateWaLink.addEventListener('click', linkgenerator();)

// // FUNCIONALIDAD PARA HACER COPIAR EL LINK

// const copyLink = document.getElementById('copiar__link')

// copyLink.addEventListener('click',() => {

//    // Selecciona el texto
//    document.getElementById('texto__link').select();
//    // Lo copia en el portapapeles
//    document.execCommand('Copy');

// });

// // FUNCIONALIDAD PARA BORRAR TODO

// const botonBorrar = document.getElementById('clearText');

// botonBorrar.addEventListener('click',() => {

//    document.getElementById('texto__link').value = "";

// });

// // FUNCIONALIDAD PARA HACER COPIAR EL ANUNCIO

// const copyAnuncio = document.getElementById('copiar__anuncio')

// copyAnuncio.addEventListener('click',() => {

//    // Selecciona el texto
//    document.getElementById('texto__anuncio').select();
//    // Lo copia en el portapapeles
//    document.execCommand('Copy');

// });
