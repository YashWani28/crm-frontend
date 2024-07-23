import React,{useEffect} from 'react';
import { Route, Navigate, useNavigate } from 'react-router-dom';
import { DefaultLayout } from '../../layout/DefaultLayout';
import { useSelector } from 'react-redux';
import { loginSuccess } from '../ClientLoginForm/clientLoginSlice';
import { useDispatch } from 'react-redux';
import { fetchNewAccessToken } from '../../api/userApi';
import { logout } from '../ClientLoginForm/clientLoginSlice';
import { isTokenExpired } from '../../utils/decodeToken';
import { useResetState } from '../../utils/resetState'; 

const isauth = false;
export const PrivateRoute = ({children }) => {
  const {isAuth} = useSelector(state=>state.login)
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const resetState = useResetState();
  // 1. if refresh is valid and access is expired 
  // 2. if refresh is expired and access is expired
  // 3. if access does not exist and refresh is valid...
  // 4. if refresh is expired and access does not exist
  useEffect(()=>{
    const updateAccessJWT = async () => {
      // const result = await fetchNewAccessToken();
      // result && dispatch(loginSuccess());
      //? logout condition to prevent from going back
      if(!sessionStorage.getItem("CRM_accessJWT") && !localStorage.getItem("CRM_refreshJWT"))
      {
        resetState();
        navigate('/login');
      }

      //?there exits an access token and after it has expired, the refresh token is also expired...force user to log in again
      else if(sessionStorage.getItem("CRM_accessJWT") && isTokenExpired(localStorage.getItem("CRM_refreshJWT")))
      {
        alert("sesion expired.please login again");
        sessionStorage.removeItem("CRM_accessJWT");
        localStorage.removeItem("CRM_refreshJWT");
        resetState();
        navigate('/login');

      }

      //? access token does not exists but valid refresh token is there...like if we open another window or login after a long time
      else if(!sessionStorage.getItem("CRM_accessJWT")&&localStorage.getItem("CRM_refreshJWT")&&!isTokenExpired(localStorage.getItem("CRM_refreshJWT")))
      {
        const result = await fetchNewAccessToken();
        result && dispatch(loginSuccess());
      }
      //? if the access token exists but is expired or access token doesn't exist
      else if(isTokenExpired(sessionStorage.getItem("CRM_accessJWT"))||!sessionStorage.getItem("CRM_accessJWT"))
      {
        const result = await fetchNewAccessToken();
        result && dispatch(loginSuccess());

      }
		};
		
    
			updateAccessJWT()
    
    
    
  },[dispatch,navigate,isAuth]);

  return (
    <div>{sessionStorage.getItem('CRM_accessJWT') ? <DefaultLayout>{children}</DefaultLayout> : <Navigate to='/login' replace={true}/>}</div>
  );
};


