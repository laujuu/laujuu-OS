type Type = 'folder' | 'file' | 'contact'

export interface MenuItemProps {
    name: string;
    type: Type;
    path?: string;
  }