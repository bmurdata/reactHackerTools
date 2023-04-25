import React from 'react';
import './CreatePost.css'

import { supabase } from '../client'
import { useEffect,useState } from 'react';

console.log("About to run Post")
const CreatePost = ()=> {
    const [post, setPost] = useState({Title: "", Author: "", Content: "", Upvotes:"", color:""})
    console.log("Running Post")
    const createPost = async (event) => {
        event.preventDefault();
       await supabase
        .from('Posts')
        .insert({Title: post.Title, Author: post.Author, Content: post.Content, Upvotes:"0",color:post.color})
        .select();
    
        window.location = "/";
    }
    const handleChange = (event) => {
        console.log(post);
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }
    return (
        <div>
            <form >
                <label for="Title">Title</label> <br />
                <input onChange={handleChange} value={post.Title} type="text" id="Title" name="Title" /><br />
                <br/>

                <label for="Author">Author</label><br />
                <input onChange={handleChange} value={post.Author} type="text" id="Author" name="Author" /><br />
                <br/>
                <label for="Content">Content</label><br />
                <input onChange={handleChange} value={post.Content} type="textarea" id="Content" name="Content" /><br />
                <br/>

                <label for="description">Color Category: <span style={{ color: post.color }}>{post.color}</span></label><br />
                

<input onChange={handleChange} type="radio" name="color" id="red" value="red" />
<label for="red"><span class="red"></span></label>

<input onChange={handleChange}  type="radio" name="color" id="green" value="green"/>
<label for="green"><span class="green"></span></label>

<input onChange={handleChange}  type="radio" name="color" id="yellow" value="yellow"/>
<label for="yellow"><span class="yellow"></span></label>

<input onChange={handleChange}  type="radio" name="color" id="orange" value="orange"/>
<label for="orange"><span class="orange"></span></label>

<input onChange={handleChange} type="radio" name="color" id="blue" value="blue"/>
<label for="blue"><span class="blue"></span></label>

                <br/>
                <input onClick={createPost} type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default CreatePost