import Impuestos from "./Impuestos.js";
export default class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = () => nombre;

    this._impuesto = () => impuesto;
  }

  get nombre() {
    return this._nombre();
  }

  set nombre(nombre) {
    this._nombre = () => nombre;
  }

  calcularImpuesto() {
    return (this._impuesto().montoBrutoAnual - this._impuesto().deducciones) * 21 / 100;
  }

}