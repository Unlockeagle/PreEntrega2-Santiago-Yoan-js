//////////////////////////////////Modulo de Ventas////////////////////////////////
function addVenta(productos) {
  let mensaje = " ";
  inventario.map((producto) => {
    mensaje +=
      producto.nombre + " ...................... " + producto.precio + " $\n";
  });
  prompt(`Seleciona un producto \nProductos:           Precio:\n${mensaje}`);
}

function chekout(carrito) {
  let mensaje = " ";
  let subTotal = 0;
  carrito.forEach((producto) => {
    let totalProducto = producto.cant * producto.precio;
    subTotal += totalProducto;
  }),
    carrito.map(
      (carrito) =>
        (mensaje += ` \nNombre: ${carrito.nombre} \nCant: ${
          carrito.cant
        }    Precio: $${carrito.precio} = Total: ${
          carrito.cant * carrito.precio
        }\n______________________`)
    );
  alert(
    `*Factura de Venta 
      ${mensaje} 
      \nSubTotal:  ${subTotal} 
      \n    16% IVA: ${subTotal * 0.16} 
      \n        Total: ${subTotal * 1.16}`
  );
  console.log(mensaje);
}

// Falta calcular el total de toda la Venta
function pagar() {
  chekout(carrito);
  carrito = [];
}
