//////////////////////////////////Modulo de Compras////////////////////////////////

//Funcion que crea los productos
function crearProducto() {
  let nombre = prompt("Ingrese nombre del producto a crear");
  let cant = Number(prompt("Ingrese cantidad de productos a crear"));
  let precio = Number(prompt("Ingrese precio del producto a crear"));
  return inventario.push(new Productos(nombre, cant, precio));
}
//Busca un producto por su nombre
let buscarUn;
function buscarUnProducto(inventario) {
  let prod = prompt(`"Que producto desea ver?"`);
  buscarUn = inventario.find((elem) => elem.nombre === prod);
  alert(
    `Nombre: ${buscarUn.nombre} \nCant: ${buscarUn.cant} \nPrecio: ${buscarUn.precio}`
  );
}

//Muestra todos los productos dentro del inventario
function chekoutInv(inventario) {
  let mensaje = " ";
  inventario.map(
    (inventario) =>
      (mensaje += ` \nNombre: ${inventario.nombre} \nCant: ${inventario.cant} \nPrecio:${inventario.precio} \n______________________`)
  );
  alert("Inventarios disponible:" + mensaje);
  console.log(mensaje);
}

let upPrice;
function updatePrice() {
  let prod = prompt("Cual Producto desea modificara?");
  let precioNuevo = Number(prompt("Ingrese el nuevo precio"));
  upPrice = inventario.find((producto) => {
    if (producto.nombre === prod) {
      return (producto.precio = precioNuevo);
    }
  });
}

//regista la Compra de productos y aumenta las cantidades, le puedo agregar una actualizacion de precio
let addCompra;
function registrarCompra() {
  let prod = prompt("Ingrese un producto comprado");
  let cantidad = Number(prompt("Ingrese la cantidad comprada"));
  addCompra = inventario.find((producto) => {
    if (producto.nombre === prod) {
      return producto.sumarProd(cantidad);
    }
  });
}
