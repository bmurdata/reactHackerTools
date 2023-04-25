import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css';
import { supabase } from '../client';

const EditPost = ({ data }) => {
  const { id } = useParams();
  const [post, setPost] = useState({}); // Use state for form data
  const [comments, setComments] = useState({}); // Use state for form data
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase
        .from('Posts')
        .select()
        .eq('id', id);
      setPost(data[0]); // Set initial form data
    }
   
    fetchData().catch(console.error());

  }, [id]);

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPost(prevPost => ({ ...prevPost, [name]: value }));
  }

  // UPDATE post
  const updatePost = async (event) => {
    event.preventDefault();

    await supabase
      .from('Posts')
      .update({Title: post.Title, Author: post.Author, Content: post.Content,color:post.color})
      .eq('id', id);

    window.location = "/";
  }

  // DELETE post
  const deletePost = async (event) => {
    event.preventDefault();

    await supabase
      .from('Posts')
      .delete()
      .eq('id', id);

    window.location = "http://localhost:3000/";
  }

  return (
    <div>
      <form onSubmit={updatePost}>
        <label htmlFor="Title">Title</label> <br />
        <input type="text" id="Title" name="Title" value={post.Title} onChange={handleInputChange} /><br />
        <br />

        <label htmlFor="author">Author</label><br />
        <input type="text" id="author" name="Author" value={post.Author} onChange={handleInputChange} /><br />
        <br />

        <label htmlFor="description">Content</label><br />
        <textarea rows="5" cols="50" id="description" name="Content" value={post.Content} onChange={handleInputChange}></textarea>
        <br />
        <label htmlFor="description">Category Color</label><br />
        <input type="text" id="description" name="color" value={post.color} onChange={handleInputChange}/>
        <br />
        <input type="submit" value="Submit" />
        <button className="deleteButton" onClick={deletePost}>Delete</button> {/* Add onClick event handler */}
      </form>
    </div>
  )
}

export default EditPost;