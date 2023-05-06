import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtocart: (state,action) => {
        const item = state.products.find((item)=>item.id===action.payload.id);
        if(item){
            item.quantity+=action.payload.quantity;
        }else{
            state.products.push(action.payload)
        }
     
    },
    removefromcart: (state,action) => {
     state.products=state.products.filter((item)=>item.id!==action.payload.id)
    },
  },
})
export const { addtocart, removefromcart } = counterSlice.actions

export default counterSlice.reducer