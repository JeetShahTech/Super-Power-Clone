import { RootState } from "../store";

export const selectFaq = (state: RootState) => state.faq.items;
export const selectFaqLoading = (state: RootState) => state.faq.loading;
