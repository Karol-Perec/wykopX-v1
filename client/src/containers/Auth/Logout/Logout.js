import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as authActions from '../../../store/Auth/actions';

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.logOut());
  }, [dispatch]);

  return <Redirect to='/' />;
};

export default Logout;
