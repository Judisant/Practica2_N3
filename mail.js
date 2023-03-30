"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
var Mail = /** @class */ (function () {
    function Mail(_tipo, _direccion) {
        this._tipo = _tipo;
        this._direccion = _direccion;
    }
    Mail.prototype.mostrarDatos = function () {
        console.log("Tipo: " + this._tipo + " Dirección: " + this._direccion);
    };
    return Mail;
}());
exports.Mail = Mail;
