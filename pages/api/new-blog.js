import { MongoClient } from 'mongodb'

const Handler = async (req, res) => {
    if(req.method !== 'POST') return;

    const {image, title, description, details} = JSON.parse(req.body);
    const slug = title.toLowerCase();

    if(!image || !title || !description) return;

    const client = await MongoClient.connect("mongodb+srv://blasters99:abcdefg99@cluster0.zmlmmfm.mongodb.net/crash?retryWrites=true&w=majority");

    const db = client.db();

    const postCollection = db.collection('posts');

    const result = await postCollection.insertOne({image, title, description, details, slug});

    client.close();
    res.status(201).json({
        post: result,
        message: 'Connectec'
    })

    console.log(res)
}

export default Handler;