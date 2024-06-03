import { useState } from 'react';
import axios from 'axios';
import { Input , FormControl, Button, InputLabel , Container, Typography } from '@mui/material';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await axios.post('https://localhost:7276/api/UserLoginSignup/login', { email, password },
      {
        headers: {
          "access-control-allow-origin": "*",
          "Content-type": "application/json; charset=UTF-8"
        }
      }
      );
      localStorage.setItem('token', response.data.token);
      window.location.href = '/';
    } catch (error) {
      console.error('Sign in failed', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4">Sign In</Typography>
      <FormControl fullWidth margin="normal" required>
        <InputLabel>Email</InputLabel>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth margin="normal" required>
        <InputLabel>Password</InputLabel>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleSignIn}>
        Sign In
      </Button>
    </Container>
  );
};

export default SignInPage;
