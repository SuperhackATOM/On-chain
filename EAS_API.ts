import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://base-goerli.easscan.org/graphql',
    cache: new InMemoryCache()
});

client
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
  .then((result) => console.log(result.data));