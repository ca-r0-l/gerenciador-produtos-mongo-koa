import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const Categoria = new Schema({ nome: String }, { collection: "categorias" });

export default mongoose.model("Categorias", Categoria);
