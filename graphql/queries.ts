export const GET_PRODUCT_BUNDLES = `
query GetProductBundles($linkname: String) {
  organizationPartnerIntegrationPublicInfo(linkname: $linkname) {
    productBundles {
      id
      name
      price
      imageUrl
      tag
    }
  }
}
`;
