import React from "react";
import "./css/index.css";
import { BlogPost } from "./posts/short_blog_post.jsx";

export class Home extends React.Component {
  render() {
    return (
      <div className="PostContainer">
        <div>
          <h2>Recent posts</h2>
          <hr />
        </div>
        <br></br>
        {this.createPosts(this.props.postList)}
      </div>
    );
  }

  createPosts(postList) {
    return (
      <div>
        {postList.map((post) => (
          <BlogPost key={post.title} data={post} />
        ))}
      </div>
    );
  }
}
