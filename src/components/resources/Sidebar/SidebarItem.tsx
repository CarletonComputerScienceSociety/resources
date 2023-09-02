import "./Sidebar.style.scss";
import { useState, useEffect } from "react";
import { CircleIcon } from "../../core";
import type { SidebarItem, SidebarItemProps } from "./Sidebar.model";

interface RecursiveSidebarItemProps extends SidebarItemProps {
  children?: RecursiveSidebarItemProps[];
}

export default function SidebarItem(props: SidebarItemProps) {
  const [open, setOpen] = useState<boolean>(false);

  const checkActivePath = (item: RecursiveSidebarItemProps) => {
    if (props.item.path && window.location.pathname.includes(props.item.path)) {
      setOpen(true);
    } else if (item.children) {
      for (const childItem of item.children) {
        checkActivePath(childItem);
      }
    }
  };

  useEffect(() => {
    checkActivePath(props.item);
  }, [props.item]);

  return (
    <>
      <div
        className={`sidebar-item ${open && "open"} ${props.color}-item-hover`}
      >
        <div className="sidebar-title">
          {/* for group headings, display an icons and special style */}
          {props.depth === 0 ? (
            <a href={props.item.path || "#"} className="sidebar-item plain">
              <div className="sidebar-title-container">
                <CircleIcon
                  icon={props.item.icon || ""}
                  size="size-small"
                  colorSet={`${props.item.color || ""}-card`}
                />
                <span>{props.item.title}</span>
              </div>
            </a>
          ) : null}

          {/* for items at depth === 1, they should display inline with group headings */}
          {props.depth !== 0 ? (
            <a href={props.item.path || "#"} className="sidebar-item plain">
              <div className="sidebar-title-container">
                <div className={`sidebar-depth-${props.depth}`} />
                <span className="sidebar-sub-item">{props.item.title}</span>
              </div>
            </a>
          ) : null}

          {/* if you have children, display a dropdown arrow */}
          {props.item.children ? (
            <button className="menu-down" onClick={() => setOpen(!open)}>
              <i className={`fa fa-chevron-${open ? "up" : "down"}`} />
            </button>
          ) : null}
        </div>
      </div>

      {/* if you have children, display children */}
      {props.item.children ? (
        <div className={`sidebar-content ${open ? "open" : null}`}>
          {props.item.children.map((child, index) => (
            <SidebarItem
              key={index}
              item={child}
              depth={props.depth + 1}
              color={props.color}
            />
          ))}
        </div>
      ) : null}
    </>
  );
}
