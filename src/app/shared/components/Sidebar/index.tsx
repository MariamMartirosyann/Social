import { Grid, List, Avatar, Typography } from "@mui/material";
import { usersData } from "../../../pages/homePage/constants";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import "./style.css";

const Sidebar = () => {
  return (
    <Grid container className="sidebar" >
      <div className="sideBarTop">
        <div className="menu">
          <MenuIcon />
        </div>
        <div className="search">
          <SearchIcon />
          <Typography mx={2}>Search </Typography>
        </div>
      </div>

      <Grid item xs={12}>
        <List>
          {usersData?.map((user) => {
            return (
              <Link
                to={`/user/${user.id}`}
                key={user.id}
                className="decorationNon"
              >
                <div className="listItem">
                  <div>
                    <Avatar src={user.src} className="avatarDiv" />
                  </div>
                  <div className="textDiv">
                    <Typography variant="h6">{user.name}</Typography>
                    <Typography >{user.text}</Typography>
                  </div>
                </div>
              </Link>
            );
          })}
        </List>
      </Grid>
    </Grid>
  );
};

export default Sidebar;
