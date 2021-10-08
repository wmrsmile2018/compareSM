import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sagaEventCallBegan } from '../../../store/redux/saga';
import { fetchUser, fetchError } from '../../../store/redux/users/reducer';

export const useApiUser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('fetch user');
    dispatch({
      url: '/user',
      type: sagaEventCallBegan.type,
      method: 'get',
      onSuccess: fetchUser.type,
      onError: fetchError.type,
    });
  }, [dispatch]);
};
