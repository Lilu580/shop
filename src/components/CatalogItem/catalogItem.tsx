import { Product, Shop } from "../../types/shop"
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
type Props = {
  card: Shop | Product
}

export const CatalogItem: React.FC<Props> = ({card}) => {
  return (
    <Grid item key={card.image} xs={12} sm={6} md={4}>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia
          component="div"
          sx={{
            // 16:9
            pt: '56.25%',
          }}
          image={card.image}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {card.name}
          </Typography>
          <Typography>
            {card.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/${card.name}`}>
            <Button size="small">View</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}