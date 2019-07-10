import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const ClienteSchema = new Schema(
   {
      nome: String,
      celular: String,
      endereco: {
         id: String,
         rua: String,
         numero: Number,
         bairro: String,
         cidade: String,
         estado: String
      }
   },
   { collection: "clientes" }
);
ClienteSchema.index({ nome: 1, celular: 1 }, { unique: true });
export default mongoose.model("Cliente", ClienteSchema);
