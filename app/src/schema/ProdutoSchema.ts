import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProdutoSchema = new Schema(
   {
      nome: { type: String, required: true, unique: true },
      preco_unitario: Number,
      categoria: { id: String, nome: String }
   },
   { collection: "produtos" }
);
export default mongoose.model("Produto", ProdutoSchema);
