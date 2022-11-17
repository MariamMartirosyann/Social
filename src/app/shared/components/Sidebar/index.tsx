import {
  Divider,
  Grid,
  List,
  Toolbar,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemButton,
  Typography,
} from "@mui/material";
import { usersData } from "../../../pages/homePage/constants";
import { Link } from "react-router-dom";
import "./style.css";

const Sidebar = () => {
  return (
    <Grid container>
      Sidebar
      <Grid item xs={12}>
        <Divider />

        <List>
          {usersData?.map((user) => {
            return (
              <Link
                to={`/user/${user.id}`}
                key={user.id}
                className="decorationNon"
              >
                <ListItem className="listItem">
                  <ListItemButton>
                    <ListItemAvatar>
                      <Avatar src={user.src} sx={{ width: 40, height: 40 }} />
                    </ListItemAvatar>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div>
                        <ListItemText>
                          <Typography variant="h6">{user.name}</Typography>
                        </ListItemText>
                      </div>
                      <div>
                        {" "}
                        <ListItemText>{user.text}</ListItemText>
                      </div>
                    </div>
                  </ListItemButton>
                </ListItem>
              </Link>
            );
          })}
        </List>
      </Grid>
    </Grid>
  );
};

export default Sidebar;
