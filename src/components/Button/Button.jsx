import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import "./Button.scss";

export const Button = ({ className, children, disabled, ...rest }) => {
  const classes = clsx("button", className, { disabled });
  return (
    <button className={classes} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

export default React.memo(Button);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};
