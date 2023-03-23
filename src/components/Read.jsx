import { Table, TableCell, TableHead, TableBody, TableRow, TableContainer, Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Addstudents from './Addstud'

const Read = () => {
    var [Update, setUpdate] = useState(false)
    var[singlevalues,setsingvalues]=useState([])
    var[students,setstudents] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3005/students")
            .then(response => {
                console.log(response.data);
                setstudents(students=response.data);
            })
            .catch(err => console.log(err))
    },[])
    const deletestudent=(id)=>{
        console.log("delete clicked"+id)
        axios.delete("http://localhost:3005/studentsi/"+id)
            .then("deleted")
            window.location.reload(false)
    }
    const updatevalue =(value)=>{
        setsingvalues(value);
        setUpdate(true);
    }

    var finaljsx=<TableContainer>
        
    
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>id</TableCell>
                <TableCell>name</TableCell>
                <TableCell>grade</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {students.map((value, index) => {
                return <TableRow>
                    <TableCell>{value.id}</TableCell>
                    <TableCell>{value.name}</TableCell>
                    <TableCell>{value.grade}</TableCell>
                    <TableCell>
                        <Button onClick={()=>deletestudent(value.id)}>Delete</Button>
                    </TableCell>
                    <TableCell>
                        <Button color='success'
                        onClick={()=>updatevalue(value)}>Update</Button>
                    </TableCell>
                </TableRow>
            })}
        </TableBody>
      </Table>
       </TableContainer>
        if(Update)
        finaljsx=<Addstudents data={singlevalues} method="put"/>
    return (
    <div>
        <br></br>
        <br></br>
        <br></br>
        {finaljsx}
    </div>
    )
}
export default Read
