import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const cliente = new Schema({
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
});

const Cliente = mongoose.model("Cliente", cliente);
