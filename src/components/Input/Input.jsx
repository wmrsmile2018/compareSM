import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import key from 'weak-key';

import './Input.scss';

export const Input = React.memo(({ title, className, ...rest }) => {
  const classes = clsx(
    'input',
    className,
    { disabled: rest.disabled },
    { hat }
  );
  const id = key({ key: `input-${Date.now()}` });
  return (
    <label htmlFor={id} className={classes}>
      {title && <span className='input__title'>{title}</span>}
      <input id={id} {...rest} />
    </label>
  );
});

Input.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {
  title: '',
  className: '',
};
