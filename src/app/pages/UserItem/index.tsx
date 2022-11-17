import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import "./style.css";

const UserItem = () => {
  const { id } = useParams();
  return (
    <div className="user">
      <Grid container>
        <Grid item></Grid>
      </Grid>
      UserItem {id}
    </div>
  );
};

export default UserItem;
