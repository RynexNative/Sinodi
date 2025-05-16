import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import '../../styles/layoutstyle/Tdashboard.css'
import { useEffect, useState } from 'react'
import axiosAuthApi from '../../utils/http'

function Tdashboard() {
    const [selectclass,setselectClass] = useState(null);
    const [selectlevel,setselectLevel] = useState(null);
    // const [selectclass,setselectClass] = useState(null);

    useEffect(() => {
        const get_class = async () => {
            try{
                const resp = await axiosAuthApi.get('/classes/select-classes/', {})
                // //console.log(resp)
                setselectClass(resp)
                
            }catch(err){
                console.log(err)
            }
        }
        const get_level = async () => {
            try{
                const resp = await axiosAuthApi.get('/level/select-level/', {})
                // // console.log(resp)
                setselectLevel(resp)
            }catch(err){
                console.log(err)
            }

        }
        get_class()
        get_level()
    }, [])

    const context = {selectclass, selectlevel }
    
    return (
        <>
            <Sidebar />
            <main className="main-content">
                <Navbar />
                <Outlet context={context}/>

            </main>
        </>
    )
}

export default Tdashboard