import {
    getUserFail,
    getUserPending,
    getUserSuccess
} from './userSlice';
import {fetchUser} from '../../api/userApi'

export const getUserProfile = () => async(dispatch)=>{
    try{
        dispatch(getUserPending());
        const user=await fetchUser();
        if(user)
        {
           // console.log(user);
            dispatch(getUserSuccess(user))

        }

    }catch(error)
    {
        dispatch(getUserFail(error));
    }
}

