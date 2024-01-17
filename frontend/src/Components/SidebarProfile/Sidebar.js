import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <div className={`sidebarProfile ${isOpen ? 'open' : ''}`}>

            <p>Sidebar Content</p>
            <div className="close-icon" onClick={toggleSidebar}>✕</div>
        </div>
    );
};

export default Sidebar;
