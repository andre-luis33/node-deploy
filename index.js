import express from 'express'

const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.json({ message: `Welcome, the port is ${port}!` }))
app.get('/users', (req, res) => res.json({ message: "List of users" }))

app.listen(port, () => console.log(`👻 Server started at port ${port}`));
