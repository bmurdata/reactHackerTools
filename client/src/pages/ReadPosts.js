import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client'

const ReadPosts = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData= async () =>{
            const {data} = await supabase
            .from('Posts')
            .select()
            .order('created_at', { ascending: true })
            // set state of posts
            setPosts(data);
        }
        setPosts(props.data);
        fetchData().catch(console.error());
    }, [props]);
    
    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                   <Card  upvotes= {post.Upvotes}id={post.id} title={post.Title} author={post.Author} description={post.Content} created_at={post.created_at}/>
                ) : <h2>{'No Posts yet. Add some!'}</h2>
            }
        </div>  
    )
}

export default ReadPosts;