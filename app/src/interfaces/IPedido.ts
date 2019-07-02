import IProduto from "./IProduto";
import ICliente from "./ICliente";

export default interface IPedido {
   id?: number;
   produtos: Array<IProduto>;
   cliente: ICliente;
   valorCompra: number;
}
