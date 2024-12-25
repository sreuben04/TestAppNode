const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files (for stylesheets, images, etc.)
app.use(express.static('public'));

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Home route to display the form
app.get('/', (req, res) => {
  res.send(`
    <html>
    <head>
      <title>Form with Password</title>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <div class="form-container">
        <h1>Register</h1>
        <form action="/submit" method="POST">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required><br><br>
          
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required><br><br>
          
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required><br><br>
          
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required><br><br>

          <button type="submit">Submit</button>
        </form>
      </div>
    </body>
    </html>
  `);
});

// Route to handle form submission
app.post('/submit', (req, res) => {
  const { username, password, email, name } = req.body;
  console.log(`Username: ${username}, Password: ${password}, Email: ${email}, Name: ${name}`);
  res.send('Form Submitted Successfully!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
