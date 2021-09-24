 
import {MongoClient} from 'mongodb';

 // /api/new-meetup


 async function handler(req, res){
     if(req.method ==='POST'){
         const data = req.body;


         
        const client = await MongoClient.connect('mongodb+srv://ryan:1badpassword@cluster0.1k43r.mongodb.net/meetups?retryWrites=true&w=majority')
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);
        console.log(result)

        client.close();

        res.status(201).json({message: 'Saved'});


     }

 }


 export default handler;