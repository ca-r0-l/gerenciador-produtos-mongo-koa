import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const CategoriaSchema = new Schema({ nome: { type: String, required: true, unique: true } }, { collection: "categorias" });
export default mongoose.model("Categorias", CategoriaSchema);
