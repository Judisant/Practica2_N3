export class Direccion { 
    constructor(
    private _calle: string,
    private _numero: number,
    private _codigopostal: number,
    private _poblacion: string,
    private _provincia: string,
    private _piso?: number,
    private _letra?: string
    ) {
        
    }
    mostrarDatos(): void{
        console.log("Calle: "+this._calle+" Número: "+this._numero+" Piso: "+this._piso+" Letra: "+this._letra+
        " Código Postal: "+this._codigopostal+" Población: "+this._poblacion+" Provincia: "+this._provincia);
    }
}