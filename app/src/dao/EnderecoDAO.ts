import databaseConstants from "../constants/database.constants";
import EnderecoSchema from "../schema/EnderecoSchema";
import Endereco from "../entity/Endereco";

export default class EnderecoDAO {
   public async pesquisaPaginada(page: number): Promise<any> {
      const query = {};
      const skip = databaseConstants.LIMIT * (page - 1);

      const data = await EnderecoSchema.find(query)
         .skip(skip)
         .limit(databaseConstants.LIMIT)
         .exec();
      const count = await EnderecoSchema.countDocuments(query).exec();

      return {
         total: count,
         page: page,
         pageSize: data.length,
         data: data
      };
   }

   public async salvar(endereco: Endereco): Promise<any> {
      const _categoria = new EnderecoSchema({
         rua: endereco.rua,
         numero: endereco.numero,
         bairro: endereco.bairro,
         cidade: endereco.cidade,
         estado: endereco.estado
      });
      const data = await _categoria.save();
      return data;
   }

   public async detalhar(id: number): Promise<any> {
      const data = await EnderecoSchema.findById(id).exec();
      return [data];
   }

   public async apagar(id: number): Promise<void> {
      await EnderecoSchema.findByIdAndDelete(id).exec();
   }

   public async atualizarRua(id: number, rua: string): Promise<void> {
      await EnderecoSchema.updateOne({ _id: id }, { rua: rua }).exec();
   }

   public async atualizarNumero(id: number, numero: number): Promise<void> {
      await EnderecoSchema.updateOne({ _id: id }, { numero: numero }).exec();
   }

   public async atualizarBairro(id: number, bairro: string): Promise<void> {
      await EnderecoSchema.updateOne({ _id: id }, { bairro: bairro }).exec();
   }

   public async atualizarCidade(id: number, cidade: string): Promise<void> {
      await EnderecoSchema.updateOne({ _id: id }, { cidade: cidade }).exec();
   }

   public async atualizarEstado(id: number, estado: string): Promise<void> {
      await EnderecoSchema.updateOne({ _id: id }, { estado: estado }).exec();
   }

   public async atualizar(endereco: Endereco): Promise<void> {
      await EnderecoSchema.updateOne(
         { _id: endereco.id },
         { rua: endereco.rua, numero: endereco.numero, bairro: endereco.bairro, cidade: endereco.cidade, estado: endereco.estado }
      ).exec();
   }
}
