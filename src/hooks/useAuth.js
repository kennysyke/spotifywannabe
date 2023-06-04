import { useSelector } from 'react-redux';

export function useAuth() {
  const { email, token, id } = useSelector((state) => state.data);
  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}
