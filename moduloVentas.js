// let carrito;

// //Realiza una venta restando al inventario
// let subtractVenta;
// function registrarVenta() {
//   let prod = prompt("Ingrese a Vender");
//   let cantidad = Number(prompt("Ingrese a Vender"));
//   subtractVenta = inventario.find((producto) => {
//     if (producto.nombre === prod) {
//       return (producto.cant -= cantidad);
//     }
//   });
// }

// //Muestra productos dentro del carrito
// function chekout(carrito) {
//   let mensaje = " ";
//   carrito.map(
//     (carrito) =>
//       (mensaje += ` \nNombre: ${carrito.nombre} \nCant: ${carrito.cant} \nPrecio:${carrito.precio} \n______________________`)
//   );
//   alert("Inventarios disponible:" + mensaje);
//   console.log(mensaje);
// }
