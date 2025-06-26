import React, { useEffect, useState } from 'react'
import axiosAuthApi from '../utils/http'
import { Link } from 'react-router-dom'

function Draft() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)


  const getDraft = async () => {
    try {
      const resp = await axiosAuthApi.get('/drafts/')
      setData(resp)
      setIsLoading(false)
      console.log(resp)
    } catch (erro) {
      console.log(erro)
    }
  }

  useEffect(() => {
    getDraft();
  }, [])


  const handledelete = async(id)=>{
    try{
      const resp = await axiosAuthApi.delete(`/drafts/delete/${id}/`)
      console.log('deleted successfully')
      getDraft()
    }catch(err){
      console.log(err)
    }
  }


  return (
    <div className='container'>
      <div>
        <h1>Draft list</h1>
      </div>
      <div>
        <h5>Active Drafts </h5>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <>
                {[...Array(5)].map((_, rowIndex) => (
                  <tr key={rowIndex}>
                    {[...Array(3)].map((_, cellIndex) => (
                      <td key={cellIndex}>
                        <div
                          style={{
                            width: '200px',
                            height: '25px',
                            backgroundColor: '#e0e0e0',
                            borderRadius: '4px',
                            animation: 'pulse 1.5s infinite'
                          }}
                        ></div>
                      </td>
                    ))}
                  </tr>
                ))}
              </>
            ) : data && data.length > 0? (data.map((datad) => (
              <tr key={datad.id}>
              <td>{datad.type}</td>
              <td>{datad.is_finalized? 'true' : 'false'}</td>
              <td>
                {datad.is_finalized? (<button className='button-delete' onClick={()=>handledelete(datad.id)}>Delete</button>): (<>
                  {datad.type=='lesson_plan' && datad.type.length > 0? <Link to ='/lesson-planning/add-lessonplanning' className='button'>Edit</Link> : <Link to ='/scheme-of-work/add-scheme' className='button'>Edit</Link>}
                  
                  <button className='button-delete' onClick={()=>handledelete(datad.id)}>Delete</button>
                </>)}
                
              </td>
            </tr>
            ))) : (<tr>
                <td colSpan={3} style={{textAlign:'center', fontWeight:'bold'}}>No Draft....</td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  )
}




export default Draft