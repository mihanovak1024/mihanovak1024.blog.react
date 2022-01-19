import React from "react";
import "./index.css";

export class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 0.75,
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({ opacity: 1 });
  }

  handleMouseLeave() {
    this.setState({ opacity: 0.75 });
  }

  render() {
    return (
      <div className="Sidebar" style={{ opacity: this.state.opacity }}>
        <div className="Sidebar--Sticky"
          onMouseLeave={this.handleMouseLeave}
          onMouseEnter={this.handleMouseEnter}
        >
          <AuthorImage />
          <h2>Miha Novak</h2>
          <p>
            Software Engineer, prototyper, <i>uncle of four</i>
          </p>
          <ContactLinkList />
        </div>
      </div>
    );
  }
}

class AuthorImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img
        className="Author__Image Author__Image--Circle"
        src="/images/contact/miha_square.jpg"
        onMouseEnter={(e) =>
          (e.currentTarget.src = "/images/contact/miha_square_smile.jpg")
        }
        onMouseOut={(e) =>
          (e.currentTarget.src = "/images/contact/miha_square.jpg")
        }
      />
    );
  }
}

function ContactLinkList(props) {
  return (
    <ul className="Contact__ItemWrapper">
      <ContactLink
        contactImage="/images/contact/location.png"
        contactLinkName="Slovenia, Europe"
        contactUrl=""
      />
      <ContactLink
        contactImage="/images/contact/twitter.png"
        contactLinkName="Twitter"
        contactUrl="https://twitter.com/mihanovak1024"
      />
      <ContactLink
        contactImage="/images/contact/github.png"
        contactLinkName="GitHub"
        contactUrl="https://github.com/mihanovak1024"
      />
      <ContactLink
        contactImage="/images/contact/linkedin.png"
        contactLinkName="LinkedIn"
        contactUrl="https://linkedin.com/in/mihanovak1024"
      />
      <ContactLink
        contactImage="/images/contact/stackoverflow.png"
        contactLinkName="StackOverflow"
        contactUrl="https://stackoverflow.com/users/6819938"
      />
    </ul>
  );
}

function ContactLink(props) {
  let html;
  if (props.contactUrl.length > 0) {
    html = (
      <li className="Contact__Item Contact__Item--Hover">
        <a href={props.contactUrl}>
          <div className="Contact__ItemContainer">
            <img className="Contact__ItemImage" src={props.contactImage} />
            <p className="Contact__ItemText">{props.contactLinkName}</p>
          </div>
        </a>
      </li>
    );
  } else {
    html = (
      <li className="Contact__Item">
        <div className="Contact__ItemContainer">
          <img className="Contact__ItemImage" src={props.contactImage} />
          <p className="Contact__ItemText">{props.contactLinkName}</p>
        </div>
      </li>
    );
  }
  return html;
}
