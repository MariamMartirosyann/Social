import { Avatar, Grid, ListItemAvatar, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Input from "../../shared/components/Input";
import { usersData } from "../homePage/constants";
import { userTexts } from "../homePage/constants";
import SearchIcon from "@mui/icons-material/Search";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import Triangle from "../../assests/images/triangle.svg";
import "./style.css";

const UserItem = () => {
  const { id } = useParams();
  const user = usersData.find((user) => user.id === Number(id));
  console.log(user, "user");

  return (
    <div className="user">
      <Grid container className="userTop" spacing={0}>
        <Grid item style={{ width: "60px" }}>
          <Avatar src={user?.src} sx={{ width: 45, height: 45 }} />
        </Grid>
        <Grid item xs={8}>
          <div className="name">
            {user?.id}, {user?.name}
          </div>
          <div className="lastSeen">last seen recently</div>
        </Grid>
        <div className="iconsDiv">
          <span className="icon">
            <SearchIcon />
          </span>
          <span className="icon">
            <CallOutlinedIcon />
          </span>
          <span className="icon">
            <MoreVertOutlinedIcon />
          </span>
        </div>
      </Grid>
      <Grid container className="conversation">
        {userTexts.map((text) => {
          return (
            <>
              <Grid container my={3} mx={25}>
                <Grid item className="userAnswer" key={text.id}>
                  <span className="tail">
                    <img src={Triangle} alt="triangle" />
                  </span>
                  {text?.text} <span className="timeSpan">{text.time}</span>
                </Grid>
              </Grid>
              <Grid container className="myAnswer" key={text.id} mx={90}>
                <span className="myAnswerSpan">{text?.myAnswer}</span>
                <span className="myTimeSpan">{text?.myAnswertime}</span>

                <span className="tailMyAnswer">
                  <img src={Triangle} alt="triangle" />
                </span>
              </Grid>
            </>
          );
        })}
      </Grid>
      UserItem {id}
      <Input />
    </div>
  );
};

export default UserItem;
