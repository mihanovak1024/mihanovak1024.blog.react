import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

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
    <a className="menuItem noLinkDecor" href={props.url}>
      <span>{props.name}</span>
    </a>
  );
}
