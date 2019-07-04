import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const PedidoSchema = new Schema(
   {
      valor: Number,
      cliente: {
         nome: String,
         celular: String,
         endereco: {
            rua: String,
            numero: Number,
            bairro: String,
            cidade: String,
            estado: String
         }
      },
      produtos: [{ nome: String, preco_unitario: Number, categoria: { nome: String } }]
   },
   { collection: "pedidos" }
);

export default mongoose.model("Pedido", PedidoSchema);
