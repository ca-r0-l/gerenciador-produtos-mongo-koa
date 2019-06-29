import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const pedido = new Schema({
   id: Number,
   valor: Number,
   cliente: {
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
   },
   produtos: [{ nome: String, preco_unitario: Number, categoria: { id: Number, nome: String } }]
});

const Pedido = mongoose.model("Pedido", pedido);
