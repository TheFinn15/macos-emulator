import { ReactNode } from 'react';

export interface ListItem<LT = string> {
  key: LT;
  value: string;
}

export interface ShortcutOverlayItem {
  // list of keyboard key icons
  shortcut?: string[];
}

export interface ListOverlayItem {
  items?: BarItemOverlayList[][];
}

export interface IconBarItem {
  icon: string;
}

export interface LabelBarItem<LT = string> {
  label: LT;
}

export type BarItem = IconBarItem | LabelBarItem;

type OverlayItemAdditional = ShortcutOverlayItem | ListOverlayItem;

export interface LabelOptions {
  text: string;
  icon?: string;
}

// TODO: add variants type for shortcuts and items(non-required fields)
export type BarItemOverlayList = LabelBarItem<LabelOptions | string> &
  OverlayItemAdditional & {
    id: number;
    // shortcut?: string[];
    disabled?: boolean;
    checked?: boolean;
    onClick?: () => void;
    // items?: BarItemOverlayList[][];
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
