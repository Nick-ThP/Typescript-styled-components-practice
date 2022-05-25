import React, { createContext, useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const UserContext = createContext<string | null>(null)

const UserPage: React.FC = () => {

  const context = useContext(UserContext)

  return (
    <div className="div">
      {context}
    </div>
  )
}

const NewComponent: React.FC = () => {
  const context = useContext(UserContext)

  return (
    <div style={{background: 'red'}}>
      This is a new component
      <br />
      {context}
    </div>
  ) 
}

function App() {

  const [user, setUser] = useState('Initial value')

  const handleClick = () => {
    setUser('Hello from button, ' + new Date().toDateString())
  }

  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <header className="App-header">
          <h1>Hello from homepage</h1>
          <button onClick={handleClick}>Change value</button>
          <UserPage />
          <NewComponent />
        </header>
      </div>
    </UserContext.Provider>
  );
}

export default App;
