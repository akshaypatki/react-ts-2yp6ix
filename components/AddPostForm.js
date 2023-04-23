import React from 'react';

const AddPostForm = ({ handleAddPost, showNotification }) => (
  <section>
    <h2>To Do List</h2>
    <form onSubmit={handleAddPost}>
      <label htmlFor="title">To DO:</label>
      <input type="text" name="title" required />
      <label htmlFor="content">Content:</label>
      <textarea name="content" required></textarea>
      <button type="submit">Publish</button>
    </form>
    {showNotification && <div className="notification">New post added!</div>}
  </section>
);

export default AddPostForm;
