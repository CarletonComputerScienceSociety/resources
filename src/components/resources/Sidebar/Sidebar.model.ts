export interface SidebarItem {
  title: string;
  path?: string;
  children?: SidebarItem[];
}

export interface SidebarItemGroup {
  title: string;
  path?: string;
  icon?: string;
  color?: string;
  children?: SidebarItem[];
}

export interface SidebarItemProps {
  item: SidebarItem;
  depth: number;
  color: string;
}
