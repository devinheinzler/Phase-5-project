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
import Reviewform from './Reviewform';
import MyCharacter from './MyCharacter';
import MyCampaign from './MyCampaign';
import { UserProivder } from './Context/UserContext';

const charactersUrl = "http://localhost:3000/characters"
const campaignsUrl = "http://localhost:3000/campaigns"
const reviewsUrl = "http://localhost:3000/reviews"

function App() {

  const [selectedCampaign, setSelectedCampaign] = useState()
  const [currentUser, setCurrentUser] = useState()
  const [characters, setCharacters] = useState([])
  const [campaigns, setCampaigns] = useState([])
  // const [reviews, setReviews] = useState({})
  const [loggedIn, setLoggedIn] = useState(localStorage.user ? true : false)
console.log(currentUser)
  
  const campaignReview = (campaign_id, campaign_title) => {
    setSelectedCampaign({
      user: currentUser.id,
      campaign_title: campaign_title,
      campaign_id: campaign_id
    })
  }
  const getCharacters = () => {
    fetch(charactersUrl)
    .then(res => res.json())
    .then(characterData => (setCharacters(characterData)))
  }
  // console.log(characters)

  const getCampaigns = () => {
    fetch(campaignsUrl)
    .then(res => res.json())
    .then(campaignData => (setCampaigns(campaignData)))
  }

  // const getReviews = () => {
  //   fetch(reviewsUrl)
  //   .then(res => res.json())
  //   .then(reviewsData => (setReviews(reviewsData)))
  // }

  useEffect (() => {
    getCharacters()
    getCampaigns()
    // getReviews()
  }, [])

  function toggleLoggedIn() {
    loggedIn ? setLoggedIn(false) : setLoggedIn(true)
}

  return (
    <UserProivder>
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
            <Route path='/character/:id' element={<ShowCharacter currentUser={currentUser}/>}/>
            <Route exact path='/campaigns' element={<CampaignList campaigns={campaigns} campaignReview={campaignReview} />} />
            <Route path='/campaign/:id' element={<ShowCampaign/>}/>
            <Route exact path='/reviews' element={<Reviewlist/>} />
            <Route path='/review/:id' element={<ShowReviews/>} />
            <Route path='/Landing' element={<Landing/>} toggleLoggedIn={toggleLoggedIn} setCurrentUser = {setCurrentUser}/>
            <Route path='/Reviewform' element={<Reviewform selectedCampaign={selectedCampaign}/>}/>
            <Route path='/MyCharacter' element={<MyCharacter currentUser={currentUser} />}/>
            <Route path='/MyCampaign' element={<MyCampaign currentUser={currentUser} />}/>
          </Routes>
      </div>
    </UserProivder>
  );
}

export default App;
