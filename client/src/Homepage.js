import {Link} from 'react-router-dom'
import { AppBar } from '@mui/material'
import {Toolbar} from '@mui/material'
import {Button} from '@mui/material';
import Navbar from './Navbar';
function Homepage() {
    return (
            <div>
                <Navbar/>
                <h1 >Welcome!</h1>
            </div>            
        )
    }

export default Homepage