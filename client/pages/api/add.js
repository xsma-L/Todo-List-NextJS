export default async (req, res) => {
    if (!req.query.todo) {
        return res.status(400).send('todo parametre required.');
    }

    let todod = encodeURI(req.query.todo);

    const token = process.env.UPSTASH_REDIS_REST_TOKEN;
    const url = `${process.env.UPSTASH_REDIS_REST_URL}/lpush/todo/${todo}?_token=${token}`;

    return fetch(url)
        .then((r) => r.json)
        .then((data) => {
            JSON.stringify(data.result);
            return res.status(200).json(result);
        });
};