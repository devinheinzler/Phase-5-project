import {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const characterUrl = "http://localhost:3000/characters"

function ShowCharacter({currentUser}) {
    const {id} = useParams()
    const [character, setCharacter] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`${characterUrl}/${id}`)
        .then(res => res.json())
        .then(characterDetails => setCharacter(characterDetails))
    }, [])
// console.log(character)
function handleClick(){
    
    fetch(`http://localhost:3000//user/${currentUser.id}/user_characters`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        character_id: character.id,
        user_id: currentUser.id
        })})
        .then(res => {
    if(res.ok) {
        res.json().then( navigate('/MyCharacter'))
        }
        else {
            res.json().then(res => console.log(res))
        }})}

    return(
        character ?
        <div>
            <div className='race-class-title'>
                <header>
                    {character.race_name} <br/>
                    {character.class_name}
                </header>
                <img src={character.class_image}/>
            </div>
            <div className='character-background'>
                <h1>Background</h1><br/>
                <h2>{character.character_alignment}</h2>
                <p>{character.character_background}</p>
            </div>
            <div className='race-traits'>
                <h1>{character.race_name} Traits</h1>
                <p>{character.race_trait_name}</p>
            </div>
            <div className='character-proficiencies'>
                <h1>Proficiencies</h1>
                <p>{character.race_proficiencies}</p>
            </div>
            <div className='class-features'>
                <h1>{character.class_name} Features</h1>
                <p>{character.subclass_feature}</p>
                <button onClick={() => handleClick()}>Add to My Characters</button>
            </div>
        </div>
        :
        <p>Loading...</p>
    )
}

export default ShowCharacter