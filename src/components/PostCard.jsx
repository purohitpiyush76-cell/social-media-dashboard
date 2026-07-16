function PostCard({
  post,
  deletePost,
  likePost,
}) {

  return (

    <div className="post-card">

      <p>{post.content}</p>

      <div className="buttons">

        <button
          className="like-btn"
          onClick={() =>
            likePost(post.id)
          }
        >
          ❤️ {post.likes}
        </button>

        <button
          className="delete-btn"
          onClick={() =>
            deletePost(post.id)
          }
        >
          Delete
        </button>

      </div>

    </div>

  );
}

export default PostCard;