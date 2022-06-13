/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { store } from '../../store/index';
import { selectAuthStatus } from '../../store/main/selectors';
import { logoutAction } from '../../store/api-actions';
import { AuthorizationStatus } from '../../constants';

function AppHeader(): JSX.Element {
  const authStatus = useSelector(selectAuthStatus);

  const handlerClick = () => {
    store.dispatch(logoutAction());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authStatus === AuthorizationStatus.Auth ? (
                <li className="header__nav-item user">
                  <Link
                    to="/favorites"
                    className="header__nav-link header__nav-link--profile"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper" />
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                  </Link>
                </li>
              ) : null}
              <li className="header__nav-item">
                {authStatus === AuthorizationStatus.Auth ? (
                  <Link to="/" className="header__nav-link">
                    <span className="header__signout" onClick={handlerClick}>
                      Sign out
                    </span>
                  </Link>
                ) : (
                  <Link to="/login" className="header__nav-link">
                    <span className="header__signout">Log In</span>
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
