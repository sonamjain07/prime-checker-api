import express from 'express';
import dotenv from 'dotenv';
dotenv.config();


const app = express();


// Route: Check Prime
app.get('/isPrime', (req, res) => {
  const number = req.query.number;

  if (!number) {
    return res.status(400).json({ error: 'Number is required in query!' });
  }

  const num = parseInt(number);

  if (isNaN(num)) {
    return res.status(400).json({ error: 'Please enter a valid number!' });
  }

  const isPrime = checkPrime(num);
  res.json({ number: num, isPrime });
});

// Prime Check Logic
function checkPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
