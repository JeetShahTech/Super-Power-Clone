import { createSelector } from "reselect";
import { RootState } from "../store";
import { ProductBundle } from "@/types/api/product.types";

const selectBundles = (state: RootState) => state.products.bundles || [];

export const selectProductsByCategory = createSelector(
  [selectBundles],
  (bundles): Record<string, ProductBundle[]> => {
    const grouped: Record<string, ProductBundle[]> = {};

    bundles.forEach((bundle) => {
      const category = bundle.tag || "Other";

      if (!grouped[category]) grouped[category] = [];

      grouped[category].push(bundle);
    });

    return grouped;
  },
);

export const selectAllBundlesFlat = (state: RootState): ProductBundle[] =>
  state.products.bundles || [];
