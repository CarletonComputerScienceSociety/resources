import "./Sidebar.style.scss";
import { useState } from "react";

export default function SidebarItem({item}){
    const [open, setOpen] = useState(true)    
    
    if(item.children){        
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title">
                    <span>                        
                        {item.title}    
                    </span> 
                    <i className="fa fa-search"></i>
                    <button className="menu-down" onClick={() => setOpen(!open)}>^</button>
                </div>
                <div className="sidebar-content">
                    { item.children.map((child, index) => <SidebarItem key={index} item={child} />) }
                </div>
            </div>
        )
    }else{
        return (
            <a href={item.path || "#"} className="sidebar-item plain">                
                {item.title}
            </a>
        )
    }    
}