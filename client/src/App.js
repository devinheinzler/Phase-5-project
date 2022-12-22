import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login';
import Usersignup from './Usersignup';
import CharacterList from './Characterlist';
import ShowCharacter from './ShowCharacter';

const charactersUrl = "http://localhost:3000/characters"
const campaignsUrl = "http://localhost:3000/campaigns"

function App() {

  const [characters, setCharacters] = useState([])
  const [campaigns, setCampaigns] = useState([])
  const [loggedIn, setLoggedIn] = useState(localStorage.email_address ? true : false)

  const getCharacters = () => {
    fetch(charactersUrl)
    .then(res => res.json())
    .then(characterData => (setCharacters(characterData)))
  }

  const getCampaigns = () => {
    fetch(campaignsUrl)
    .then(res => res.json())
    .then(campaignData => (setCampaigns(campaignData)))
  }

  useEffect (() => {
    getCharacters()
    getCampaigns()
  }, [])

  function toggleLoggedIn() {
    loggedIn ? setLoggedIn(false) : setLoggedIn(true)
}

  return (
      <div className="App">
          <Login toggleLoggedIn={toggleLoggedIn} />
          <Usersignup/>
          <Routes>
            <Route exact path='/' element={<CharacterList characters={characters} />} />
            <Route path='/character/:id' element={<ShowCharacter/>}/>
          </Routes>
      </div>
  );
}

export default App;
