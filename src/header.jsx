import React from "react";
import "./css/index.css";
import { Link } from "react-router-dom";

const TYPE_LINK = 0;
const TYPE_FILE = 1;

const configJson = {
  menuItems: [
    {
      name: "About",
      url: "/about",
      type: 0,
    },
    {
      name: "Posts",
      url: "/posts",
      type: 0,
    },
    {
      name: "Portfolio",
      url: "/portfolio",
      type: 0,
    },
    {
      name: "CV",
      url: "/cv.pdf",
      type: 1,
    },
  ],
};

export class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <Logo />
        <Menu />
      </header>
    );
  }
}

function Logo() {
  return (
    <Link className="Logo" to={"/"}>
      <img src="/images/logo_inverse.png" className="Logo__Image" />
      <span className="Logo__Text">mihanovak1024</span>
    </Link>
  );
}

function Menu() {
  const items = configJson.menuItems.map((menuItem) => (
    <MenuItem key={menuItem.name} {...menuItem} />
  ));

  return <div>{items}</div>;
}

function MenuItem(props) {
  let element;
  if (props.type === TYPE_LINK) {
    element = (
      <Link className="Menu__Item Menu__Item--NoLinkDecor" to={props.url}>
        <span>{props.name}</span>
      </Link>
    );
  } else {
    element = (
      <a className="Menu__Item Menu__Item--NoLinkDecor" href={props.url}>
        {props.name}
      </a>
    );
  }
  return element;
}
