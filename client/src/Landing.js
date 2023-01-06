import React from "react";
import Usersignup from "./Usersignup";

function Landing({toggleLoggedIn, setCurrentUser}) {


    return(
        <div>
            <Usersignup toggleLoggedIn={toggleLoggedIn} setCurrentUser = {setCurrentUser}/>
        <div className="bio-parent">
            <div className="app-bio">
                <h1 className="bio-header">
                    App Bio
                </h1>
                <p>
                {`Dungeons and Dragons (for Dummies) was born from the desire to break into the game, but not knowing where to start.
                Many users of this site will likely have the same conversation we had before developing this site. You want kickstart 
                your Dungeons and Dragons journey, you get really excited talking about it and coming up with a plan, only to realize 
                that there is quite a bit of work you need to do before rolling the dice for the first time. Sound familiar? Don't worry, 
                we've got you covered. Dungeons and Dragons (for Dummies) was made with that exact thought process in mind. A simple UI, 
                pre-built character templates, pre-built campaign templates for you aspiring Dungeon Masters, and some simple account 
                information to keep track of your things. Enjoy!`}
                </p>
            </div>
            <div className="app-instructions">
                <h1>
                    App Instructions
                </h1>
                <p>
                    {`This app is very simple. It's meant to take the leg work out of creating a character and imagining a decent campaign. 
                    So, do exactly that! The first step is signing up or logging in. You can use the sight without doing that, but you won't 
                    be able to save any of your progress without being signed in. Secondly, head over to the character generator and pick your 
                    character! Once you've selected your character, you can browse the list of campaigns and see which one fits your fantasy. 
                    If you're not sure on a campaign, check out its reviews! Other players have completed these before, so they can give you 
                    some insight on whether or not you'll enjoy your time on the adventure. Cheers!`}
                </p>
            </div>
        </div>
        </div>
    )
}

export default Landing