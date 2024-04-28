import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { DefaultLayout } from '../../layout/DefaultLayout';

const isauth = true;
export const PrivateRoute = ({children }) => {
  return (
    <div>{isauth ? <DefaultLayout>{children}</DefaultLayout> : <Navigate to='/login' replace={true}/>}</div>
  );
};


