// <imports>
import { CosmosClient } from '@azure/cosmos'
// </imports>

// <client>
const cosmosClient = new CosmosClient({
  endpoint: 'https://localhost:8081/',
  key: 'C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw=='
})
// </client>

// <resources>
const { database } = await cosmosClient.databases.createIfNotExists({
  id: 'cosmicworks',
  throughput: 400
})

const { container } = await database.containers.createIfNotExists({
  id: 'products',
  partitionKey: {
    paths: [
      '/id'
    ]
  }
})
// </resources>

// <upsert>
const item = {
  id: '68719518371',
  name: 'Kiama classic surfboard'
}

container.items.upsert(item)
// </upsert>
