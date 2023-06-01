import { Product } from "../../types/product"
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { useAppDispatch } from "../../app/hooks";
import { addItem } from "../../features/cart";
type Props = {
  card: Product
}

export const ProductItem: React.FC<Props> = ({card}) => {
  const dispatch = useAppDispatch();

  const handleAddProduct = (product: Product) => {
    dispatch(addItem(product));
  }


  return (
    <Grid item key={card.image} xs={12} sm={6} md={4}>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia
          component="div"
          sx={{
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
          <Typography>
            {card.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => handleAddProduct(card)}>Add to cart</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}