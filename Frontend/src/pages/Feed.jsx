import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Feed = () => {

  const [posts, setPosts] = useState([{
    _id: "1",
    image: "https://ik.imagekit.io/znqq9nvsz/image_n_22aV-Su3.jpg?updatedAt=1773605873536",
    caption: 'Beautiful sunset!',
  }])


  useEffect(() => {

    axios.get('http://localhost:3000/posts')
      .then((response) => {
        setPosts(response.data.posts)
      })
  }, [])

  return (
    <section className='feed-section'>

      {
        posts.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className='post'>
              <img src={post.image} alt='Post' />
              <p>{post.caption}</p>
            </div>
          ))
        ) : (
          <p>No posts available.</p>
        )
      }
      
    </section>
  )
}

export default Feed
