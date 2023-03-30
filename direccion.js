"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
var Direccion = /** @class */ (function () {
    function Direccion(_calle, _numero, _codigopostal, _poblacion, _provincia, _piso, _letra) {
        this._calle = _calle;
        this._numero = _numero;
        this._codigopostal = _codigopostal;
        this._poblacion = _poblacion;
        this._provincia = _provincia;
        this._piso = _piso;
        this._letra = _letra;
    }
    Direccion.prototype.mostrarDatos = function () {
        console.log("Calle: " + this._calle + " Número: " + this._numero + " Piso: " + this._piso + " Letra: " + this._letra +
            " Código Postal: " + this._codigopostal + " Población: " + this._poblacion + " Provincia: " + this._provincia);
    };
    return Direccion;
}());
exports.Direccion = Direccion;
