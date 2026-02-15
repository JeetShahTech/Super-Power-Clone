import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Faq } from "@/constants/faqFallback";

type FaqState = {
  items: Faq[];
  loading: boolean;
};

const initialState: FaqState = {
  items: [],
  loading: false,
};

export const fetchFaq = createAsyncThunk<Faq[], string>(
  "faq/fetch",
  async (linkName: string) => {
    const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
        query GetPartnerInfo($linkName: String) {
          organizationPartnerIntegrationPublicInfo(linkName: $linkName) {
            faq {
              id
              question
              answer
              index
            }
          }
        }
        `,
        variables: { linkName },
      }),
    });

    const json = await res.json();

    return json.data.organizationPartnerIntegrationPublicInfo.faq || [];
  }
);

const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFaq.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFaq.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchFaq.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default faqSlice.reducer;
