import { useSelector } from 'react-redux';

export const useGetUser = () => {
  const user = useSelector((state) => state.users.user);
  console.log('call hook');
  return user;
};
