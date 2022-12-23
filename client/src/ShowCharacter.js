import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const characterUrl = "http://localhost:3000/characters"

function ShowCharacter() {
    const {id} = useParams()
    const [character, setCharacter] = useState(null)

    useEffect(() => {
        fetch(`${characterUrl}/${id}`)
        .then(res => res.json())
        .then(characterDetails => setCharacter(characterDetails))
    }, [])

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
                <button>Add to My Characters</button>
            </div>
        </div>
        :
        <p>Loading...</p>
    )
}

export default ShowCharacter