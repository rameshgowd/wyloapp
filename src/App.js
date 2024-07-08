import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PostProvider } from './components/PostContext';
import PostsDisplayScreen from './components/PostsDisplayScreen';
import CreatePostScreen from './components/CreatePostScreen';
import EditPostScreen from './components/EditPostScreen';
import './App.css';

function App() {
  return (
    <PostProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" exact element={<PostsDisplayScreen/>} />
            <Route path="/create-post" element={<CreatePostScreen/>} />
            <Route path="/edit-post/:id" element={<EditPostScreen/>} />
          </Routes>
        </div>
      </Router>
    </PostProvider>
  );
}

export default App;
