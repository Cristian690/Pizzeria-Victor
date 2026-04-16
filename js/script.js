
function cambiarCantidad(pizza, cambio) {
    let padre = pizza.parentElement;
    let spanNumero = padre.querySelector('.numero-cantidad');

    let cantidadActual = parseInt(spanNumero.innerText);
    let nuevaCantidad = cantidadActual + cambio;

    if (nuevaCantidad >= 0) {
        spanNumero.innerText = nuevaCantidad;
    }
    
    actualizarTotal();
}
window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');

    // Esperamos 2 segundos (2000 milisegundos)
    setTimeout(() => {
        header.classList.add('modo-compacto');
    }, 2000);
});

function actualizarTotal() {
    let suma = 0;
    let listaPizzas = document.querySelectorAll('.tarjeta-pizza');

    listaPizzas.forEach(element => {
        let cantidad = parseInt(element.querySelector('.numero-cantidad').innerText);
        let precio = parseInt(element.dataset.precio);

        suma += cantidad * precio;
    });
    
    document.querySelector('.suma-productos').innerText = `$ ${suma}`;
    
}

function resetSuma(){
    let listaPizzas = document.querySelectorAll('.tarjeta-pizza');

    listaPizzas.forEach(element => {
        element.querySelector('.numero-cantidad').innerText = 0;
        
        
    })

    actualizarTotal();
}

let pedidoWhastapp = "Hola te paso mi pedido: \n";

function agregarPedido(){
    document.querySelector('.descripcion-carrito').innerHTML = "";
    document.querySelector('.capa1').style.display = 'flex';

    let listaPizzas = document.querySelectorAll('.tarjeta-pizza');
    let sumaPrecio = 0;
    

    listaPizzas.forEach(element => {
        let nombrePizza = element.querySelector('.nombre-pizza').innerText;

        let cantidadPizza = parseInt(element.querySelector('.numero-cantidad').innerText);
        let precioPizza = parseInt(element.dataset.precio);        

        if (cantidadPizza > 0) {
            document.querySelector('.descripcion-carrito').innerHTML += `<p>${cantidadPizza} x ${nombrePizza}</p>`;
            pedidoWhastapp += `${cantidadPizza} x ${nombrePizza}\n`;
            sumaPrecio += precioPizza * cantidadPizza;
        }        

    });

    pedidoWhastapp += `Total: $ ${sumaPrecio}`;

    document.querySelector('.precio-total-confirmar').innerText = `$ ${sumaPrecio}`;

}

function enviarWhatsapp() {
    document.querySelector('.descripcion-carrito').innerHTML = "";
    document.querySelector('.descripcion-carrito').style.display = 'none';


    document.querySelector('.bloque-pago-envio').style.display = 'flex';
}


function volver(){
    document.querySelector('.capa1').style.display = 'none';
}