import {gql} from '@apollo/client'

export const GET_VALENTINEGIFTS = gql `
query ValentineCollections($collectionId: ID) {
  collection(id: $collectionId) {
    data {
      id
      attributes {
        products {
          data {
            id
            attributes {
              productName
              description
              images {
                data {
                  attributes {
                    name
                    url
                  }
                }
              }
              price
            }
          }
        }
      }
    }
  }
}`


export const GET_COLLECTIONLIST = gql `query CollectionsList {
  collections {
    data {
      id
      attributes {
        categoryName
        products {
          data {
            id
            attributes {
              productName
            }
          }
        }
        categoryImages {
          data {
            id
            attributes {
              name
              url
            }
          }
        }
      }
    }
  }
}`


export const GET_PRODUCTDETAILS = gql `
query Product($productId: ID) {
  product(id: $productId) {
    data {
      id
      attributes {
        price
        productName
        description
        details
        images {
          data {
            id
            attributes {
              name
              url
            }
          }
        }
        countInStock
        collections {
          data {
            attributes {
              categoryName
            }
            id
          }
        }
      }
    }
  }
}`