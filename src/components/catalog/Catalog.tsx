import Grid from '@mui/material/Grid';
import { Shop } from '../../types/shop';
import { CatalogItem } from '../CatalogItem/catalogItem';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

type Props = {
  list: Shop[]
}

export const Catalog: React.FC<Props> = ({list}) => {
  return (
    <>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Choose your shop
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Here you can find different products from different shops
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
          </Stack>
        </Container>
      </Box>

      <Grid container spacing={4}>
        {list.map((card) => (
          <CatalogItem card={card}/>
        ))}
      </Grid>
    </>
  )
}