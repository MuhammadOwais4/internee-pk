import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const fetchData = () => {
    setLoading(true);
    axios.get('http://localhost:5000/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []); // Fetch data on initial component mount

  const handleAddUserClick = () => {
    if (userName && userEmail) {
      axios.post('http://localhost:5000/users', {
        name: userName,
        email: userEmail,
      })
      .then(response => {
        setUsers(prevUsers => [...prevUsers, response.data]);
        setUserName('');
        setUserEmail('');
      })
      .catch(error => console.error('Error adding user:', error));
    }
  };

  const handleRemoveUserClick = (userId) => {
    axios.delete(`http://localhost:5000/users/${userId}`)
      .then(() => {
        setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
      })
      .catch(error => console.error('Error deleting user:', error));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>User List</h2>
      <div>
        <label>
          Name:
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="text" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
        </label>
      </div>
      <button onClick={handleAddUserClick}>Add User</button>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong>
            <p>Email: {user.email}</p>
            <button onClick={() => handleRemoveUserClick(user.id)}>Remove</button>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
