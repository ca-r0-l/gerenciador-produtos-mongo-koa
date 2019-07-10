import databaseConstants from "../constants/database.constants";
import Cliente from "../entity/Cliente";
import ClienteSchema from "../schema/ClienteSchema";
import Endereco from "../entity/Endereco";

export default class ClienteDAO {
   public async pesquisaPaginada(page: number): Promise<any> {
      const query = {};
      const skip = databaseConstants.LIMIT * (page - 1);

      const data = await ClienteSchema.find(query)
         .skip(skip)
         .limit(databaseConstants.LIMIT)
         .exec();
      const count = await ClienteSchema.countDocuments(query).exec();

      return {
         total: count,
         page: page,
         pageSize: data.length,
         data: data
      };
   }
   public async salvar(cliente: Cliente): Promise<any> {
      const _categoria = new ClienteSchema({
         nome: cliente.nome,
         celular: cliente.celular,
         endereco: {
            id: cliente.endereco.id,
            rua: cliente.endereco.rua,
            numero: cliente.endereco.numero,
            bairro: cliente.endereco.bairro,
            cidade: cliente.endereco.cidade,
            estado: cliente.endereco.estado
         }
      });
      const data = await _categoria.save();
      return data;
   }

   public async detalhar(id: number): Promise<any> {
      const data = await ClienteSchema.findById(id).exec();
      return [data];
   }
   public async apagar(id: number): Promise<void> {
      await ClienteSchema.findByIdAndDelete(id).exec();
   }

   public async atualizarNome(id: number, nome: string): Promise<void> {
      await ClienteSchema.updateOne({ _id: id }, { nome: nome }).exec();
   }

   public async atualizarEndereco(endereco: Endereco): Promise<void> {
      await ClienteSchema.updateMany(
         { "endereco.id": endereco.id },
         {
            endereco: {
               rua: endereco.rua,
               numero: endereco.numero,
               bairro: endereco.bairro,
               cidade: endereco.cidade,
               estado: endereco.estado,
               id: endereco.id
            }
         }
      ).exec();
   }

   public async atualizarCelular(id: number, celular: string): Promise<void> {
      await ClienteSchema.updateOne({ _id: id }, { celular: celular }).exec();
   }
}
