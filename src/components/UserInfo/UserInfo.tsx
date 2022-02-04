import React, { useEffect } from "react";
import { UserInfoProps } from "../../types";
import { PostProps } from "../../types";
import { Card, CardContent, List } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { ListItem } from "@mui/material";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Link,
  Outlet,
} from "react-router-dom";

function UserInfo({ userProps }: UserInfoProps) {
  // let [amount, setAmount] = React.useState<string>("");
  // let [expandedInfo, setExpandedInfo] = React.useState<PostProps[]>([]);

  // useEffect(() => {
  //   async function getAuthorInfo() {
  //     let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     let data = await response.json();

  //     // let posts = data.filter((item: PostProps) => item.userId);
  //     // let amountOfPosts = data.reduce((acc: any, item: PostProps) => {
  //     //   if (!acc[item.userId]) {
  //     //     acc[item.userId] = 1;
  //     //   } else {
  //     //     acc[item.userId] += 1;
  //     //   }
  //     //   return acc;
  //     // }, {});
  //     setExpandedInfo(data);
  //     console.log();
  //   }

  //   getAuthorInfo();
  // }, []);

  // function hide() {
  //   // setAmount("");
  //   setExpandedInfo([]);
  // }

  return (
    <Card
      sx={{
        margin: 2,
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {userProps.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Username: <br />
          {userProps.username}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          E-mail: <br />
          {userProps.email}
        </Typography>
        <Button
        // onClick={() => {
        //   getAuthorInfo(userProps.id);
        // }}
        >
          {/* <Outlet> */}
          <Link to={`/${userProps.id}`} key={userProps.id}>
            Get author Info
          </Link>
          <Outlet />
        </Button>
      </CardContent>
    </Card>
  );
}

export default UserInfo;
