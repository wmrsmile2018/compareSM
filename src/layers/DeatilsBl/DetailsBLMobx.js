import React, { useState, useCallback, useEffect } from 'react';
import { Details } from '../../layers-ui/Details/Details';

import { observer } from 'mobx-react-lite';
// import { users } from '../../store/mobx/users';
// user, updateUser
export const DetailsBlMobx = observer(({ users }) => {
  const handleOnClick = () => {
    // console.log('----->', 2);
    // users.updateUser({
    //   id: 'ABC',
    //   firstName: users.user.firstName + 'ABC',
    //   // secondName: Date.now().toString() + users.user.secondName,
    //   error: true,
    // });
    // users.updateExample();
    // users.updateUser({
    //   id: '2' + users.user.id,
    //   firstName: 'user2' + users.user.firstName,
    //   secondName: Date.now().toString() + users.user.secondName,
    //   error: true,
    // });
    users.updateUser({
      id: '3' + users.user.id,
      firstName: 'user3' + users.user.firstName,
      secondName: Date.now().toString() + users.user.secondName,
      error: true,
    });
  };

  // useEffect(() => {
  //   console.log('----->', 1);
  //   users.updateUser({
  //     id: '3',
  //     firstName: users.user.firstName + '_3_',
  //     // secondName: Date.now().toString() + users.user.secondName,
  //     error: true,
  //   });
  // }, [users.user.id]);
  console.log('rerender');

  if (users.user.error) {
    return (
      <div>
        <button onClick={handleOnClick}>Update user</button>
        error
      </div>
    );
  }

  if (users.user.secondName) {
    return (
      <div>
        <button onClick={handleOnClick}>Update user</button>
        <Details user={users.user} />
      </div>
    );
  }
  return (
    <div>
      <button onClick={handleOnClick}>Update user</button>
      last return
    </div>
  );
});
