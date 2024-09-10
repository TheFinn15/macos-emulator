export interface DockApp {
  name: string;
  img: string;
  // order of item in the list
  order: number;
  active?: boolean;
  onClick?: () => void;
  isUtility?: boolean;
}
