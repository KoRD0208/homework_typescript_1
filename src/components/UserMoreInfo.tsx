import React, { useEffect } from "react";
import { Typography, List, ListItem } from "@mui/material";
import { PostProps } from "../types";
import { useParams } from "react-router-dom";

function UserMoreInfo() {
  let params = useParams<string>();

  console.log(params);
  let [expandedInfo, setExpandedInfo] = React.useState<PostProps[]>([]);

  useEffect(() => {
    async function getAuthorInfo() {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await response.json();

      let posts = data.filter(
        (item: PostProps) => item.userId === Number(params.userId)
      );
      setExpandedInfo(posts);
    }
    getAuthorInfo();
  }, []);

  return (
    <>
      <List>
        {<h3>Posts:</h3>}
        {expandedInfo.map((post: PostProps) => {
          return (
            <ListItem sx={{ fontWeight: 900 }} key={post.id}>
              {post.title}
            </ListItem>
          );
        })}
      </List>
    </>
  );
}

export default UserMoreInfo;
