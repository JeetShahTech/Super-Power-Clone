export interface ProductBundle {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  tag: string;   // category
}

export interface ProductBundleResponse {
  organizationPartnerIntegrationPublicInfo: {
    productBundles: ProductBundle[];
  };
}
