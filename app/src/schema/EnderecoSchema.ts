import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const EnderecoSchema = new Schema(
   {
      id: Number,
      rua: String,
      numero: Number,
      bairro: String,
      cidade: String,
      estado: String
   },
   { collection: "enderecos" }
);

export default mongoose.model("Endereco", EnderecoSchema);
