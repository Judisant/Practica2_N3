"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var persona_1 = require("./persona");
var pepito = new persona_1.Persona("Pepito", "Moya Santos", 34, "45326486X", "22-junio-1988", "morado", "hombre", ["C/Aliso", 6, 11500, "El Puerto de Santa María", "Cádiz"], ["gmail", "pepitomoya@gmail.com"], ["móvil", 667511878]);
var lia = new persona_1.Persona("Lía", "Pérez López", 31, "53246486L", "03-marzo-1992", "verde", "mujer", ["C/Maravillas", 9, 12600, "Mataró", "Barcelona"], ["gmail", "liaperez@gmail.com"], ["móvil", 656111878]);
var ruben = new persona_1.Persona("Rubén", "Juarez Pez", 30, "32546486M", "02-julio-1994", "negro", "hombre", ["C/Bienvenida", 1, 13562, "Chauchina", "Granada"], ["gmail", "rubenjp@gmail.com"], ["móvil", 666611878]);
var grupopersonas = [pepito, lia, ruben];
function busquedaDNI(dni, direccion, mail, telefono) {
    var found = grupopersonas.filter(function (persona) { return persona._dni == dni; });
    if (found.length) {
        found[0].modificarinformacion(direccion, mail, telefono);
        return console.log("Información añadida");
    }
    return console.log("DNI no encontrado");
}
busquedaDNI("45326486X", ["C/Nicaragua", 8, 11501, "Jerez de la Frontera", "Cádiz"], ["gmail", "pepitillomoya@gmail.com"], ["móvil", 634512526]);
console.log(pepito, lia, ruben);
