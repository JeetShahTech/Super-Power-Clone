import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Testimonial } from "@/types/api/testimonial.types";

interface TestimonialState {
  testimonials: Testimonial[];
  loading: boolean;
}

const initialState: TestimonialState = {
  testimonials: [],
  loading: false,
};

export const fetchTestimonials = createAsyncThunk(
  "testimonials/fetchTestimonials",
  async () => {
    const res = await fetch(
      "https://api-staging.care360-next.carevalidate.com/graphql/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `
            query GetOrganizationTestimonials($linkName: String) {
              organizationPublicTestimonials(linkName: $linkName) {
                id
                rating
                customerName
                title
                content
                createdAt
                isVerified
              }
            }
          `,
          variables: {
            linkName: "senavida", 
          },
        }),
      }
    );

    const json = await res.json();

    return json.data.organizationPublicTestimonials;
  }
);

const testimonialSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestimonials.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTestimonials.fulfilled, (state, action) => {
        state.testimonials = action.payload;
        state.loading = false;
      })
      .addCase(fetchTestimonials.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default testimonialSlice.reducer;
