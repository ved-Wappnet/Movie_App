import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    toggleFavorite: (state, action) => {
      const movie = action.payload;
      const index = state.findIndex((fav) => fav.imdbID === movie.imdbID);
      if (index === -1) {
        state.push(movie);
      } else {
        state.splice(index, 1);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const selectFavoritesCount = (state) => state.favorites.length;
export default favoritesSlice.reducer;
