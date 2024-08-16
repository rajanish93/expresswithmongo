import express from 'express';

// Initialize Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Route with a parameter
app.get('/hello/:name', (req, res) => {
    const { name } = req.params;
    res.send(`Hello, ${name}!`);
});

// Post route example
app.post('/data', (req, res) => {
    console.log(req.body);
    const { name, age } = req.body;
    res.send(`You name is: ${name} and age is ${age}`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
