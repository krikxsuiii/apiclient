import { Table, TableCell, TableContainer, TableHead, TableBody, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
const Teachers = () => {
    var [teachers, setteachers] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3005/teachers")
            .then(response => {
                console.log(response.data);
                setteachers(teachers = response.data);
            })
            .catch(err => console.log(err))
    }, )
    return (
        <div>
            <Typography>welcome to my app</Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell>name</TableCell>
                            <TableCell>class</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {teachers.map((value, index) => {
                            return <TableRow key={index}>
                                <TableCell>{value.id}</TableCell>
                                <TableCell>{value.name}</TableCell>
                                <TableCell>{value.class}</TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Teachers
