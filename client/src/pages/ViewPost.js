import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css';
import { supabase } from '../client';
import { Link } from 'react-router-dom'
import CommentCard from '../components/CommentCard';
const ViewPost = ({ data }) => {
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
      const fetchData2 = async () => {
        const { data } = await supabase
          .from('Comments')
          .select()
          .eq('postfk', id);
          setComments(data); // Set initial form data
      }
  
      fetchData().catch(console.error());
      fetchData2().catch(console.error());
    }, [id]);
 // Handle form input changes
 const handleInputChange = (event) => {
  const { name, value } = event.target;
  setPost(prevPost => ({ ...prevPost, [name]: value }));
}

// UPDATE post
const updateUpvote = async (event) => {
  event.preventDefault();

  await supabase
    .from('Posts')
    .update({Upvotes:parseInt(post.Upvotes)+ 1})
    .eq('id', id);

  window.location = "/view/"+ post.id;
}
 

  return (
    <div>
      <Link to={'/edit/'+ post.id}>Edit Post</Link>
      <h3>{post.Title}</h3>
      <h5>by {post.Author}</h5>

      <h3>Color Label: <span style={{ color: post.color }}>{post.color}</span></h3>
      <div>{post.Content}</div>
      <button onClick={updateUpvote}>Upvotes: {post.Upvotes}</button>
      <br></br><br></br>
      <Link to={'/addcomment/'+ post.id}><button>Add Comments</button></Link>
      <h5>Comments</h5>
      {
                comments && comments.length > 0 ?
                comments.map((comment,index) => 
                   <CommentCard Author={comment.Author} Content={comment.Content} created_at={post.created_at}/>
                ) : <h2>{'No comments yet!'}</h2>
      }
    
    
    </div>
  )
}

export default ViewPost;