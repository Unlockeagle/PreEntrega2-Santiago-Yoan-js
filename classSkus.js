class Skus {
  /**
   **Crear un Sku nuevo
   * @param {string} sNombre // Nombre Sku
   * @param {Float} sCant // Cant Sku
   * @param {float} sPrecio // Precio Sku
   */
  constructor(sNombre, sCant, sPrecio) {
    this.nombre = sNombre;
    this.cant = sCant;
    this.precio = sPrecio;
  }
  sumarSku(cant) {
    this.cant += cant;
  }
  restarSku(cant) {
    this.cant -= cant;
  }
  totalSku(sku) {
    this.cant * this.precio;
  }
}
