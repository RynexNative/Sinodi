import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import '../../styles/layoutstyle/Tdashboard.css'
import { useEffect, useState } from 'react'
import axiosAuthApi from '../../utils/http'

function Tdashboard() {
    const [selectclass, setselectClass] = useState(null);
    const [selectlevel, setselectLevel] = useState(null);
    const [profile, setprofile] = useState(null);

    const [loding, setIsLoading] = useState(true)
    // const [selectclass,setselectClass] = useState(null);

    useEffect(() => {
        const get_class = async () => {
            try {
                const resp = await axiosAuthApi.get('/classes/select-classes/', {})
                // //console.log(resp)
                setselectClass(resp);

            } catch (err) {
                console.log(err)
            }
        }
        const get_level = async () => {
            try {
                const resp = await axiosAuthApi.get('/level/select-level/', {})
                // // console.log(resp)
                setselectLevel(resp)
            } catch (err) {
                console.log(err)
            }

        }
        const get_profile = async () => {
            try {
                const resp = await axiosAuthApi.get('/auth/profile/', {});
                setprofile(resp)
                setIsLoading(false)
                // console.log(resp)

            } catch (err) {
                console.log(err)
            }

        }
        get_class()
        get_level()
        get_profile()

    }, [])
    // const profileimage = profile?.profile.profile_picture
    const context = { selectclass, selectlevel, profile }
    // console.log(profileimage)

    // console.log(profile)

    return (
        <>
            <Sidebar />
            <main className="main-content">
                <Navbar profile={profile} />
                <div className='Outlet'>
                    <Outlet context={context} />

                </div>

            </main>
        </>
    )
}

export default Tdashboard