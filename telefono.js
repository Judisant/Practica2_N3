"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(_tipo, _numero) {
        this._tipo = _tipo;
        this._numero = _numero;
    }
    Telefono.prototype.mostrarDatos = function () {
        console.log("Tipo: " + this._tipo + " Número: " + this._numero);
    };
    return Telefono;
}());
exports.Telefono = Telefono;
