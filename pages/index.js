import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import Head from 'next/head';
import { Fragment } from 'react';



function HomePage(props) {

    return (
    <Fragment>
        <Head>
            <title> Next.js Meetups</title>
            <meta
            http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"
            name="description"
            content="An app for creating a list of travel adventures and precious memories!"
            />
            </Head>
            <MeetupList meetups={props.meetups}/>
      </Fragment>
    )


   
}

export async function getStaticProps(){

    const client = await MongoClient.connect('mongodb+srv://ryan:1badpassword@cluster0.1k43r.mongodb.net/meetups?retryWrites=true&w=majority')
        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const meetups = await meetupsCollection.find().toArray();
        client.close();


    return{
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            }))
        },
        revalidate: 12
    };
}

export default HomePage;