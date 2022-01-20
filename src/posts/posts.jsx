import React from "react";
import "../index.css";
import { BlogPost } from "./short_blog_post.jsx";

export class Posts extends React.Component {
  render() {
    const postsPerYear = this.getPostsPerYear();

    let postsElementsPerYear = new Array();
    postsPerYear.forEach((posts, year) => {
      let postPerYear = <PostsForYear key={year} year={year} posts={posts}/>;
      postsElementsPerYear.push(postPerYear);
    });

    return <div id="top">{postsElementsPerYear}</div>;
  }

  getPostsPerYear() {
    const posts = this.props.postList;

    const postsOrdered = posts.sort((post) => post.timestampCreated);

    let postsMap = new Map();

    postsOrdered.forEach((post) => {
      const year = new Date(post.timestampCreated).getFullYear();
      if (!postsMap.has(year)) {
        postsMap.set(year, new Array());
      }
      postsMap.get(year).push(post);
    });
    return postsMap;
  }
}

function PostsForYear(props) {
  const posts = props.posts.map(post => <BlogPost key={post.title} data={post} />);

  return (
    <div>
      <h2>{props.year}</h2>
      {posts}
      <a href="#top"><span className="Post__ToTop">BACK TO TOP &uarr;</span></a>
      <hr></hr>
    </div>
  );
}
