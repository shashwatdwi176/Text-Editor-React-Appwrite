import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config"
import { Container, PostCard } from 'postcss'

const AllPost = () => {
    const [post,setPosts] = useState([])
    useEffect(() => {})
    appwriteService.getPosts([]).then((posts) => {
        if(posts){
        setPosts(posts.documents)
        }
    }
        )
return (
    <div className='w-full py-8'>
    <Container  >
        <div className='flex flex-wrap'>
        {post.map((post) => (
            <div key={post.$id}>
                <PostCard post ={post} className='p-2 w-1/4'/>
            </div>
        ))}
        </div>
    </Container>
    </div>
)
}

export default AllPost
