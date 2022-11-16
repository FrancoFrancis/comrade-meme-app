

import React from "react"
import memesData from "./memeData"

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        randomImage: "../meme-photos/kendrick.png",
        bottomText: ""
    });

    const [allMemes, setAllMemes] = React.useState(memesData.data.memes);
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
                ...prevMeme,
                [name]: value
        }))
    }


    let url

    function getMemeImage () {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        url = allMemes[randomNumber].url
        setMeme( prevMeme => ({
            ...prevMeme,
            randomImage: url
        })) 
    };

    return( 
        <div className="meme-body">
            
            <h4 className="tip"><i class="fa-sharp fa-solid fa-circle-exclamation"></i>Tip: Hey boss ( 👋😄 )! Type in joke on part of meme you would want it 
                to sit !👇
        
            </h4>
            <div className="form">
                <input
                className="form--input" 
                placeholder="top " 
                type="text"
                value={meme.topText}
                onChange={handleChange}
                name="topText"
                />
                <input 
                className="form--input" 
                placeholder="bottom" 
                type="text"
                value={meme.bottomText}
                onChange={handleChange}
                name="bottomText"
                /> 
                
                <button 
                onClick={getMemeImage} 
                className="form--button"
                >Get new meme
                </button>


                {/* <button 
                onClick={ResetJoke} 
                className="reset--button"
                >reset joke</button> */}
            </div>

            <div class="meme--image--container">
                <img  
                className="meme--image" 
                src={meme.randomImage} 
                /> 
                <h1 className="meme--text top">{meme.topText}</h1>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
                
            </div>

            
        </div>
    )
}


/*
// NOTE I am using a Local Data file to get my custom images, but we can also get 
random images from an API

// When using the effect hook to access an API we should initialize state
as an EMPTY ARRAY

// To use an API we are to use the use effect hook to access an API because any 
data outside of React is a side effect 

    React.useEffect(() => {
        fetch(//API link in here)
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
            
    }, [])

// NOTE on why the dependencies Array is left empty

// We are saving all the memes in state, so we would want the 
API request to happen as soon as the component loads, then access
a random image to display because all our images have been saved 
in state. Nothing is changing in state to enable us make another 
API request so since there are no dependencies for this effect
we leave an empty array.
*/ 
