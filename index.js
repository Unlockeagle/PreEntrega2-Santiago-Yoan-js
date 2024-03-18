//constructor de productos
class Productos {
  constructor(sNombre, sCant, sPrecio) {
    this.nombre = sNombre;
    this.cant = sCant;
    this.precio = sPrecio;
  }
}

//Productos del inventario
const arroz = new Productos("arroz", 20, 3200);
const pasta = new Productos("pasta", 5, 5000);
const harina = new Productos("harina", 40, 400);
let inventario;
inventario = [arroz, pasta, harina];

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

//Aqui puedo unir las 2 funciones y con un if
//Muestra todos los productos dentro del inventario
function chekout(inventario) {
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
      return (producto.cant += cantidad);
    }
  });
}
//////////////////////////////////Modulo de Ventas////////////////////////////////

// Constructor de productos en el carrito
class Skus {
  constructor(sNombre, sCant, sPrecio) {
    this.nombre = sNombre;
    this.cant = sCant;
    this.precio = sPrecio;
  }
}

let carrito;
const platano = new Skus("platano", 20, 2000);
const caraotas = new Skus("caraotas", 30, 3000);
carrito = [platano, caraotas];
console.log(carrito);

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
  carrito.map(
    (carrito) =>
      (mensaje += ` \nNombre: ${carrito.nombre} \nCant: ${carrito.cant} \nPrecio:${carrito.precio} \n______________________`)
  );
  alert("Disponible para la venta:" + mensaje);
  console.log(mensaje);
}

let op;
do {
  op = prompt(`Opciones: 
  \n1- Modulo de compra \n2- Modulo de Ventas`);

  switch (op) {
    case "1":
      do {
        op = prompt(
          `============= MODULO DE COMPRA ============= \nSeleccione una opcion:  \n1- Ver lista de productos en Inv \n2- Ver el detalle de un producto \n3- Actualiza el precio \n4- Crea un nuevo producto \n5- Registra una nueva Compra \n0- Para regresar`
        );
        //menu del departamento de compra

        switch (op) {
          case "1":
            //ver lista de productos en inventario
            chekout(inventario);

            break;
          case "2":
            //ver detalles de un producto
            buscarUnProducto(inventario);

            break;
          case "3":
            //Actualiza Precio de un producto
            updatePrice();

            break;
          case "4":
            //Crea un producto nuevo
            crearProducto();
            chekout(inventario);
          case "5":
            //Crea una compra
            registrarCompra();

            break;
          case "6":
            //Crea una venta
            registrarVenta();

            break;
          case "7":
            //Actualiza Precio de un producto
            updatePrice();

            break;

          default:
            break;
        }
      } while (op >= "1");

      break;
    case "2":
      do {
        op = prompt(
          `============= MODULO DE VENTAS ============= \nSeleccione una opcion: \n1- Agregar productos al carrito \n2- Ver productos en el carrito \n3- Pagar \n0- Para regresar`
        );

        switch (op) {
          case "1":
            addVenta();

            break;
          case "2":
            chekout(carrito);

            break;

          default:
            break;
        }
      } while (op >= "1");

      break;

    default:
      break;
  }
} while (op === "0");
