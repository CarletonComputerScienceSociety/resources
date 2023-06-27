import SidebarItem from "./SidebarItem"
import items from "./data/SidebarData.json"
import "./Sidebar.style.scss";

export default function Sidebar() {    
    return (                      
        <div className="sidebar">                                                        
          { items.map((item, index) => <SidebarItem key={index} item={item} />) }
        </div>
    )
}

