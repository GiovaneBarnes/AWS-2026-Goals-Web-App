// index.js (CommonJS style)

// DynamoDB client (AWS SDK v3)
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, ScanCommand } = require("@aws-sdk/lib-dynamodb");

// Create the DynamoDB client + document client wrapper
const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

// Table name (env var or fallback)
const TABLE_NAME = process.env.TABLE_NAME || "StudentGoals";

exports.handler = async () => {
  try {
    // Scan the DynamoDB table
    const result = await docClient.send(
      new ScanCommand({
        TableName: TABLE_NAME,
      })
    );

    // Pick only the fields the UI needs
    const items = (result.Items || []).map(i => ({
      name: i.name,
      goal: i.goal,
    }));

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(items),
    };
  } catch (err) {
    console.error("Error in GET /goals:", err);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        message: "Error getting goals",
        error: err.message,
      }),
    };
  }
};
