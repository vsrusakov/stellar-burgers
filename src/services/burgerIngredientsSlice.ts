import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getIngredientsApi } from '../utils/burger-api';
import { TIngredient } from '../utils/types';

interface BurgerIngredientsState {
  ingredients: TIngredient[];
  status: 'idle' | 'loading' | 'success' | 'failed';
  error: string | null;
}

const initialState: BurgerIngredientsState = {
  ingredients: [],
  status: 'idle',
  error: null
};

export const fetchIngredients = createAsyncThunk(
  'burgerIngredients/fetchIngredients',
  getIngredientsApi
);

const burgerIngredientsSlice = createSlice({
  name: 'burgerIngredients',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.status = 'success';
        state.ingredients = action.payload;
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.status = 'failed';
        state.error =
          action.error.message ?? 'Не удалось загрузить ингредиенты';
      });
  }
});

export default burgerIngredientsSlice.reducer;
