import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import AddPost from "./components/AddPost";
import PostList from "./components/PostList";

function App() {

  const [posts, setPosts] = useState([
    {
      id: 1,
      content: "Learning React is fun! ",
      likes: 5
    },
    
  ]);

  function addPost(content) {

    const newPost = {
      id: Date.now(),
      content,
      likes: 0
    };

    setPosts([newPost, ...posts]);
  }

  function deletePost(id) {

    setPosts(
      posts.filter(post => post.id !== id)
    );
  }

  function likePost(id) {

    setPosts(
      posts.map(post =>
        post.id === id
          ? { ...post, likes: post.likes + 1 }
          : post
      )
    );
  }

  const totalLikes = posts.reduce(
    (sum, post) => sum + post.likes,
    0
  );

  return (

    <div className="container">

      <Header />

      <Dashboard
        posts={posts.length}
        followers={2450}
        following={420}
        likes={totalLikes}
      />

      <AddPost addPost={addPost} />

      <PostList
        posts={posts}
        deletePost={deletePost}
        likePost={likePost}
      />

    </div>

  );

}

export default App;