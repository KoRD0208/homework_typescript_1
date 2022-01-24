import React from "react";
import { UserInfoProps } from "../../types";
import { PostProps } from "../../types";
import { Card, CardContent, List } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { ListItem } from "@mui/material";

function UserInfo({ userProps }: UserInfoProps) {
  let [amount, setAmount] = React.useState<string>("");
  let [addictionInfo, setAddictionInfo] = React.useState<PostProps[]>([]);

  async function getAuthorInfo(userId: number) {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();

    let posts = data.filter((item: PostProps) => item.userId === userId);
    let amountOfPosts = data.reduce((acc: any, item: PostProps) => {
      if (!acc[item.userId]) {
        acc[item.userId] = 1;
      } else {
        acc[item.userId] += 1;
      }
      return acc;
    }, {});
    setAmount("Amount of posts: " + Object.values(amountOfPosts)[userId - 1]);
    setAddictionInfo(posts);
  }

  function hide() {
    setAmount("");
    setAddictionInfo([]);
  }

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
          onClick={() => {
            getAuthorInfo(userProps.id);
          }}
        >
          Get author Info
        </Button>
        <Typography>{amount}</Typography>
        <List>
          {addictionInfo.length > 0 ? <h3>Posts:</h3> : null}
          {addictionInfo.map((post) => {
            return (
              <ListItem sx={{ fontWeight: 900 }} key={post.id}>
                {post.title}
              </ListItem>
            );
          })}
          {addictionInfo.length > 0 ? (
            <Button onClick={hide}>Hide</Button>
          ) : null}
        </List>
      </CardContent>
    </Card>
  );
}

export default UserInfo;
