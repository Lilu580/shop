import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Footer = () => (
  <Box sx={{ bgcolor: 'background.paper', p: 6, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} component="footer">
    <Typography variant="h6" align="center" gutterBottom>
      Created by Bogdan Maliuta
    </Typography>
    <Typography
      variant="subtitle1"
      align="center"
      color="text.secondary"
      component="p"
    >
      Contacts: +380976345406
    </Typography>
  </Box>
)