export class Mail {
    constructor(
        private _tipo: string,
        private _direccion: string
    ) {
        
    }
    mostrarDatos(): void{
        console.log("Tipo: "+this._tipo+" Dirección: "+this._direccion);
    }
}
