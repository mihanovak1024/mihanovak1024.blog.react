import React from "react";
import "../css/index.css";

export class BlogPost extends React.Component {
  render() {
    const data = this.props.data;
    const dateHumanReadable = this.getDateFromTimestamp(data.timestampCreated);
    const readTime = data.readingTime + " minute read";

    // Redirect to the original blog
    // because I didn't want to rewrite everything from scratch.
    const url = `https://mihanovak1024.com${data.url}`;
    return (
      <div className="Post">
        <a href={url} className="Post__Link--LightBlue">
          <h1 className="Post__Title">{data.title}</h1>
        </a>
        <div className="Post__Details">
          <span className="Post__Details--FontSize">{dateHumanReadable}</span>
          <span className="Post__Details--Separator">-</span>
          <span className="Post__Details--FontSize">{readTime}</span>
        </div>
        <p className="Post__Excerp">{data.excerpt}</p>
      </div>
    );
  }

  getDateFromTimestamp(timestamp) {
    const formatter = new Intl.DateTimeFormat("en", { month: "long" });
    const date = new Date(timestamp);
    const month = formatter.format(date);
    return month + " " + date.getDate() + ", " + date.getFullYear();
  }
}
