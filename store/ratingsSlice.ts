
import { createSlice } from '@reduxjs/toolkit';

interface Rating {
  id: number;
  rating: number;
}

interface RatingsState {
  ratings: Rating[];
  isLoading: boolean;
  error: string | null;
}

const initialState: RatingsState = {
  ratings: [],
  isLoading: false,
  error: null,
};

const ratingsSlice = createSlice({
  name: 'ratings',
  initialState,
  reducers: {
    fetchRatingsRequest(state) {
      state.isLoading = true;
    },
    fetchRatingsSuccess(state, action) {
      state.ratings = action.payload;
      state.isLoading = false;
    },
    fetchRatingsError(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { fetchRatingsRequest, fetchRatingsSuccess, fetchRatingsError } = ratingsSlice.actions;
export default ratingsSlice.reducer;