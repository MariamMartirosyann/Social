import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Input from "../shared/components/Input";
import Sidebar from "../shared/components/Sidebar";

const MainLayout = () => {
  return (
    <Grid container m={2}>
      <Grid item lg={3}>
        <Sidebar />
      </Grid>
      <Grid item lg={9}>
        <Grid container style={{width:"100%"}}>
          <Grid item xs={10}>
          
            <Outlet />
          </Grid>
          <Grid item xs={9}>
            <Input />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainLayout;
