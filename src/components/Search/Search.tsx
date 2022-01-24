import React from "react";
import { SearchProps } from "../../types";
import TextField from "@mui/material/TextField";

function Search({ value, checkChange }: SearchProps) {
  function handleChange(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void {
    checkChange(e.target.value);
    console.log(value);
  }

  return (
    <TextField
      type="text"
      label="Enter a name:"
      value={value}
      name="search"
      onChange={(e) => handleChange(e)}
      className="search"
      placeholder="Name"
      margin={"normal"}
    />
  );
}

export default Search;
