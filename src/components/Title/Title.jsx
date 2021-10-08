import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import "./Title.scss";

export const Title = ({ className, children }) => {
  const classes = clsx("title", className);
  return <h2 className={classes}>{children}</h2>;
};

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
