import SidebarItem from "./SidebarItem";
import items from "./data/SidebarData.json";
import "./Sidebar.style.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <a href="/">
          <img src="/images/ccss-logo-2022.png" alt="logo" />
        </a>
      </div>
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
}
