import { MongoClient } from "mongodb";

export default async function StoreEmail(emailData) {
   const uri = process.env.EMAIL_DB_URI;
   const client = new MongoClient(uri, { useNewUrlParser: true });

   try {
      await client.connect();
      const collection = client.db("emailsSent").collection("emails");
      await collection.insertOne(emailData);
      console.log("Email Stored in the DataBase");
   } catch (error) {
      console.error(error);
   } finally {
      client.close();
   }
}
