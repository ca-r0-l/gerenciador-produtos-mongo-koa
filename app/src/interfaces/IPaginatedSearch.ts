export default interface IPaginatedSearch<T> {
   total: number;
   page: number;
   pageSize: number;
   data: Array<T>;
}
