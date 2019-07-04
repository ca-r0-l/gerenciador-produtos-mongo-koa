import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const EnderecoSchema = new Schema(
   {
      rua: String,
      numero: Number,
      bairro: String,
      cidade: String,
      estado: String
   },
   { collection: "enderecos" }
);
EnderecoSchema.index({ rua: 1, numero: 1, bairro: 1, cidade: 1, estado: 1 }, { unique: true });
export default mongoose.model("Endereco", EnderecoSchema);
