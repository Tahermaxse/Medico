const sdk = require("node-appwrite");

const client = new sdk.Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite Endpoint
  .setProject("66aa4c740015bbf8502f")
  .setKey(
    "7c10bb15cd11ae591818fe7979c807cb459d22be9d48f83e5358b0d9b3df7184ec8bb45c2828acf6b5dd9e40a727549c62cab09790be96ddb730abd082e7268d2e5ebf95b6746188ea414fb529cca7ae133b90736128f8f7efb2c19d630eb01355cecfef5934da8b1e8571ab6a007375343f6330e8914a3211aaa4e3cdc5d971"
  ); // Use an API key with Database read permissions

const databases = new sdk.Databases(client);

async function exportData() {
  try {
    const response = await databases.listDocuments(
      "66aa4cef0012da07e759",
      "66aa4dc00031b20950d2"
    );
    console.log(JSON.stringify(response.documents, null, 2)); // Save this JSON
  } catch (error) {
    console.error(error);
  }
}

exportData();
