import posts from "../data/posts.json";

function PostList() {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id} className="mb-4">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;