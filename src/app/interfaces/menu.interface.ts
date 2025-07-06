export interface Menu {
  id: number;
  name?: string;
  path: string;
  children?: Menu[];
}
