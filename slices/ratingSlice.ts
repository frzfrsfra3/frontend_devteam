import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Testimonial {
  id: string;
  name: string;
  feedback: string;
}

interface TestimonialsState {
  testimonials: Testimonial[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: TestimonialsState = {
  testimonials: [],
  status: "idle",
  error: null,
};

export const fetchTestimonials = createAsyncThunk(
  "testimonials/fetchTestimonials",
  async () => {
    const response = await fetch("http://localhost:8000/api/ratings");
    const data = await response.json();
    return data.data; // Adjust based on your API response structure
  }
);

const ratingSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestimonials.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTestimonials.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.testimonials = action.payload;
      })
      .addCase(fetchTestimonials.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch testimonials";
      });
  },
});

export default ratingSlice.reducer;
