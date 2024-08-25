import { ReactNode } from 'react';

export interface ListItem<LT = string> {
  key: LT;
  value: string;
}

export interface IconBarItem {
  icon: string;
}

export interface LabelBarItem {
  label: string;
}

export type BarItem = IconBarItem | LabelBarItem;

// TODO: add variants type for shortcuts and items(non-required fields)
export type BarItemOverlayList = LabelBarItem & {
  id: number;
  // list of keyboard key icons
  shortcut?: string[];
  disabled?: boolean;
  checked?: boolean;
  onClick?: () => void;
  items: BarItemOverlayList[][];
};

export type BaseAppBarItem = BarItem & {
  id: number;
  items: BarItemOverlayList[][] | ReactNode;
};

export enum SystemApps {
  Finder = 'finder',
}

export type AppsOptions = {
  [name in SystemApps]: {
    contextMenu: BaseAppBarItem[];
  };
};
