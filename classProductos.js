//constructor de productos
class Productos {
  /**
   **Crear un Producto nuevo
   * @param {string} sNombre // Nombre del Producto
   * @param {float} sCant // Cant del Producto
   * @param {float} sPrecio // Precio del producto
   */
  constructor(sNombre, sCant, sPrecio) {
    this.nombre = sNombre;
    this.cant = sCant;
    this.precio = sPrecio;
  }
  sumarProd(cant) {
    this.cant += cant;
  }
  restarProd(cant) {
    this.cant -= cant;
  }
  total() {
    this.cant * this.precio;
  }
}
