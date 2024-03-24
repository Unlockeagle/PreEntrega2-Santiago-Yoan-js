//Productos del inventario
const arroz = new Productos("arroz", 20, 3200);
const pasta = new Productos("pasta", 5, 5000);
const harina = new Productos("harina", 40, 400);
let inventario;
inventario = [arroz, pasta, harina];

let carrito;
const platano = new Skus("platano", 20, 2000);
const caraotas = new Skus("caraotas", 30, 3000);
carrito = [platano, caraotas];

let buscarSku;
function addVenta() {
  let mensaje = " ";
  inventario.map((producto, index) => {
    mensaje +=
      index +
      " " +
      producto.nombre +
      " ...................... " +
      producto.precio +
      " $\n";
  });

  let indexProd = Number(
    prompt(`Seleciona un producto \nProductos:           Precio:\n${mensaje}`)
  );
  let cantSku = Number(prompt("Cantidad?"));
  let nomSku;
  let preSku;
  let cantExistente;
  buscarSku = inventario.findIndex((index) => {
    index === indexProd;
    nomSku = inventario[indexProd].nombre;
    preSku = inventario[indexProd].precio;
    cantExistente = inventario[indexProd].cant;
  });
  if (cantSku < cantExistente) {
    inventario[indexProd].restarProd(cantSku);
    return carrito.push(new Skus(nomSku, cantSku, preSku));
  } else alert("Existencia insuficiente");
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
            chekoutInv(inventario);

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
            //Crea un nuevo producto // bug
            crearProducto();
            break;

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
            // Agrega un sku al carrito
            addVenta();

            break;
          case "2":
            // Muestra el total de los skus en el carrito
            chekout(carrito);

            break;
          case "3":
            // Muestra el total de los skus en el carrito
            //Luego vacia el carrito
            pagar();

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
