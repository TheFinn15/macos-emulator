import { BaseAppBarItem, SystemApps } from '../types.ts';

export interface BarItemProps {
  item: BaseAppBarItem;
  touched: boolean;
  ind: number;
  hovered: number;
  currentApp: SystemApps;
  onTouch(val: boolean): void;
  onHover(ind: number): void;
}

export interface OverlayTemplateProps
  extends Omit<BarItemProps, 'touched' | 'onTouch' | 'onHover'> {
  onHover(ind: number): void;
  onClick(ind: number): void;
}
