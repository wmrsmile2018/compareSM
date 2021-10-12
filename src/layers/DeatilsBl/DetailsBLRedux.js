import React, { useState, useCallback, useEffect } from 'react';
import { useGetUser } from './hook/useGetUser';
import { Details } from '../../layers-ui/Details/Details';
import { useDispatch } from 'react-redux';
import { putUser } from '../../store/redux/users/reducer';

export const DetailsBLRedux = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState('hello');
  const user = useGetUser();

  const handleOnClick = useCallback(() => {
    dispatch(
      putUser({
        id: '1',
        firstName: 'user1',
        secondName: Date.now().toString(),
      })
    );
    dispatch(
      putUser({
        id: '2',
        firstName: 'user2',
        secondName: Date.now().toString(),
      })
    );
    dispatch(
      putUser({
        id: '3',
        firstName: 'user3',
        secondName: Date.now().toString(),
      })
    );
    dispatch(
      putUser({
        id: '4',
        firstName: 'user4',
        secondName: Date.now().toString(),
      })
    );
    dispatch(
      putUser({
        id: '5',
        firstName: 'user5',
        secondName: Date.now().toString(),
      })
    );
  }, [dispatch]);

  useEffect(() => {
    console.log(user);
  }, [user]);
  console.log('details-rerender');

  return (
    <div>
      <button onClick={handleOnClick}>Update user</button>
      <Details user={user} />
    </div>
  );
};
