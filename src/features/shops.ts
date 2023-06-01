import { createSlice } from "@reduxjs/toolkit"
import Rozetka from '../images/rozetka.png';
import Moyo from '../images/moyo.png';
import Laptop from '../images/Laptop.png';
import Phone from '../images/Phone.png';

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    shops: [
      { 
        id: 2,
        name: 'Rozetka',
        image: Rozetka,
        description: 'Here you can buy smatphones, laptops, etc.',
        products: [
          { 
            id: 1,
            name: 'laptop',
            image: Laptop,
            description: 'laptop Asus',
            price: 500,
          },
          { 
            id: 3,
            name: 'Phone',
            image: Phone,
            description: 'Phone Samsung',
            price: 200,
          },
        ]
      },
      {
        id: 4,
        name: 'Moyo',
        image: Moyo,
        description: 'Here you can buy smatphones, laptops, etc.',
        products: [
          { 
            id: 5,
            name: 'Phone',
            image: Phone,
            description: 'Phone Samsung',
            price: 200,
          },
          { 
            id: 6,
            name: 'laptop',
            image: Laptop,
            description: 'laptop Asus',
            price: 500,
          },
        ]
      },
    ],
  },
  reducers: {
  }
})

export default shopSlice.reducer