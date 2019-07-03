import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const ClienteSchema = new Schema(
   {
      id: Number,
      nome: String,
      celular: String,
      endereco: {
         id: Number,
         rua: String,
         numero: Number,
         bairro: String,
         cidade: String,
         estado: String
      }
   },
   { collection: "clientes" }
);

export default mongoose.model("Cliente", ClienteSchema);
