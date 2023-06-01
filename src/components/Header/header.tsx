import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { IconButton } from '@mui/material';
import ShoppingCartIcon  from '@mui/icons-material/ShoppingCart';
import { Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export const Header: React.FC = () => (
  <AppBar position="relative">
    <Toolbar variant="dense" sx={{ justifyContent: 'space-between' }}>
      <div style={{display: 'flex', gap: '20px'}}>
        <Typography variant="h6" color="inherit" noWrap>
          Delivery App
        </Typography>
        <Link href="/" underline='none'>
          <Typography variant="h6" color="#fff" noWrap> 
            Home Page
          </Typography>
        </Link>
      </div>
      <Link href='/cart'>
        <IconButton edge="end" aria-label="delete">
          <ShoppingCartIcon  />
        </IconButton>
      </Link>
    </Toolbar>
  </AppBar>
)