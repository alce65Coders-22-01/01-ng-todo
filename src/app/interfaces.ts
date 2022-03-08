export interface MenuItemsI {
  path: string;
  label: string;
}
export interface TaskI {
  id?: number;
  title: string;
  responsible: string;
  isCompleted: boolean;
}
