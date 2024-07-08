import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PostContext } from './PostContext';

function PostsDisplayScreen() {
  const { posts } = useContext(PostContext);

  return (
    <div>
      <h1>Posts</h1>
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        posts.map((post, index) => (
          <div key={index}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <Link to={`/edit-post/${index}`}>
              <button>Edit</button>
            </Link>
          </div>
        ))
      )}
      <Link to="/create-post">
        <button>Create New Post</button>
      </Link>
    </div>
  );
}

export default PostsDisplayScreen;
