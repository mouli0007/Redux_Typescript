import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { addCar } from "./CarsSlice";
interface STATE {
  name: string | undefined;
  cost: number;
}

const initialState: STATE = {
  name: "",
  cost: 0,
};

// Creating the function !

export const getCartItems = createAsyncThunk("cart/getCart", async () => {
  try {
    const response = await fetch("url");
    return response.json();
  } catch (err: any) {
    console.log(err);
    throw new Error(err);
  }
});

export const formSlice = createSlice({
  name: "Form",
  initialState,
  reducers: {
    changeName: (state: STATE, action: PayloadAction<string>) => {
      state.name = action.payload;
    },

    changeCost: (state: STATE, action: PayloadAction<number>) => {
      state.cost = action.payload;
    },
  },

  extraReducers(builder) {
    builder.addCase(getCartItems.pending, () => {});
    builder.addCase(getCartItems.fulfilled, () => {});
    builder.addCase(getCartItems.rejected, () => {});
    builder.addCase(addCar, (state) => {
      (state.name = ""), (state.cost = 0);
    });
  },
});

export const { changeName, changeCost } = formSlice.actions;

export default formSlice.reducer;
