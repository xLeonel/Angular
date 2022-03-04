export class Atm {
    constructor (
        public id: number,
        public numeroTerminal: string,
        public agencia: string,
        public tipoTerminal: string,
        public modelo: string,
        public fabricacao: string
    ) { }   
}