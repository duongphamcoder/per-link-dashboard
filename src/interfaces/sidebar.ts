import { ReactNode } from 'react';

export interface ISidebar {
  title?: string;
  items: {
    activeIcon?: ReactNode;
    text?: string;
    defaultIcon?: ReactNode;
    path?: string;
  }[];
}
