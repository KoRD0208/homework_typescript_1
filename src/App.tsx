import React from "react";
import "./App.css";
import Search from "./components/Search/Search";
import UserList from "./components/UserList/UserList";
import { User } from "./types";
import { Skeleton } from "@mui/material";
import { Alert } from "@mui/material";

function App() {
  let [isLoaded, setLoad] = React.useState(false);
  let [items, setItems] = React.useState<User[]>([]);
  let [inputValue, setValue] = React.useState("");
  let [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();
        setItems(users);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
          console.log(error);
        }
      } finally {
        setLoad(true);
      }
    }
    fetchData();
  }, []);

  function updateInput(value: string) {
    setValue(value);
  }

  if (error) {
    return <Alert severity="error">Something went wrong.{error.message}</Alert>;
  } else {
    return (
      <div className="App">
        {!isLoaded ? (
          <Skeleton variant="text" animation="wave" width={200} height={56} />
        ) : (
          <Search value={inputValue} checkChange={updateInput} />
        )}
        <UserList users={items} inputValue={inputValue} />
      </div>
    );
  }
}

export default App;
