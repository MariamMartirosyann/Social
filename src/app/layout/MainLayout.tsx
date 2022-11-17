import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Input from "../shared/components/Input";
import Sidebar from "../shared/components/Sidebar";

const MainLayout = () => {
  return (
    <Grid container m={7}>
      <Grid item lg={3}>
        <Sidebar />
      </Grid>
      <Grid item style={{ display: "flex", flexDirection: "row" }} >
        <div>
          <Outlet />
        </div>
        <div style={{width:"100%"}}>
          <Input />
        </div>
      </Grid>
    </Grid>
  );
};

export default MainLayout;
