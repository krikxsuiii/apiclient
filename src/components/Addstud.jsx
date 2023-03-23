import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Addstudents = (props) => {
  var [students, setstudents] = useState(props.data)
  console.log("add page props", props.data)

  const handlechange = (e) => {
    const { name, value } = e.target
    setstudents({ ...students, [name]: value })
    console.log(students)
  }
  const saveData = () => {
    console.log("Button clicked")
    console.log(students)
    if (props.method === "post") {
      axios.post("http://localhost:3005/students", students)
        .then(response => {
          alert("successfully added")
        })
        .catch(error => {
          alert("failed")
        })
    }
    else if (props.method === "put") {
      axios.put("http://localhost:3005/students/" + students.id, students)
        .then(response => {
          console.log("put data" + response.data)
          alert("success")
          window.location.reload(false);
        })

        .catch((error) => {
          console.log(error)
        })
    }
  }
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <Typography variant='h3'>new student</Typography>
      <br></br>
      <br></br>
      <TextField label='id' variant='outlined' name='id'
        value={students.id} onChange={handlechange}></TextField>
      <br></br>
      <br></br>
      <TextField label='name' variant='outlined' name='name'
        value={students.name} onChange={handlechange}></TextField>
      <br></br>
      <br></br>
      <TextField label='grade'
        variant='outlined' name='grade'
        value={students.grade} onChange={handlechange}></TextField>
      <br></br>
      <br></br>
      <Button variant='contained' onClick={saveData} >submit</Button>
    </div>
  )
}
export default Addstudents
