import "./Sidebar.style.scss";
import { useState } from "react";
import type { SidebarItemProps } from "./Sidebar.model";

export default function SidebarItem(props: SidebarItemProps) {
  const [open, setOpen] = useState<boolean>(false);

  return props.item.children ? (
    <div className={open ? "sidebar-item open" : "sidebar-item"}>
      <div className="sidebar-title">
        <span>{props.item.title}</span>
        <button className="menu-down" onClick={() => setOpen(!open)}>
          {open ? (
            <i className="fa fa-chevron-up"></i>
          ) : (
            <i className="fa fa-chevron-down"></i>
          )}
        </button>
      </div>
      <div className="sidebar-content">
        {props.item.children.map((child, index) => (
          <SidebarItem key={index} item={child} />
        ))}
      </div>
    </div>
  ) : (
    <a href={props.item.path || "#"} className="sidebar-item plain">
      {props.item.title}
    </a>
  );
}
