import React from 'react';
import './App.css';
import Search from './components/Search';
import UserList from './components/UserList';
import { User } from "./interfaces/types";


function App() {
  let [isLoaded, setLoad] = React.useState(false)
  let [items, setItems] = React.useState<User[]>([])
  let [inputValue, setValue] = React.useState('');
  let [error, setError] = React.useState<any>(null);

  React.useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        setItems(users);
      } catch (err) {
        setError(err);
      } finally {
        setLoad(true);
      }
    }
    fetchData()

  }, [])

  function updateInput(value: string) {
    setValue(value);
  }

  if (error) {
    return (
      <div className="error-message">
        Something went wrong.{error.message}
      </div>
    )
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return <div className="App">
      <Search value={inputValue} checkChange={updateInput} />
      <UserList users={items} inputValue={inputValue} />
    </div>
  }
}

export default App;
