export interface Result<T = unknown> {
  data: T;
  message: string;
  statusCode: number;
}
