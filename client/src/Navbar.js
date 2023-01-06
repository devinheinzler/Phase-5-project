import {NavLink} from 'react-router-dom'


function Navbar() {
    return(
        <div>
            <div className='header-div'>
                <h1>
                    Dungeons and Dragons
                </h1><br/>
                <h2>{`for Dummies`}</h2>
            </div>
            <div className='navbar-div'>
                <ul>
                <NavLink to={`/Landing`}>
                        <button>About</button>
                    </NavLink>
                    <NavLink to={`/characters`}>
                        <button>Character Selector</button>
                    </NavLink>
                    <NavLink to={`/campaigns`}>
                        <button>Campaign Selector</button>
                    </NavLink>
                    <NavLink to={`/reviews`}>
                        <button>Reviews</button>
                    </NavLink>
                    <NavLink to={`/Database`}>
                        <button>Database</button>
                    </NavLink>
                    {localStorage.email_address ?
                    <>
                    
                        <NavLink to={`/MyCharacter`}>
                            <button>My Characters</button>
                        </NavLink>
                        <NavLink to={`/MyCampaign`}>
                            <button>My Campaigns</button>
                        </NavLink>
                        </>
                    :null}
                </ul>
            </div>
        </div>
    )
}

export default Navbar