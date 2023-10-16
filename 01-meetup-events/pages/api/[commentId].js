import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    if (req.method === 'POST') {
        const filePath = path.join(process.cwd(), 'data', 'comments.json');
        const data = JSON.parse(fs.readFileSync(filePath));

        data.push(req.body);
        fs.writeFileSync(filePath, JSON.stringify(data));

        res.status(201).json({ message: 'Success!' });
    }

    if (req.method === 'GET') {
        const filePath = path.join(process.cwd(), 'data', 'comments.json');
        const data = JSON.parse(fs.readFileSync(filePath));

        const eventId = req.query.commentId;
        const comments = data.filter((comment) => comment.id === eventId);

        res.status(201).json({ comments });
    }
}
