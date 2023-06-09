import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { IconButton } from '@mui/material';
import ShoppingCartIcon  from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

export const Header: React.FC = () => (
  <AppBar position="relative">
    <Toolbar variant="dense" sx={{ justifyContent: 'space-between' }}>
      <div style={{display: 'flex', gap: '20px'}}>
        <Typography variant="h6" color="inherit" noWrap>
          Delivery App
        </Typography>

        <Link to="/" style={{textDecoration: 'none', lineHeight: '1.6', fontSize: '1.25rem'}}>
          <Typography variant="h6" color="#fff" noWrap> 
            Home Page
          </Typography>
        </Link>
      </div>
      
      <Link to='/cart'>
        <IconButton edge="end" aria-label="delete">
          <ShoppingCartIcon  />
        </IconButton>
      </Link>
    </Toolbar>
  </AppBar>
)