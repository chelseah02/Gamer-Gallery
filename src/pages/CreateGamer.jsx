import React, { useState } from 'react';
import './CreateGamer.css'
import { supabase } from '../Client';

const CreateGamer = () => {
    const [gamer, setGamer] = useState([{
        title: "",
        speed: "",
        color: "",
    }]);
    const [gamerName, setGamerName] = useState("");
    const [gamerSpeed, setGamerSpeed] = useState("");
    const [gamerColor, setGamerColor] = useState("");
    const handleName = (event) => {
        setGamerName(event.target.value);
    };
    const handleSpeed = (event) => {
        setGamerSpeed(event.target.value);
    };
    const setRed = () => {
        setGamerColor("red");
    }
    const setBlue = () => {
        setGamerColor("blue");
    }
    const setGreen = () => {
        setGamerColor("green");
    }
    const handleNewGamer = () => {
        console.log(gamerName);
        console.log(gamerSpeed);
        console.log(gamerColor);
        setGamer({title: gamerName, speed: gamerSpeed, color: gamerColor});
    }
    console.log(gamer);
    const createCharacter = async (event) => {
        event.preventDefault();
        
        handleNewGamer();
        if (gamer.title != null) {
        await supabase
         .from('Gamers')
         .insert({title: gamer.title, speed: gamer.speed, color: gamer.color})
         .select();
     
         window.location = "/";
        }
    }
    return (
        <div>
            <form onSubmit={createCharacter}>
                <label for="title">Name</label> <br />
                <input type="text" id="title" name="title" onChange={handleName} /><br />
                <br/>

                <label for="speed">Speed in mph</label><br />
                <input type="text" id="speed" name="speed" onChange={handleSpeed} /><br />
                <br/>

                <label for="color">Color</label><br />
                <input type="text" id="color" name="color" /><br />
                <button id="color" onClick={setRed}>Red</button>
                <button id="color" onClick={setBlue}>Blue</button>
                <button id="color" onClick={setGreen}>Green</button>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default CreateGamer