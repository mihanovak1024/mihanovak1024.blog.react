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
      <header className="header flexCenter flexSpaceBetween">
        <Logo />
        <Menu />
      </header>
    );
  }
}

function Logo(props) {
  return (
    <a href="/" className="flexCenter noLinkDecor">
      <img src="/images/logo_inverse.png" className="logoImage" />
      <span className="logoText">mihanovak1024</span>
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
    <Link className="menuItem noLinkDecor" to={props.url}>
      <span>{props.name}</span>
    </Link>
  );
}
