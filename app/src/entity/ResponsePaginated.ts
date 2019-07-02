export default class ResponsePaginated<T> {
   public code: number;
   public body: {
      data: T[];
      total: number;
      page: number;
      pageSize: number;
   };

   constructor(code: number, total: number, page: number, data: T[]) {
      this.code = code;
      this.body = {
         total: total,
         page: page,
         data: data,
         pageSize: data.length
      };
   }
}
