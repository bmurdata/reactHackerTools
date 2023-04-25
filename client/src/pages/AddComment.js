import React from 'react';
import './CreatePost.css'

import { supabase } from '../client'
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
console.log("About to run Comment")
const AddComment = ()=> {
    const {id}=useParams();
    const [comment, setComment] = useState({ Author: "", Content: "", commentfk:id})
    console.log("Running Comment")
    const createComment = async (event) => {
        event.preventDefault();
       await supabase
        .from('Comments')
        .insert({Content: comment.Content, Author: comment.Author, postfk:comment.commentfk})
        .select();
    
        window.location = "/";
    }
    const handleChange = (event) => {
        console.log(comment);
        const {name, value} = event.target;
        setComment( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }
    return (
        <div>
            <form >
            

                <label for="Author">Author</label><br />
                <input onChange={handleChange} value={comment.Author} type="text" id="Author" name="Author" /><br />
                <br/>
                <label for="Content">Content</label><br />
                <textarea rows="5" cols="50" onChange={handleChange} value={comment.Content} type="textarea" id="Content" name="Content" /><br />
                <br/>

               

                <br/>
                <input onClick={createComment} type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default AddComment