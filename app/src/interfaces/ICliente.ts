import IEndereco from "./IEndereco";

export default interface ICliente {
   id?: number;
   nome: string;
   celular: string;
   endereco: IEndereco;
}
