import React, { useEffect } from "react";
import { connect } from "react-redux";
import { WallAddPublication, WallPublication } from "../";

function WallContainer(props) {
  useEffect(() => {
    console.log("wallContainer!!", props);
  });

  return (
    <div className="wall">
      <WallAddPublication />
      {props.publications.map(value => {
        return <WallPublication key={value.id} {...value}/>;
      })}
    </div>
  );
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    publications: state.Publication.publications
  };
};

const Wall = connect(
  mapStateToProps,
  null
)(WallContainer);
export { Wall };
