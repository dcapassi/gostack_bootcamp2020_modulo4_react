import React from "react";
import PropTypes from "prop-types";

function TechItem({ tech, deleteFunction }) {
  return (
    <li>
      {tech}
      <button type="button" onClick={deleteFunction}>
        Remover
      </button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: "Oculto"
};
TechItem.propTypes = {
  tech: PropTypes.string,
  deleteFunction: PropTypes.func.isRequired
};

export default TechItem;
