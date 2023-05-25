import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions';

function User() {
  const { isLoading, error, user } = useSelector((state) => state.user);

  // debugger;

  const { getUserById } = useActions();

  return (
    <div>
      <button onClick={() => getUserById(1)}>Get user</button>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error.message}</div>
      ) : user?.name ? (
        <h1>User: {user?.name}</h1>
      ) : (
        <h1>User not found</h1>
      )}
    </div>
  );
}

export default User;