import React from "react";
import { Button } from "../../../../ui";
import "./publication.scss";

function WallPublication(props) {
  const { text, user, onClick = () => {} } = props;
  console.log("props", props);
  return (
    <div className="publication">
      <header className="publication__header d-flex jc-space-between">
        <div>
          <h3>{user}</h3>
          <time>4 min</time>
        </div>
        <span className="publication__close" onClick={onClick}>
          x
        </span>
      </header>
      <div className="publication__body">
        <p>{text}</p>
      </div>
      <footer className="publication__footer">
        <Button className="button--secondary">Me gusta</Button>
      </footer>
    </div>
  );
}

export { WallPublication };
