"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var direccion_1 = require("./direccion");
var mail_1 = require("./mail");
var telefono_1 = require("./telefono");
var Persona = /** @class */ (function () {
    function Persona(_nombre, _apellidos, _edad, _dni, _cumpleaños, _colorfavorito, _sexo, _direcciones, _mails, _telefonos, _notas) {
        this._nombre = _nombre;
        this._apellidos = _apellidos;
        this._edad = _edad;
        this._dni = _dni;
        this._cumpleaños = _cumpleaños;
        this._colorfavorito = _colorfavorito;
        this._sexo = _sexo;
        this._direcciones = _direcciones;
        this._mails = _mails;
        this._telefonos = _telefonos;
        this._notas = _notas;
        this._direcciones = [new direccion_1.Direccion(_direcciones[0], _direcciones[1], _direcciones[2], _direcciones[3], _direcciones[4], _direcciones[5] || '', _direcciones[6] || '')];
        this._telefonos = [new telefono_1.Telefono(_telefonos[0], _telefonos[1])];
        this._mails = [new mail_1.Mail(_mails[0], _mails[1])];
    }
    Persona.prototype.mostrarDatos = function () {
        console.log("Nombre: " + this._nombre + " Apellidos: " + this._apellidos + " Edad: " + this._edad + " DNI: " + this._dni +
            " Cumpleaños: " + this._cumpleaños + " Color favorito: " + this._colorfavorito + " Sexo: " + this._sexo + " Direcciones: " + this._direcciones +
            " Mails: " + this._mails + " Teléfonos: " + this._telefonos + " Notas: " + this._notas);
    };
    Persona.prototype.modificarinformacion = function (direccion, mail, telefono) {
        this._direcciones.push(new direccion_1.Direccion(direccion[0], direccion[1], direccion[2], direccion[3], direccion[4], direccion[5] || '', direccion[6] || ''));
        this._mails.push(new mail_1.Mail(mail[0], mail[1]));
        this._telefonos.push(new telefono_1.Telefono(telefono[0], telefono[1]));
    };
    return Persona;
}());
exports.Persona = Persona;
