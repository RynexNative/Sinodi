import React, { useEffect } from 'react'
import axiosAuthApi from '../utils/http'

import {useUser} from '../context/userContext'

function Profile() {

    const {setuserProfile} = useUser()

    // useEffect(()=> {
    //     const profile = async () => {
    //         try {
    //             const response = await axiosAuthApi.get('/auth/profile/');

    //             setuserProfile(response)
    //         }catch(error){
    //             console.log(error);
    //         }
    //     };
    //     profile();

    // },[])

  return (
    <div>Profile</div>
  )
}

export default Profile