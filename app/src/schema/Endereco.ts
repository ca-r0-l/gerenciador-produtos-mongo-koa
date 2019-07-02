import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const endereco = new Schema({
   id: Number,
   rua: String,
   numero: Number,
   bairro: String,
   cidade: String,
   estado: String
});

const Endereco = mongoose.model("Endereco", endereco);
