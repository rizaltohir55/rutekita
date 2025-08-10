const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001; // Gunakan port dari environment atau 3001

// Middleware sederhana untuk parsing JSON body
app.use(express.json());

// Route dasar untuk testing
app.get('/', (req, res) => {
  res.json({ message: 'Backend RuteKita is running!' });
});

app.listen(PORT, () => {
  console.log(`Server backend berjalan di http://localhost:${PORT}`);
});