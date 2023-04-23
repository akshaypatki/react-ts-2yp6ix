import React, { useState, useEffect } from 'react';
import './styles.css';
import Header from './components/Header';
import AddPostForm from './components/AddPostForm';
import SearchBar from './components/SearchBar';
import PostList from './components/PostList';

const [editingPost, setEditingPost] = useState(null);
const handleEditPost = (index) => {
  setEditingPost(posts[index]);
};


function App() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [numNotifications, setNumNotifications] = useState(0);

  useEffect(() => {
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);

  const handleAddPost = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const content = form.content.value;
    const newPost = { title, content };
    setPosts([...posts, newPost]);
    localStorage.setItem('posts', JSON.stringify([...posts, newPost]));
    setShowNotification(true);
    setNumNotifications(numNotifications + 1);
    form.reset();
  };

  const handleDeletePost = (index) => {
    const updatedPosts = posts.filter((post, i) => i !== index);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const handleClearNotifications = () => {
    setShowNotification(false);
    setNumNotifications(0);
  };

  return (
    <div className="App">
      <Header
        numNotifications={numNotifications}
        handleClearNotifications={handleClearNotifications}
      />
      <main>
        <AddPostForm
          handleAddPost={handleAddPost}
          showNotification={showNotification}
        />
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <PostList
          posts={posts}
          searchQuery={searchQuery}
          handleDeletePost={handleDeletePost}
          handleEditPost={handleEditPost}
        />

      </main>
    </div>
  );
}

export default App;
