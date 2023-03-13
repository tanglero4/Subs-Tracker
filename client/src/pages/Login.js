import React from 'react';

const LoginPage = () => {
  return (
    <div>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f1f1f1', width: '100%', padding: '1em' }}>
        <h1>SubsTracker</h1>
        <button style={{ padding: '0.5em', backgroundColor: 'red', color: 'white', border: 'none', cursor: 'pointer' }}>Logout</button>
      </header>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2em' }}>
        <h2>Login</h2>
        <input type="text" placeholder="Username" style={{ padding: '0.5em', margin: '0.5em', borderRadius: '5px', border: '1px solid #ccc' }} />
        <input type="password" placeholder="Password" style={{ padding: '0.5em', margin: '0.5em', borderRadius: '5px', border: '1px solid #ccc' }} />
        <button type="submit" style={{ padding: '0.5em', margin: '0.5em', borderRadius: '5px', border: 'none', backgroundColor: '#4caf50', color: 'white', cursor: 'pointer' }}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
