import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const configJson = {
  menuItems: [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Posts",
      url: "/posts",
    },
    {
      name: "Portfolio",
      url: "/portfolio",
    },
    {
      name: "CV",
      url: "/cv",
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

function Logo(props) {
  return (
    <a href="/" className="Logo">
      <img src="/images/logo_inverse.png" className="Logo__Image" />
      <span className="Logo__Text">mihanovak1024</span>
    </a>
  );
}

function Menu(props) {
  const items = configJson.menuItems.map((menuItem) => (
    <MenuItem key={menuItem.name} name={menuItem.name} url={menuItem.url} />
  ));

  return <div>{items}</div>;
}

function MenuItem(props) {
  return (
    <Link className="Menu__Item Menu__Item--NoLinkDecor" to={props.url}>
      <span>{props.name}</span>
    </Link>
  );
}
