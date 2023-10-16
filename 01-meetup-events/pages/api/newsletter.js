import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    if (req.method === 'POST') {
        const email = req.body;
        console.log(email);

        const filePath = path.join(process.cwd(), 'data', 'emails.json');
        const data = JSON.parse(fs.readFileSync(filePath));

        data.push(email);
        fs.writeFileSync(filePath, JSON.stringify(data));

        res.status(201).json({ message: 'Success!', email });
    } else {
        res.status(200).json({ message: 'Hello World!' });
    }

    if (req.method === 'GET') {
        console.log('GET');
    }
}
