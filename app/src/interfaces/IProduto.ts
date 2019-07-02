import ICategoria from "./ICategoria";

export default interface IProduto {
   id?: number;
   nome: string;
   valor: number;
   categoria: ICategoria;
}
