import React, { FC } from "react";
import classes from "./UserList.module.css";

const List: FC = ({ children }) => {
  return <div className={classes.UserList}>{children}</div>;
};

export default List;
