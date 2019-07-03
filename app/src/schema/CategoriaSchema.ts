import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const CategoriaSchema = new Schema({ nome: String }, { collection: "categorias" });
export default mongoose.model("Categorias", CategoriaSchema);
