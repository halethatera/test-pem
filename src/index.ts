import express, { Request, Response } from 'express';
import path from 'path'
const app = express();
const PORT = 4000;

app.get('/.well-known/appspecific/com.tesla.3p.public-key.pem', (req, res) => {
    res.sendFile(path.join(__dirname, '.well-known/appspecific/com.tesla.3p.public-key.pem'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Proxy server running at http://localhost:${PORT}`);
});