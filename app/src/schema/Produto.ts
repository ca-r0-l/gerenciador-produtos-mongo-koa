import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const produto = new Schema({
   nome: String,
   preco_unitario: Number,
   categoria: { id: Number, nome: String }
});

const Produto = mongoose.model("Produto", produto);
