export interface Todo {  
  id: number;
  title: string;
  label: string;
  checked: boolean;
  completed: boolean;
  editing: boolean;
  time: number;
  date: number;
  del: boolean;
}