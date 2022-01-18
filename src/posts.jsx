import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

export class PostsContainer extends React.Component {
  render() {
    return (
      <div className="postContainer">
        <PostTitle />
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

function PostTitle(props) {
  return (
    <div>
      <h2>Recent posts</h2>
      <hr />
    </div>
  );
}

function BlogPost(props) {
  console.log("title = ");
  const data = props.data;
  const dateHumanReadable = getDateFromTimestamp(data.timestampCreated);
  const readTime = data.readingTime + " minute read";
  return (
    <div>
      <a href={data.url} className="postLinkDecor">
        <h1 className="postTitle">{data.title}</h1>
      </a>
      <div className="flexCenter">
        <span className="smallText">{dateHumanReadable}</span>
        <span className="horizontalMarginSeparator">-</span>
        <span className="postTimeDescription">{readTime}</span>
      </div>
      <p className="postExcerp">{data.excerpt}</p>
    </div>
  );
}

function getDateFromTimestamp(timestamp) {
  const formatter = new Intl.DateTimeFormat("en", { month: "long" });
  const date = new Date(timestamp);
  const month = formatter.format(date);
  return month + " " + date.getDate() + ", " + date.getFullYear();
}
