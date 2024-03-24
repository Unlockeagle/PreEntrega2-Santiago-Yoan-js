//////////////////////////////////Modulo de Compras////////////////////////////////

//Funcion que crea los productos
function crearProducto() {
  let nombre = prompt("Ingrese nombre del producto a crear");
  let existe = inventario.some((elem) => elem.nombre === nombre);
  if (existe) {
    alert(`El producto ya existe`);
  } else {
    let cant = Number(prompt("Ingrese cantidad de productos a crear"));
    let precio = Number(prompt("Ingrese precio del producto a crear"));
    if (!isNaN(cant, precio)) {
      return inventario.push(new Productos(nombre, cant, precio));
    } else {
      alert("Ingrese un numero valido");
    }
  }
}
//Busca un producto por su nombre
function buscarUnProducto(inventario) {
  let prod = prompt(`¿Qué producto desea ver?`);
  let existe = inventario.some((elem) => elem.nombre === prod);
  if (existe) {
    buscarUn = inventario.find((elem) => elem.nombre === prod);
    alert(
      `Nombre: ${buscarUn.nombre} \nCantidad: ${buscarUn.cant} \nPrecio: ${buscarUn.precio}`
    );
  } else {
    alert(`El producto "${prod}" no existe. Por favor, inténtelo de nuevo.`);
  }
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

function updatePrice() {
  let upPrice;
  let prod = prompt("Cual Producto desea modificara?");
  let existe = inventario.some((elem) => elem.nombre === prod);
  let precioNuevo = Number(prompt("Ingrese el nuevo precio"));
  if (existe === true && !isNaN(precioNuevo)) {
    upPrice = inventario.find((producto) => {
      if (producto.nombre === prod) {
        return (producto.precio = precioNuevo);
      }
    });
  } else {
    alert(
      "El prodcuto no existe o ha ingresado un precio invalido, intente de nuevo"
    );
  }
}

//regista la Compra de productos y aumenta las cantidades, le puedo agregar una actualizacion de precio
let addCompra;
function registrarCompra() {
  let prod = prompt("Ingrese un producto comprado");
  let existe = inventario.some((elem) => elem.nombre === prod);
  if (existe) {
    let cantidad = Number(prompt("Ingrese la cantidad comprada"));
    addCompra = inventario.find((producto) => {
      if (producto.nombre === prod && !isNaN(cantidad)) {
        return producto.sumarProd(cantidad);
      }
    });
  } else {
    alert(
      "El producto no existe, porfavor creelo antes de cargar una nueva compra"
    );
  }
}
