import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import './ReadGamer.css';
import {supabase} from '../Client';

const ReadGamer = (props) => {

    const [gamers, setGamers] = useState([]);

    useEffect(() => {
        // READ all games from table
        const fetchPosts = async () => {
            const {data} = await supabase
            .from('Gamers')
            .select()
            .order('created_at', {ascending: true});

            // set state of posts
            setGamers(data)
        
        }
        fetchPosts();
    }, [props]);
    console.log(gamers);
    console.log("In Read Gamer!");
    return (
        <div className="ReadGamers">
            {
                gamers && gamers.length > 0 ?
                gamers.map((gamer,index) => 
                   <Card id={gamer.id} title={gamer.title} speed={gamer.speed} color={gamer.color}/>
                ) : <h2>{'No Gamers Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadGamer;