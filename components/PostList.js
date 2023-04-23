import React from 'react';
import { FaTrash } from 'react-icons/fa';

const PostList = ({ posts, searchQuery, handleDeletePost }) => {
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section>
      <h2>Recent Posts</h2>
      {filteredPosts.length === 0 ? (
        <p>No posts match the search query.</p>
      ) : (
        <ul>
         // ...
          {filteredPosts.map((post, index) => (
            <li key={index}>
              <button onClick={() => handleDeletePost(index)}>Delete</button>
              <button onClick={() => handleEditPost(index)}>Edit</button>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </li>
          ))}
// ...

        </ul>
      )}
    </section>
  );
};

export default PostList;
