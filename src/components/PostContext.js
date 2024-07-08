import React, { createContext, useState } from 'react';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const updatePost = (index, updatedPost) => {
    const newPosts = posts.map((post, i) => (i === index ? updatedPost : post));
    setPosts(newPosts);
  };

  return (
    <PostContext.Provider value={{ posts, addPost, updatePost }}>
      {children}
    </PostContext.Provider>
  );
};
