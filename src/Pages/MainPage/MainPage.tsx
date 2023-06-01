import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Catalog } from '../../components/catalog/Catalog';
import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import './mainPage.css'
import { ProductList } from '../../components/ProductList/ProductList';
import { Cart } from '../CartPage/CartPage';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';


const defaultTheme = createTheme();

export default function MainPage() {
  const { shops } = useAppSelector(state => state.shops);
  const MoyoStore = shops[1].products;
  const RozetkaStore = shops[0].products;

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <Header />
    
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Routes>
            <Route path="/Rozetka" element={<ProductList list={RozetkaStore}/>} />

            <Route path="/Moyo" element={<ProductList list={MoyoStore}/>} />

            <Route path="/cart" element={<Cart/>} />

            <Route path="/" element={<Catalog list={shops}/>} />
          </Routes>
        </Container>
      </main>

      <Footer />
    </ThemeProvider>
  );
}