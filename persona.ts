import {Direccion} from './direccion';
import {Mail} from './mail';
import {Telefono} from './telefono';
export class Persona {
    constructor(
    private _nombre: string,
    private _apellidos: string,
    private _edad: number,
    public _dni: string,
    private _cumpleaños: string,
    private _colorfavorito: string,
    private _sexo: string,
    protected _direcciones: any[],
    protected _mails: any[],
    protected _telefonos: any[],
    private _notas?: string
    ){
        this._direcciones=[new Direccion(_direcciones[0], _direcciones[1], _direcciones[2], _direcciones[3],
            _direcciones[4], _direcciones[5] || '', _direcciones[6] || '')];
        this._telefonos=[new Telefono(_telefonos[0], _telefonos[1])];
        this._mails=[new Mail(_mails[0], _mails[1])];
    }
    mostrarDatos(): void{
        console.log("Nombre: "+this._nombre+" Apellidos: "+this._apellidos+" Edad: "+this._edad+" DNI: "+this._dni+
        " Cumpleaños: "+this._cumpleaños+" Color favorito: "+this._colorfavorito+" Sexo: "+this._sexo+" Direcciones: "+this._direcciones+
        " Mails: "+this._mails+" Teléfonos: "+this._telefonos+" Notas: "+this._notas);
    }
    modificarinformacion(direccion: any[], mail: any [], telefono: any[]): void{
        this._direcciones.push(new Direccion(direccion[0], direccion[1], direccion[2], direccion[3],
            direccion[4], direccion[5] || '', direccion[6] || ''));
        this._mails.push(new Mail(mail[0], mail[1]));
        this._telefonos.push(new Telefono(telefono[0], telefono[1]))

    }
}