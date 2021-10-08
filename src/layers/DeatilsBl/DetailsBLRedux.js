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
        firstName: 'user1',
        secondName: Date.now().toString(),
      })
    );
    dispatch(
      putUser({
        firstName: 'user2',
        secondName: Date.now().toString(),
      })
    );
    dispatch(
      putUser({
        firstName: 'user3',
        secondName: Date.now().toString(),
      })
    );
    dispatch(
      putUser({
        firstName: 'user4',
        secondName: Date.now().toString(),
      })
    );
    dispatch(
      putUser({
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
    <>
      <button onClick={handleOnClick}>Записать</button>
      <Details user={user} />
    </>
  );
};
