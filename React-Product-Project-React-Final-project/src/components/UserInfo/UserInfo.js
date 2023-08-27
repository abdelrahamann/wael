import React, { useState } from 'react';
import './UserInfo.css'

const UserInfoComponent = () => {
  const userData = JSON.parse(localStorage.getItem('registrationData'));

  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleUsernameChange = () => {
    if (newUsername) {
      setNewUsername('');
      alert('Username changed successfully!');
    }
  };

  const handlePasswordChange = () => {
    if (newPassword) {
      setNewPassword('');
      alert('Password changed successfully!');
    }
  };

  return (
    <div className="container-data">
      <h1>Your Information</h1>
      <br></br>
      {userData ? (
        <div>
          <div className="user-email">
            <strong>Email:</strong> {userData.email}
          </div>
          <br></br>
          <div className="user-name">
            <strong>Username:</strong> {userData.username}
          </div>
          <br></br>
          <div className="user-change">
            <h3>Change Username</h3>
            <input
              type="text"
              placeholder="Enter new username"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}/>
            <button className="btn" onClick={handleUsernameChange}>Change Username</button>
          </div>
          <br></br>
          <div className="user-change">
            <h3>Change Password</h3>
            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}/>
            <button className="btn" onClick={handlePasswordChange}>Change Password</button>
          </div>
          <br></br>
        </div>
      ) : (
        <div>There is No Data</div>
      )}
    </div>
  );
};

export default UserInfoComponent;
