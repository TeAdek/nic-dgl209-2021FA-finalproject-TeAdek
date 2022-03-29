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

export const GET_COLLECTIONSELECTION = gql `query Data($pagination: PaginationArg) {
  collections(pagination: $pagination) {
    data {
      id
      attributes {
        categoryName
        categoryImages {
          data {
            attributes {
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


export const GET_PAGEINTRODUCTIONS = gql `
query Post($postId: ID) {
  post(id: $postId) {
    data {
      id
      attributes {
        pages
        pageImage {
          data {
            attributes {
              url
            }
          }
        }
        pageName
        additionalstuff
        additionalstuff2
      }
    }
  }
}`

export const GET_LOCATIONS = gql`query Locations {
  locations {
    data {
      id
      attributes {
        locationName
        locationImage {
          data {
            attributes {
              url
            }
          }
        }
        address
        openFor
      }
    }
  }
}`

export const GET_LOCATIONDETAILS = gql`
query Location($locationId: ID) {
  location(id: $locationId) {
    data {
      attributes {
        locationName
        address
        openFor
        mapURL
        locationDescription
        phoneNumber
        locationImage {
          data {
            id
            attributes {
              url
            }
          }
        }
      }
      id
    }
  }
}`

export const GET_COLLECTIONPRODUCT = gql `
query CategoryProducts($collectionId: ID) {
  collection(id: $collectionId) {
    data {
      id
      attributes {
        products {
          data {
            attributes {
              productName
              price
              description
              details
              images {
                data {
                  attributes {
                    url
                  }
                }
              }
              countInStock
             
            }
            id
          }
        }
        categoryName
        categoryImages {
          data {
            attributes {
              url
            }
          }
        }
        post {
          data {
            id
            attributes {
              pages
              pageName
              pageImage {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}`

export const GET_SLIDESHOWS = gql `query Slideshows {
  slideshows {
    data {
      id
      attributes {
        description
        title
        image {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}`

export const GET_BLOGPOSTS = gql `query Blog {
  blogs {
    data {
      id
      attributes {
        title
        post
        date
        summary
        images {
          data {
            id
            attributes {
              url
            }
          }
        }
      }
    }
  }
}`