export class Telefono {
    constructor(
        private _tipo: string,
        private _numero: number
    ){
        
    }
    mostrarDatos(): void{
        console.log("Tipo: "+this._tipo+" Número: "+this._numero);
    }
}