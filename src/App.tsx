import React, { createContext, useContext, useState } from 'react';
import './App.css';

const UserContext = createContext<string | null>(null)
const UserUserContext = createContext<string | null>(null)

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

const NewNewComponent: React.FC = () => {
  const context = useContext(UserUserContext)

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
  const [userUser, setUserUser] = useState('')

  const handleClick = () => {
    setUser('Hello from button, ' + new Date().toDateString())
  }

  const handleeClick = () => {
    setUserUser('Hello as well')
  }

  return (
    <>
      <UserContext.Provider value={user}>
        <div className="App">
          <header className="App-header">
            <h1>Hello from homepage</h1>
            <input></input>
            <button onClick={handleClick}>Change value</button>
            <button onClick={handleeClick}>Change value</button>
            <UserPage />
            <NewComponent />
          </header>
        </div>
      </UserContext.Provider>
      <div className="div">
        <UserUserContext.Provider value={userUser}>
            <NewNewComponent />
        </UserUserContext.Provider>
      </div>
    </>
  );
}

export default App;
