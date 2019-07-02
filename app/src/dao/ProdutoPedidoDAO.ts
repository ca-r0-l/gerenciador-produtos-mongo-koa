export default class ProdutoPedidoDAO {
   // private PER_PAGE: number = 5;
   // public async getAllPaginated(pageNumber): Promise<any> {
   //    const pool = await connection;
   //    const result = await pool.request().query(`
   //       select
   //          pp.id idProPed,
   //          p.id  idPedido,
   //          p.id_cliente idCliente,
   //          p.valor_compra valor,
   //          pr.id idProduto,
   //          pr.nome nome,
   //          pr.preco_unitario preco,
   //          pr.categoria categoria
   //       from pedidos_produtos pp
   //       right join pedidos p on  pp.id_pedido = p.id
   //       left join produtos pr on pp.id_produto = pr.id
   //       ORDER BY pp.id
   //       OFFSET ${this.PER_PAGE} * (${pageNumber} - 1) ROWS
   //       FETCH NEXT ${this.PER_PAGE} ROWS ONLY;
   //       `);
   //    return result.recordset;
   // }
}
