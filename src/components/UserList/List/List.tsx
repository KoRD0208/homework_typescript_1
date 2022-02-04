import React, { FC } from "react";
import classes from "./UserList.module.css";

interface ListProps {
  children: React.ReactNode;
}

const List = ({ children }: ListProps) => {
  return <div className={classes.UserList}>{children}</div>;
};

export default List;
