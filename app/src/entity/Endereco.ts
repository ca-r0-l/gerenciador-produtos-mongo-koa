export default class Endereco {
   public id: string;
   public rua: string;
   public numero: number;
   public bairro: string;
   public cidade: string;
   public estado: string;

   constructor(rua: string, numero: number, bairro: string, cidade: string, estado: string, id?: string) {
      this.rua = rua;
      this.numero = numero;
      this.bairro = bairro;
      this.cidade = cidade;
      this.estado = estado;
      if (id) this.id = id;
   }
}
