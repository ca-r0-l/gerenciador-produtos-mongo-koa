import Produto from "../entity/Produto";

export default class ClienteDAO {
   // private PER_PAGE: number = 5;
   // private readonly SELECT: string = `
   // SELECT p.id idProduto, p.nome, p.preco_unitario preco, c.id idCategoria, c.nome nomeCategoria
   //    FROM produtos p`;
   // private readonly JOIN: string = `LEFT JOIN categorias c ON
   // p.categoria = c.id`;
   // private readonly ORDER: string = `ORDER BY p.id`;
   // public async getAllPaginated(pageNumber): Promise<any> {
   //    const pool = await connection;
   //    const result = await pool.request().query(`
   //             ${this.SELECT}
   //             ${this.JOIN}
   //             ${this.ORDER}
   //             OFFSET ${this.PER_PAGE} * (${pageNumber} - 1) ROWS
   //             FETCH NEXT ${this.PER_PAGE} ROWS ONLY;
   //             `);
   //    return result.recordset;
   // }
   // public async add(produto: Produto): Promise<any> {
   //    const pool = await connection;
   //    const result = await pool
   //       .request()
   //       .input("nome", produto.nome)
   //       .input("preco_unitario", produto.preco_unitario)
   //       .input("categoria", produto.categoria)
   //       .query("insert into produtos (nome, preco_unitario, categoria) values (@nome, @preco_unitario, @categoria);");
   //    return result.recordset;
   // }
   // public async detail(id: number): Promise<any> {
   //    const pool = await connection;
   //    const result = await pool.request().input("id", id).query(`${this.SELECT}
   //       ${this.JOIN}
   //       where p.id = @id;`);
   //    return result.recordset;
   // }
   // public async delete(id: number): Promise<any> {
   //    const pool = await connection;
   //    const result = await pool
   //       .request()
   //       .input("id", id)
   //       .query("delete from produtos where id = @id;");
   //    return result.recordset;
   // }
   // public async updateNome(id: number, nome: string): Promise<any> {
   //    const pool = await connection;
   //    const result = await pool
   //       .request()
   //       .input("id", id)
   //       .input("nome", nome)
   //       .query("update produtos set nome = @nome where id = @id;");
   //    return result.recordset;
   // }
   // public async updatePreco(id: number, preco: number): Promise<any> {
   //    const pool = await connection;
   //    const result = await pool
   //       .request()
   //       .input("id", id)
   //       .input("preco_unitario", preco)
   //       .query("update produtos set preco_unitario = @preco_unitario where id = @id;");
   //    return result.recordset;
   // }
   // public async updateCategoria(id: number, categoria: number): Promise<any> {
   //    const pool = await connection;
   //    const result = await pool
   //       .request()
   //       .input("id", id)
   //       .input("categoria", categoria)
   //       .query("update produtos set categoria = @categoria where id = @id;");
   //    return result.recordset;
   // }
}
