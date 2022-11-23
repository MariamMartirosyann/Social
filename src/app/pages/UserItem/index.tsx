import { Avatar, Grid } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Input from "../../shared/components/Input";
import { usersData } from "../homePage/constants";
import { userTexts } from "../homePage/constants";
import SearchIcon from "@mui/icons-material/Search";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import Triangle from "../../assests/images/triangle.svg";
import "./style.css";
import { useSelector } from "react-redux";
import { selectMyAnswer } from "../../store/myAnswer";
import { Fragment, useEffect, useRef } from "react";

const UserItem = () => {
  const { id } = useParams();
  const ref = useRef<any>(null);
  const user = usersData.find((user) => user.id === Number(id));
  const myAnswerList = useSelector(selectMyAnswer);



  useEffect(()=>{
    ref.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  },[myAnswerList])
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
      <Grid container className="conversation" id="box">
        {userTexts.map((text) => {
          return (
            <Fragment key={text.id}>
              <Grid container my={3} mx={25}>
                <Grid item className="userAnswer">
                  <span className="tail">
                    <img src={Triangle} alt="triangle" />
                  </span>
                  {text?.text} <span className="timeSpan">{text.time}</span>
                </Grid>
              </Grid>
              <Grid container className="myAnswer" mx={90}>
                <span className="myAnswerSpan">{text?.myAnswer}</span>
                <span className="myTimeSpan">{text?.myAnswertime}</span>

                <span className="tailMyAnswer">
                  <img src={Triangle} alt="triangle" />
                </span>
              </Grid>
            </Fragment>
          );
        })}
        {myAnswerList.map((myAnswer) => {
          return (
            <Grid
              container
              className="myAnswer"
              key={myAnswer.id}
              my={3}
              mx={90}
            >
              <span className="myAnswerSpan">{myAnswer?.myAnswer}</span>
              <span className="myTimeSpan">14.14</span>

              <span className="tailMyAnswer">
                <img src={Triangle} alt="triangle" />
              </span>
            </Grid>
          );
        })}

        <Grid container ref={ref}>
          end
        </Grid>
      </Grid>
      UserItem {id}
      <Input  />
    </div>
  );
};

export default UserItem;
