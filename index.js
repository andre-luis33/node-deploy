import express from 'express'

const app = express()

app.get('/', (req, res) => res.json({ message: "Welcome!" }))
app.get('/users', (req, res) => res.json({ message: "List of users" }))

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`👻 Server started at port ${port}`));