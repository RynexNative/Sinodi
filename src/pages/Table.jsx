import React, { useState } from 'react'

function Table() {
  const [rows, setRow] = useState([{ name: '', age: '' }])

  const addrow = () => {
    setRow([...rows, { name: '', age: '' }])
  }


  const handlechanges = (index, field, value) => {
    const newRows = [...rows]
    newRows[index][field] = value;
    setRow(newRows)
  }


  const handleSubmit1 = (e) => {
    e.preventDefault()

    console.log('This is your out put: ', rows)
  }
  return (
    <div>
      <button type='Submit' onClick={handleSubmit1}>Submit</button>
      <button onClick={addrow}>Add Row</button>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => <tr key={index}>
            <td>
              <input 
              type="text" 
              name='name'
              placeholder='Name'
              value={row.name}
              onChange={(e) => handlechanges(index, 'name', e.target.value)}
              required
              />
            </td>
            <td>
            <input 
              type="text" 
              name='name'
              placeholder='Name'
              value={row.age}
              onChange={(e) => handlechanges(index, 'age', e.target.value)}
              required
              />  
            </td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default Table