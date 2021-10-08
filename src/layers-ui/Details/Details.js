import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { Title } from '../../components/Title/';

import './Details.scss';

export const Details = ({ className, user }) => {
  const classes = clsx(className, 'details');
  return (
    <div className={classes}>
      <Title>Подробная информация</Title>
      <p>
        Имя
        <span>{user.firstName}</span>
      </p>
      <p>
        Фамилия
        <span>{user.secondName}</span>
      </p>
    </div>
  );
};

Details.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object,
};

Details.defaultProps = {
  className: '',
  user: {
    firstName: 'Пустое значение',
    secondName: 'Пустое значение',
  },
};
