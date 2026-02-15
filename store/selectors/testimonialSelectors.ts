import { RootState } from "../store";

export const selectAllTestimonials = (state: RootState) =>
  state.testimonials.testimonials;
