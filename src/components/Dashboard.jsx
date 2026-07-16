function Dashboard({
  posts,
  followers,
  following,
  likes,
}) {
  return (
    <div className="dashboard">

      <div className="card">
        <h2>{posts}</h2>
        <p>Posts</p>
      </div>

      <div className="card">
        <h2>{followers}</h2>
        <p>Followers</p>
      </div>

      <div className="card">
        <h2>{following}</h2>
        <p>Following</p>
      </div>

      <div className="card">
        <h2>{likes}</h2>
        <p>Total Likes</p>
      </div>

    </div>
  );
}

export default Dashboard;