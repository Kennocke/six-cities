import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../constants';

type PropsType = {
  authStatus: AuthorizationStatus;
  children: JSX.Element;
};

function PrivateRoute({ authStatus, children }: PropsType) {
  return authStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to="/login" />
  );
}

export default PrivateRoute;
