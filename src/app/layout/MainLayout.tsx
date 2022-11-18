import { Outlet } from "react-router-dom";
import Sidebar from "../shared/components/Sidebar";

const MainLayout = () => {
  return (
    <div style={{display:'flex', flexDirection:"row"}}>
      <div style={{width:"20%"}}>
        <Sidebar />
      </div>
      <div style={{width:"80%"}}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
