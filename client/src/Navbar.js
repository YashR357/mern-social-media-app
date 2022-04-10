import {Link} from 'react-router-dom'
import { AppBar, Icon } from '@mui/material'
import {Toolbar} from '@mui/material'
import Typography from "@mui/material/Typography";
import {IconButton} from "@mui/material";
import {MenuIcon} from "@mui/material";
import {Button} from '@mui/material';
import React from 'react';
import './Navbar.css'
import {createMuiTheme} from '@mui/material'
import {ThemeProvider} from '@mui/material'
function Navbar() {
    const customTheme = createMuiTheme({
        palette: {
          secondary: {
            main: "#F5BD1F",
            contrastText: "#6a0dad "
          }
        }
      });
      
    return (
        <ThemeProvider theme={customTheme}>  
        <AppBar position='static' color={"secondary"} >
                <Toolbar sx={{color: 'black'}}>
                <Link style={{ textDecoration: 'none' }} to="/" >
            
            <Button sx={{ my: 2, color: 'white', display: 'block', margin: '10px' }} >Homepage</Button>
        </Link>
            <Link style={{ textDecoration: 'none' }} to="/Signup" >
            
        <Button sx={{ my: 2, color: 'white', display: 'block', margin: '10px' }} variant="text" underline="none" linkButton={true}>Sign Up</Button>
    </Link>
    <Link style={{ textDecoration: 'none' }} to="/Login" >
            
        <Button sx={{ my: 2, color: 'white', display: 'block', margin: '10px' }} >Login</Button>
    </Link>
        <Link style={{ textDecoration: 'none' }} to="/Post">
    <Button sx={{ my: 2, color: 'white', display: 'block', margin: '10px' }} >Post</Button>
    </Link>
    <Link style={{ textDecoration: 'none' }} to="/ReadPost">
    <Button sx={{ my: 2, color: 'white', display: 'block', margin: '10px' }} >Read posts</Button>
    </Link>
    </Toolbar>
    </AppBar>
    </ThemeProvider>
    )
    
}

export default Navbar