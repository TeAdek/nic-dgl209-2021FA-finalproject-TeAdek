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
