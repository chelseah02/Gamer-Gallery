import React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './EditGamer.css'
import {supabase} from '../Client';

const EditGamer = (props) => {

    const [dataInput, setDataInput] = useState([{}]);
    const [gamer, setGamer] = useState([{
        title: "",
        speed: "",
        color: "",
    }]);
    const [gamerName, setGamerName] = useState("");
    const [gamerSpeed, setGamerSpeed] = useState("");
    const [gamerColor, setGamerColor] = useState("");

    // Read data from table
    useEffect(() => {
        // READ all games from table
        const fetchPosts = async () => {
            const {data} = await supabase
            .from('Gamers')
            .select()
            .order('created_at', {ascending: true});

            // set state of posts
            setDataInput(data);
        
        }
        fetchPosts();
    }, [props]);

    // Filter data to include only specific id
    const {id} = useParams();
    console.log({id});
    const post = dataInput.filter(item => item.id == id)[0];

    const handleName = (event) => {
        setGamerName(event.target.value);
    };
    const handleSpeed = (event) => {
        setGamerSpeed(event.target.value);
    };
    const handleColor = (event) => {
        setGamerColor(event.target.value);
    }
    const setRed = () => {
        setGamerColor("red");
    };
    const setBlue = () => {
        setGamerColor("blue");
    };
    const setGreen = () => {
        setGamerColor("green");
    };
    const handleUpdatedGamer = () => {
        console.log(gamerName);
        console.log(gamerSpeed);
        console.log(gamerColor);
        setGamer({title: gamerName, speed: gamerSpeed, color: gamerColor});
    }

    // Update existing character
    // UPDATE post
const updateCharacter = async (event) => {
    event.preventDefault();
    handleUpdatedGamer();
    if (gamer.title != null) {
        await supabase
        .from('Gamers')
        .update({ title: gamer.title, speed: gamer.speed,  color: gamer.color})
        .eq('id', id);

        window.location = "/";
    }
}

    // DELETE existing post
    // UPDATE post
    const deleteGamer = async (event) => {
        event.preventDefault();

        await supabase
        .from('Gamers')
        .delete()
        .eq('id', id); 

        window.location = "/";
    }

    return (
        <div>
            <h2> Crewmate Details </h2>
            {post != null ? 
            <>
            <div style={{backgroundColor: "silver"}}>
                <h3> Name: {post.title} </h3>
                <h3> Stats: </h3>
                <h4> Color: {post.color}</h4>
                <h4> Speed: {post.speed} </h4>
            </div>
            <p> Proceed below to edit your crewmate! </p>
            <form>
                <label for="title">Name</label> <br />
                <input type="text" id="title" name="title" onChange={handleName} /><br />
                <br/>

                <label for="speed">Speed in mph</label><br />
                <input type="text" id="speed" name="speed" onChange={handleSpeed} /><br />
                <br/>
                
                <p>Current Color: {post.color}</p><br />
                <label for="new-color">New Color</label><br />
                <input type="text" id="new-color" name="color" onChange={handleColor}/><br />
                <button id="new-color" style={{backgroundColor: "red"}} onClick={setRed}>Red</button>
                <button id="new-color" style={{backgroundColor: "blue"}} onClick={setBlue}>Blue</button>
                <button id="new-color" style={{backgroundColor: "green"}} onClick={setGreen}>Green</button>
                <br/>
                <input style={{backgroundColor: "indigo"}} type="submit" value="Update Gamer" onClick={updateCharacter}/>
                <button className="deleteButton" onClick={deleteGamer}>Delete Gamer</button>
            </form>
            </>
            : <h1></h1>}
        </div>
    )
}

export default EditGamer