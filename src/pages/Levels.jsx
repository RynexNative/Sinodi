import React, { useEffect, useState } from 'react'
import axiosAuthApi from '../utils/http'

function Levels() {
  const [level, setLevel] = useState(null)
  const [leveldetail, setLeveldetail] = useState(null)
  const [classes, setClassesdetail] = useState(null)


  useEffect(() => {
    const levels = async () => {
      try {
        const response = await axiosAuthApi.get('/level/', {});
        // console.log(response);

        setLevel(response);

      } catch (error) {
        console.log(error);
      }

    }

    levels();

    const level_detail = async () => {
      try {
        const response = await axiosAuthApi.get('/level/2/')
        setLeveldetail(response)
      } catch (error) {
        console.log(error);
      }
    }
    level_detail()

    const classes_detail = async () => {
      try {
        const response = await axiosAuthApi.get('/classes/')
        setClassesdetail(response)
      } catch (error) {
        console.log(error);
      }
    }
    classes_detail()
  }, [])


  return (
    <div>
      {leveldetail ? (
        Object.keys(leveldetail).map((key, index) => (
          <div key={index}>
            {key}: {leveldetail[key]}
          </div>
        ))
      ) : (
        <div>none</div>
      )}
    </div>
  )
}

export default Levels;