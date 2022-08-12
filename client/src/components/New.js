import { useState } from "react";
import {Navigate, useNavigate} from 'react-router-dom'

import axios from 'axios'

function removeSpaces(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].trim()
    }
    return arr
}

export default function New() {
    const [name, setName] = useState("")
    const [list, setList] = useState("")
    let games = null
    const navigate = useNavigate()

    let handleSubmit = async(e) => {
        e.preventDefault();
        
        console.log(name, list)
        if(list){
            let temp = list.split(',')                              //splits string into array based on ','
            removeSpaces(temp)                                      //Cleans array of leading or trailing whitespace
            console.log("TEMP: ", temp)
            games = temp                               
            if(games){                                              //checks if games state exists
                axios.post('/new', {name, games})                   //sends data to playlist_controller.js in server to be saved to database
                    .then(r => {                                    //gets back response from server
                        console.log("REPONSE: ", r.data)
                        alert("Playlist Saved Successfully!")
                        setName("")
                        setList("")
                        games = null
                        navigate('/')                              //Redirects back to home page
                    })    
                    .catch(e => {
                        console.log(e)                          //catches errors
                        alert("Something went wrong!")
                    })                     
            }
        }
    } 
//     try{
//         /*
//         let res= await fetch("/new", {
//             method: "POST",
//             body: JSON.stringify({
//                 name: name,
//                 list: list
//             })
//         })
//         */
//         let resJson= await res.json();
//         if (res.status === 200) {
//           setName("");
//           setList();
//     } 
// } catch(err) {
//         console.log(err);
//     };
     
    return(
        <div>
            <main>
                <h1>Create a New PLAY-list</h1>
                <form onSubmit={handleSubmit}  >
                    <div className="form-group">
                        <label htmlFor="name">Playlist Name</label>
                        <input className="form-control" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="playgamesItem">Add Games in a Comma Separated List</label>
                        <input 
                            className="form-control" 
                            id="list" 
                            name="list" 
                            value={list} //
                            onChange={(e) => setList(e.target.value)}
                        />
                    </div>
                    <input type="submit" />
                </form>
            </main>
        </div>
    )
}


