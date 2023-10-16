import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const userEmail = req.body;

        if (!userEmail || !userEmail.includes('@')) {
            res.status(422).json({ message: 'Invalid email address.' });
            return;
        }

        const client = await MongoClient.connect(
            'mongodb+srv://ionsticidev:0it8RDyEZQbvrljF@cluster0.ybiwzkl.mongodb.net/events?retryWrites=true&w=majority'
        );

        const db = client.db();

        await db.collection('newsletter').insertOne({ email: userEmail });

        client.close();

        res.status(201).json({ message: 'Signed up!' });
    }
}

/* 0it8RDyEZQbvrljF */
