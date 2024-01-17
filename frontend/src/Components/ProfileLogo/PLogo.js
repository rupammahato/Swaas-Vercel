import React,{useState,useEffect} from 'react'
import "./PLogo.css";
import Sidebar from '../SidebarProfile/Sidebar';

const PLogo = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    
    useEffect(() => {
      const handleScroll = () => {
          if (isSidebarOpen) {
              setIsSidebarOpen(false);
          }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, [isSidebarOpen]);

  
  return (
    <>
              <div className="profile-photo" onClick={toggleSidebar}></div>

<Sidebar isOpen={isSidebarOpen} />

    </>
    
  )
}

export default PLogo
