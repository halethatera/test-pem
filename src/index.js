const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Route to serve the .pem file
app.get("/.well-known/appspecific/com.tesla.3p.public-key.pem", (req, res) => {
  const filePath = path.join(__dirname, "key/com.tesla.3p.public-key.pem");
  res.status(200).sendFile(filePath, (err) => {
    if (err) {
      console.error("Error sending file:", err);
      res.status(500).send("Error serving the file.");
    } else {
      console.log("File sent successfully!");
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});
