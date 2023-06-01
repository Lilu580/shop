import { makeStyles } from '@mui/styles';
import { Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Theme } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { removeItem } from '../../features/cart';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    backgroundColor: '#fff',
  },
  total: {
    marginTop: '10px',
    textAlign: 'right',
  },
}));

export const Cart: React.FC = () => {
  const classes = useStyles();
  const { products } = useAppSelector(state => state.shopCart);
  const dispatch = useAppDispatch();

  const cartItems = products;

  console.log(products);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handleDeleteItem = (itemId: number) => {
    dispatch(removeItem(itemId));
  };
  return (
    <div className={classes.root}>
      <Typography variant="h6" gutterBottom>
        Shopping Cart
      </Typography>
      {products.length === 0 && (
        <Typography variant="h6" gutterBottom>
          Your cart is Empty
        </Typography>
      )}
      <List>
        {cartItems.map((item) => (
          <ListItem key={item.id}>
            <ListItemText primary={item.name} secondary={`$${item.price}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteItem(item.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <Typography variant="subtitle1" className={classes.total}>
        Total: ${calculateTotal()}
      </Typography>
    </div>
  );
};