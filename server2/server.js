import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import bcrypt from 'bcrypt';
import sql from './config/db.js';
import jwt from 'jsonwebtoken';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server2 is running');
});
app.post('/api/auth/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }
        
        const password_hash = await bcrypt.hash(password, 10);
        const user = await sql`INSERT INTO users (email, password_hash) VALUES (${email}, ${password_hash}) RETURNING id, email, created_at`;
        res.status(201).json({ message: 'Registration successful', user: user[0] });
    } catch (error) {
        // Check if error is due to unique constraint violation (duplicate email)
        if (error.code === '23505' || error.message?.includes('unique') || error.message?.includes('duplicate')) {
            return res.status(409).json({ message: 'Email already exists' });
        }
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


app.post('/api/auth/login', async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
  
    const user = await sql`SELECT * FROM users WHERE email = ${email}`;
    if (user.length === 0) {
      return res.status(400).json({ message: 'User not found' });
    }
  
    const isMatch = await bcrypt.compare(password, user[0].password_hash);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }
  
    const token = jwt.sign(
      { id: user[0].id, email: user[0].email },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
  
    res.json({ message: 'Login successful', token });
  });
  

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});