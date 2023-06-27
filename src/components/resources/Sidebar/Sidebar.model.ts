export interface SidebarItem {
  title: string;
  path?: string;
  icon?: string;
  children?: SidebarItem[];
}

export interface SidebarItemProps {
  item: SidebarItem;
}
