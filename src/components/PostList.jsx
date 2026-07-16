import PostCard from "./PostCard";

function PostList({
  posts,
  deletePost,
  likePost,
}) {

  if (posts.length === 0) {
    return (
      <h2>No Posts Yet.</h2>
    );
  }

  return (

    <div>

      {posts.map((post) => (

        <PostCard
          key={post.id}
          post={post}
          deletePost={deletePost}
          likePost={likePost}
        />

      ))}

    </div>

  );
}

export default PostList;