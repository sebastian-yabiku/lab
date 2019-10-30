import React, { useState } from "react";
import { connect } from "react-redux";
import { requestCreatePublication } from "../../store/actions";
import { Textarea, Select, Button } from "../../../../ui";
import "./add-publication.scss";

function WallAddPublicationContainer(props) {
  const { requestCreatePublication, user } = props;

  const [publication, setPublication] = useState({
    text: "",
    type: 0
  });

  const typePublication = [
    {
      key: "0",
      value: "Amigos"
    },
    {
      key: "0",
      value: "Todos"
    }
  ];

  function handleSubmit(e) {
    e.preventDefault();

    requestCreatePublication({
      ...publication,
      user
    });
  }

  function handleChange(e) {
    console.log("e", e.target.value);
    setPublication({
      ...publication,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="add-publication">
      <form onSubmit={handleSubmit}>
        <header>
          <h2>Crear publicación</h2>
        </header>
        <div>
          <Textarea
            placeholder="¿Qué estás pensando, Sebastian?"
            name="text"
            value={publication.text}
            onChange={handleChange}
          />
        </div>
        <footer className="d-flex jc-space-between">
          <Select
            name="type"
            options={typePublication}
            onChange={handleChange}
          />
          <Button className="button--primary">Publicar</Button>
        </footer>
      </form>
    </div>
  );
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    user: state.Auth.user
  };
};

const mapDispatchToProps = { requestCreatePublication };
const WallAddPublication = connect(
  mapStateToProps,
  mapDispatchToProps
)(WallAddPublicationContainer);

export { WallAddPublication };
