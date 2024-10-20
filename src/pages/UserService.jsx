import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000/users';

const UserService = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [editUserId, setEditUserId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');

  // Fetch all users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  // Function to fetch all users
  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Function to create a new user
  const createUser = async () => {
    try {
      await axios.post(API_URL, { name, email });
      setName('');
      setEmail('');
      fetchUsers();
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  // Function to update an existing user
  const updateUser = async () => {
    try {
      await axios.put(`${API_URL}/${editUserId}`, { name: editName, email: editEmail });
      setEditUserId(null);
      setEditName('');
      setEditEmail('');
      fetchUsers();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  // Function to delete a user
  const deleteUser = async (userId) => {
    try {
      await axios.delete(`${API_URL}/${userId}`);
      fetchUsers(); 
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h1>User Management</h1>

      {/* Create new user */}
      <h2>Create User</h2>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={createUser}>Create User</button>
      </div>

      {/* List of users */}
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>   
            {user.id} --- {user.name} --- {user.email}
            <button onClick={() => {
              setEditUserId(user.id);
              setEditName(user.name);
              setEditEmail(user.email);
            }}>
              Edit
            </button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Edit existing user */}
      {editUserId && (
        <div>
          <h2>Edit User</h2>
          <input
            type="text"
            placeholder="Name"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={editEmail}
            onChange={(e) => setEditEmail(e.target.value)}
          />
          <button onClick={updateUser}>Update User</button>
          <button onClick={() => setEditUserId(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default UserService;
