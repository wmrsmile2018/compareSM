import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import "./MarginGroup.scss";

export const MarginGroup = React.memo(({ gap, className, children, isColumn, style, ...rest }) => {
  const classes = clsx("margin-group", className);
  const styleComponent = {
    gap,
    flexDirection: isColumn ? "column" : "",
    ...style,
  };

  return (
    <div style={styleComponent} className={classes} {...rest}>
      {children}
    </div>
  );
});

MarginGroup.propTypes = {
  gap: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node,
  isColumn: PropTypes.bool,
  style: PropTypes.object,
};
