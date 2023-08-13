import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const baseClient = new ApolloClient({
    uri: 'https://base-goerli.easscan.org/graphql',
    cache: new InMemoryCache()
});

baseClient
  .query({
        query: gql`
        query Query($where: AttestationWhereInput) {
            attestations(where: $where) {
            recipient
            schemaId
            }
        }
        `,
        variables:
        {
            "where": {
              "attester": {
                "equals": "0x6f9e2777D267FAe69b0C5A24a402D14DA1fBcaA1"
              },
              "schemaId": {
                "equals": "0x22cc8bd78942a630e45ac11521b9d126675b9e1958c5a269cdbda9c2749dd872"
              }
          }
        }
    })
  .then((result) => console.log("Atestations on Base", result.data));

const sepoliaClient = new ApolloClient({
    uri: 'https://sepolia.easscan.org/graphql',
    cache: new InMemoryCache()
});

sepoliaClient
  .query({
        query: gql`
        query Query($where: AttestationWhereInput) {
            attestations(where: $where) {
            recipient
            schemaId
            }
        }
        `,
        variables:
        {
            "where": {
              "attester": {
                "equals": "0x6f9e2777D267FAe69b0C5A24a402D14DA1fBcaA1"
              },
              "schemaId": {
                "equals": "0x22cc8bd78942a630e45ac11521b9d126675b9e1958c5a269cdbda9c2749dd872"
              }
          }
        }
    })
  .then((result) => console.log("Atestations on Sepolia", result.data));

const optimismClient = new ApolloClient({
    uri: 'https://optimism-goerli-bedrock.easscan.org/graphql',
    cache: new InMemoryCache()
});

optimismClient
  .query({
        query: gql`
        query Query($where: AttestationWhereInput) {
            attestations(where: $where) {
            recipient
            schemaId
            }
        }
        `,
        variables:
        {
            "where": {
              "attester": {
                "equals": "0x6f9e2777D267FAe69b0C5A24a402D14DA1fBcaA1"
              },
              "schemaId": {
                "equals": "0x22cc8bd78942a630e45ac11521b9d126675b9e1958c5a269cdbda9c2749dd872"
              }
          }
        }
    })
  .then((result) => console.log("Atestations on Optimism", result.data));