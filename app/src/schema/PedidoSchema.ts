import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const PedidoSchema = new Schema(
   {
      valor: Number,
      cliente: {
         id: String,
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
      produtos: [{ id: String, nome: String, preco_unitario: Number, categoria: { id: String, nome: String } }]
   },
   { collection: "pedidos" }
);
PedidoSchema.index({ nome: 1, celular: 1 }, { unique: true });
export default mongoose.model("Pedido", PedidoSchema);
