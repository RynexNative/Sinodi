import React, {Children, createContext, useContext, useEffect, useState,} from 'react'
import axiosAuthApi from '../utils/http';


const UserContext = createContext();

function UserProvider({children}) {

    const [userProfile,setuserProfile] = useState(null);

    useEffect(()=>{
        const user = async () => {
            try {
                const response = await axiosAuthApi.get('/auth/profile/');

                setuserProfile(response);
                // console.log(response)

            }catch(error){
                // console.log(error);
            }
            
        };
        user();
    },[])


  return (
    <UserContext.Provider value={{userProfile, setuserProfile}} >
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider;

export const useUser = () => useContext(UserContext);