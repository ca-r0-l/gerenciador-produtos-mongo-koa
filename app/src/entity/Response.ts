export default class Response<T> {
   public code: number;
   public data: T[];

   constructor(code: number, data?: T[]) {
      this.code = code;
      if (data) this.data = data;
   }
}
