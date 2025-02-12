import { createSlice } from '@reduxjs/toolkit';

// Initial state for the category
const initialState = {
  selectedCategory: "All",
};

// Create the slice
const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

// Export the action and reducer
export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;
