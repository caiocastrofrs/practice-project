import './App.css';
import Container from './components/Container/Container';
import Form from './components/Form/Form';
import UserCard from './components/UserCard/UserCard'
import React, { useState } from 'react';
import Alert from './components/Alert/Alert'

const MESSAGES = ['Please enter a valid name and age (non-empty values).','Please enter a valid age (> 0).'];

function App() {

  const [users, setUsers] = useState([]);
  const [alertStatus, setAlertStatus] = useState(false);
  const [message, setMessage] = useState('');

  let timer = 2500;

  const dataHandler = (user) => {
    if(!user.name || !user.age) {
      setMessage(MESSAGES[0]);
      setAlertStatus(!alertStatus);
      setTimeout(() => {setAlertStatus(false)}, timer);
    }
    else if(user.age <= 0) {
        setMessage(MESSAGES[1]);
        setAlertStatus(!alertStatus);
    }
    else {
        setUsers(prevUsers => [user, ...prevUsers])
    }
  }

  return (
    <div className="App">
      <Container>
        {alertStatus&& <Alert timer={timer} msg={message} />}
        <Form getData={dataHandler} />
        {users && users.map((user, index) => <UserCard key={index} name={user.name} age={user.age}/>)}
      </Container>
    </div>
  );
}

export default App
