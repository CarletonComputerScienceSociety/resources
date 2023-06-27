import "./Sidebar.style.scss";
import { useState } from "react";

export default function SidebarItem({ item }) {
  const [open, setOpen] = useState(false);

  if (item.children) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title">
          <span>{item.title}</span>
          <button className="menu-down" onClick={() => setOpen(!open)}>
            {open ? (
              <i className="fa fa-chevron-up"></i>
            ) : (
              <i className="fa fa-chevron-down"></i>
            )}
          </button>
        </div>
        <div className="sidebar-content">
          {item.children.map((child, index) => (
            <SidebarItem key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <a href={item.path || "#"} className="sidebar-item plain">
        {item.title}
      </a>
    );
  }
}
