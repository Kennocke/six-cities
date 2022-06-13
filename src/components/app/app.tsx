import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Main from '../../pages/main/main';
import Room from '../../pages/room/room';
import Favorites from '../../pages/favorites/favorites';
import SignIn from '../../pages/sign-in/sign-in';
import NotFound from '../../pages/not-found/not-found';
import AppHeader from '../app-header/app-header';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../loading-screen/loading-screen';
import {
  selectAuthStatus,
  selectLoadedDataStatus,
  selectAuthStatusLoaded
} from '../../store/main/selectors';
// import { AuthorizationStatus } from '../../constants';

function App(): JSX.Element {
  const authStatus = useSelector(selectAuthStatus);
  const isDataLoaded = useSelector(selectLoadedDataStatus);
  const isAuthStatusLoaded = useSelector(selectAuthStatusLoaded);
  const location = useLocation();
  const pageStyle: string =
    location.pathname === '/' ? 'page page--gray page--main' : 'page';

  if (!isDataLoaded || !isAuthStatusLoaded) {
    return <LoadingScreen />;
  }

  return (
    <div className={pageStyle}>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/offer/:id" element={<Room />} />
        <Route path="/login" element={<SignIn />} />
        <Route
          path="/favorites"
          element={
            <PrivateRoute authStatus={authStatus}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
