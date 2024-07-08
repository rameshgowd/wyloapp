import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PostContext } from './PostContext';

function EditPostScreen() {
  const { posts, updatePost } = useContext(PostContext);
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const post = posts[parseInt(id)];
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [id, posts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = { title, content };
    updatePost(parseInt(id), updatedPost);
    navigate('/');
  };

  return (
    <div>
      <h1>Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditPostScreen;
