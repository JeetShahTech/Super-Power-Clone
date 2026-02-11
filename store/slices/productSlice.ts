import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  ProductBundle,
  ProductBundleResponse,
} from "@/types/api/product.types";
import { link } from "fs";

interface ProductState {
  bundles: ProductBundle[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  bundles: [],
  loading: false,
  error: null,
};

export const fetchProductBundles = createAsyncThunk<ProductBundle[]>(
  "products/fetchBundles",
  async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query GetProductBundles($linkName: String) {
  organizationPartnerIntegrationPublicInfo(linkName: $linkName) {
    productBundles {
      id
      name
      price
      imageUrl
      tag
    }
  }
}

      `,
        variables: {
          linkName: process.env.NEXT_PUBLIC_LINK_NAME || null,
        },
      }),
    });

    const json = await res.json();

    console.log("FETCH RESPONSE:", json);
    if (json.errors) {
      throw new Error(json.errors[0].message);
    }

    return json.data.organizationPartnerIntegrationPublicInfo.productBundles;
  },
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductBundles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductBundles.fulfilled, (state, action) => {
        state.loading = false;
        state.bundles = action.payload;
      })
      .addCase(fetchProductBundles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error fetching products";
      });
  },
});

export default productSlice.reducer;
