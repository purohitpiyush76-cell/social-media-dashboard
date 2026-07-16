import { useState } from "react";

function AddPost({ addPost }) {

  const [content, setContent] = useState("");

  function handleSubmit(e) {

    e.preventDefault();

    if (!content.trim()) {
      alert("Please write something.");
      return;
    }

    addPost(content);

    setContent("");
  }

  return (

    <form
      className="post-form"
      onSubmit={handleSubmit}
    >

      <textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) =>
          setContent(e.target.value)
        }
      />

      <button>
        Post
      </button>

    </form>

  );
}

export default AddPost;