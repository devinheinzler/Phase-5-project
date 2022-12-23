import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login';
import Usersignup from './Usersignup';
import CharacterList from './Characterlist';
import ShowCharacter from './ShowCharacter';
import CampaignList from './Campaignlist';
import ShowCampaign from './ShowCampaign';
import Navbar from './Navbar';
import Reviewlist from './Reviewlist';
import ShowReviews from './ShowReviews';
import Landing from './Landing';

const charactersUrl = "http://localhost:3000/characters"
const campaignsUrl = "http://localhost:3000/campaigns"
const reviewsUrl = "http://localhost:3000/reviews"

function App() {

  const [currentUser, setCurrentUser] = useState()
  const [characters, setCharacters] = useState([])
  const [campaigns, setCampaigns] = useState([])
  const [reviews, setReviews] = useState({})
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

  const getReviews = () => {
    fetch(reviewsUrl)
    .then(res => res.json())
    .then(reviewsData => (setReviews(reviewsData)))
  }

  useEffect (() => {
    getCharacters()
    getCampaigns()
    getReviews()
  }, [])

  function toggleLoggedIn() {
    loggedIn ? setLoggedIn(false) : setLoggedIn(true)
}

  return (
      <div className="App">
          <Login toggleLoggedIn={toggleLoggedIn} setCurrentUser = {setCurrentUser} />
          {loggedIn ?
            <></>
            :
            <Usersignup toggleLoggedIn={toggleLoggedIn} setCurrentUser = {setCurrentUser}/>
          }
          <Navbar/>
          <Routes>
            <Route exact path='/characters' element={<CharacterList characters={characters} />} />
            <Route path='/character/:id' element={<ShowCharacter/>}/>
            <Route exact path='/campaigns' element={<CampaignList campaigns={campaigns} />} />
            <Route path='/campaign/:id' element={<ShowCampaign/>}/>
            <Route exact path='/reviews' element={<Reviewlist reviews={reviews} />} />
            <Route path='/review/:id' element={<ShowReviews/>} />
            <Route path='/Landing' element={<Landing/>}/>
          </Routes>
      </div>
  );
}

export default App;
