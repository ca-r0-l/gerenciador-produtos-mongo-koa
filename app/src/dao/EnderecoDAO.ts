export default class EnderecoDAO {
   // private PER_PAGE: number = 5;
   // private readonly SELECT: string = `SELECT *
   // FROM enderecos`;
   // private readonly ORDER: string = `ORDER BY enderecos.id`;
   // public async getAllPaginated(pageNumber): Promise<any> {
   //    const pool = await connection;
   //    const result = await pool.request().query(`
   //       ${this.SELECT}
   //       ${this.ORDER}
   //       OFFSET ${this.PER_PAGE} * (${pageNumber} - 1) ROWS
   //       FETCH NEXT ${this.PER_PAGE} ROWS ONLY;
   //    `);
   //    return result.recordset;
   // }
   // public async add(endereco): Promise<any> {
   //    const pool = await connection;
   //    const result = await pool
   //       .request()
   //       .input("rua", endereco.rua)
   //       .input("numero", endereco.numero)
   //       .input("bairro", endereco.bairro)
   //       .input("cidade", endereco.cidade)
   //       .input("estado", endereco.estado)
   //       .query("insert into enderecos (rua, numero, bairro, cidade, estado) values (@rua, @numero, @bairro, @cidade, @estado);");
   //    return result.recordset;
   // }
   // public async detail(id: number): Promise<any> {
   //    const pool = await connection;
   //    const result = await pool
   //       .request()
   //       .input("id", id)
   //       .query(`${this.SELECT} where id = @id;`);
   //    return result.recordset;
   // }
   // public async delete(id: number): Promise<any> {
   //    const pool = await connection;
   //    const result = await pool
   //       .request()
   //       .input("id", id)
   //       .query("delete from enderecos where id = @id;");
   //    return result.recordset;
   // }
   // public async updateRua(id: number, rua: string): Promise<any> {
   //    const pool = await connection;
   //    const result = await pool
   //       .request()
   //       .input("id", id)
   //       .input("rua", rua)
   //       .query("update enderecos set rua = @rua where id = @id;");
   //    return result.recordset;
   // }
   // public async updateNumero(id: number, numero: number): Promise<any> {
   //    const pool = await connection;
   //    const result = await pool
   //       .request()
   //       .input("id", id)
   //       .input("numero", numero)
   //       .query("update enderecos set numero = @numero where id = @id;");
   //    return result.recordset;
   // }
   // public async updateBairro(id: number, bairro: string): Promise<any> {
   //    const pool = await connection;
   //    const result = await pool
   //       .request()
   //       .input("id", id)
   //       .input("bairro", bairro)
   //       .query("update enderecos set bairro = @bairro where id = @id;");
   //    return result.recordset;
   // }
   // public async updateCidade(id: number, cidade: string): Promise<any> {
   //    const pool = await connection;
   //    const result = await pool
   //       .request()
   //       .input("id", id)
   //       .input("cidade", cidade)
   //       .query("update enderecos set cidade = @cidade where id = @id;");
   //    return result.recordset;
   // }
   // public async updateEstado(id: number, estado: string): Promise<any> {
   //    const pool = await connection;
   //    const result = await pool
   //       .request()
   //       .input("id", id)
   //       .input("estado", estado)
   //       .query("update enderecos set estado = @estado where id = @id;");
   //    return result.recordset;
   // }
}
