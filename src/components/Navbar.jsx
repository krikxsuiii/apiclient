import { AppBar, Button, IconButton,  Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{flexgrow:1}}>
        <AppBar position ="static">
            <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexgrow:1}}>HOME</Typography><br></br>
                    <Button color='inherit' variant='contained' ><Link to="/" style={{color:'white'}}>View</Link></Button>
                    <Button color='inherit' variant='contained'><Link to="/addstud"style={{color:'white'}}>Add</Link></Button>
                    </Toolbar>
                    </AppBar>
                    </Box>
    </div>
  )
}

export default Navbar

