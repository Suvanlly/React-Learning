import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';



function App() {
  const [usersList, setUsersList] = useState([]);

  const addUsersHandler = (userName, userAge) => {
    // userName and userAge get from AddUser.js
    setUsersList((prevUserList) => {
      return [...prevUserList, {name: userName, age: userAge, id: Math.random().toString()}]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUsersHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
