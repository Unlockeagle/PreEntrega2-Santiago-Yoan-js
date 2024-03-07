/*Se crean los productos */
class Producto {
  constructor(sNombre, sPrecioCompra, sPrecioVenta) {
    this.nombre = sNombre;
    this.cantidad = 0;
    this.precioCompra = sPrecioCompra;
    this.precioVenta = sPrecioVenta;
  }
  /**Cuando compran los productos suman al inventario y asigna precios */
  comprar(cant, sPrecioCompra, sPrecioVenta) {
    this.cantidad += cant;
    this.precioCompra = sPrecioCompra;
    this.precioVenta = sPrecioVenta;
  }
  /**Cuando se vende resta al inventario */
  venta(cant) {
    if (cant > this.cantidad) {
      alert("Disculpa - Inventario insufucuente");
    } else this.cantidad -= cant;
  }
  /**Modifica precio de Venta */
  modifPrecioVta(precio) {
    this.precioVenta = precio;
  }

  consultaCompra() {
    return this.nombre + " " + this.cantidad;
  }
}

function creaProducto() {
  let nombre = prompt("ingrese el nombre");
  let precioCpmra = prompt("precio compra");
  let precioVenta = prompt("Ingrese precio venta");
  return listaProductos.push(new Producto(nombre, precioCpmra, precioVenta));
}

function mostrarListaProductos() {
  for (let i = 0; i < listaProductos.length; i++) {
    let productos = listaProductos[i++];

    alert(
      "============================================" +
        "\n" +
        "Nombre: " +
        productos.nombre +
        "\n " +
        "Cant: " +
        productos.cantidad +
        "\n " +
        "Precio Vta: " +
        productos.precioVenta
    );
  }
}

let res;
let listaProductos = [];

do {
  let opcion = prompt(
    "-----------Menu!!-----------" +
      "\n 1- Desea crear un producto?" +
      "\n 2- Ver Inv de productos?"
  );
  switch (opcion) {
    case "1":
      do {
        res = prompt("Complete cuidadosamente los datos 'S' para continuar");
        if (res != "s") {
          alert("gracias fin");
        } else {
        }
        while (res == "s") {
          creaProducto();

          res = prompt("desea crear otro producto?");
        }
      } while (res == "s");
      break;
    case "2":
      mostrarListaProductos();

      break;

    default:
      break;
  }
} while (res == "n");
