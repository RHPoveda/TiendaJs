// Para cambiar los thumbs del producto
const producto = document.getElementById('producto');
const productoImagen = producto.querySelector('.producto__imagen');
const thumbs = producto.querySelector('.producto__thumbs');

// Para el Color
const propiedadColor = producto.querySelector('#propiedad-color');

// Para cantidad
const btnIncrementarCantidad = producto.querySelector('#incrementar-cantidad');
const btnDisminuirCantidad = producto.querySelector('#disminuir-cantidad');
const inputCantidad = producto.querySelector('#cantidad');

// Funcionalidad de las thumbnails
thumbs.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        const imagenSrc = e.target.src;

        // Obtenemos index del ultimo "/"
        const lastIndex = imagenSrc.lastIndexOf('/');

        const nombreImagen = imagenSrc.substring(lastIndex + 1);

        // Cambiar ruta imagen del producto
        productoImagen.src = `./img/tennis/${nombreImagen}`;
    }
});

// CAmbiar el color 
propiedadColor.addEventListener('click', (e) => {
    if (e.target.tagName === 'INPUT') {
        // Cambiamos la ruta de la imagen del producto.
        productoImagen.src = `./img/tennis/${e.target.value}.jpg`;
    }
});

// eventos para cambiar cantidad
btnIncrementarCantidad.addEventListener('click', (e) => {
    inputCantidad.value = parseInt(inputCantidad.value) + 1;
});
btnDisminuirCantidad.addEventListener('click', (e) => {
    if (parseInt(inputCantidad.value) > 1) {
        inputCantidad.value = parseInt(inputCantidad.value) - 1;
    }
});