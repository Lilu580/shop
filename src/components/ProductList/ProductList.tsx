import Grid from '@mui/material/Grid';
import { Product } from '../../types/product';
import { ProductItem } from '../ProductItem/ProductItem';

type Props = {
  list: Product[]
}

export const ProductList: React.FC<Props> = ({list}) => {
  return (
    <>
      <Grid container spacing={4}>
        {list.map((card) => (
          <ProductItem card={card}/>
        ))}
      </Grid>
    </>
  )
}